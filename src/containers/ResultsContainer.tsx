import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { RoundType } from "../types/RoundType";
import { BattleResultsType } from "../types/BattleResultsType";
import { OpponentType } from "../types/OpponentType";

import ResultsScreen from "../screens/ResultsScreen";

import axios from "axios";

import { setError } from "../actions/errorActions";
import { useErrorContext } from "../custom-hooks/useErrorContext";
import { useCustomContext } from "../custom-hooks/useGameContext";
import { setFullWarrior } from "../actions/gameActions";

export default function ResultsContainer() {
  let history = useHistory();
  let { id } = useParams<{ id: string }>();
  const { state, dispatch } = useCustomContext();
  const { errorDispatch } = useErrorContext();
  const [fightStatus, setFightStatus] = useState(0);
  const [opponent, setOpponent] = useState<undefined | OpponentType>(undefined);
  const [fightRounds, setFightRounds] = useState<RoundType[]>([]);

  const mounted = useRef(false);
  const [totalWinner, setTotalWinner] = useState<string>("");

  useEffect(() => {
    if (!state.warriorName) {
      const battleResultsData: BattleResultsType = {
        jsonrpc: "2.0",
        id: "1",
        method: "Status",
        params: {
          id,
        },
      };

      axios
        .post(
          "https://recruitment-test.ants.house/jsonrpc2/whawhai/v1",
          battleResultsData
        )
        .then((response) => {
          if (response.data.error) {
            errorDispatch(
              setError(
                response.data.error.message,
                response.data.error.code,
                response.data.error?.data?.reason
              )
            );
          } else if (response.data.result.fight.Warrior1) {
            dispatch(setFullWarrior(
              response.data.result.fight.Warrior1.Name, 
              response.data.result.fight.Warrior1.WarriorType, 
              response.data.result.fight.Warrior1.Attacks)
            )
          }
        })
        .catch((err) => console.log(err));
    }

    return () => {};
  }, [state.warriorName, dispatch, errorDispatch, id]);

  useEffect(() => {
    mounted.current = true;

    const battleResultsData: BattleResultsType = {
      jsonrpc: "2.0",
      id: "1",
      method: "Status",
      params: {
        id,
      },
    };

    function battleResults() {
      axios
        .post(
          "https://recruitment-test.ants.house/jsonrpc2/whawhai/v1",
          battleResultsData
        )
        .then((response) => {
          if (response.data.error) {
            errorDispatch(
              setError(
                response.data.error.message,
                response.data.error.code,
                response.data.error?.data?.reason
              )
            );
          } else if (
            +response.data.result.fight.Status === 2 &&
            mounted.current
          ) {
            setFightRounds(response.data.result.fight.Rounds);
            setOpponent({ ...response.data.result.fight.Warrior2 });
            setFightStatus(2);
          } else if (
            +response.data.result.fight.Status < 2 &&
            mounted.current
          ) {
            battleResults();
          } else {
            console.log(response, "Something unpredicted happened!");
          }
        })
        .catch((err) => console.log(err));
    }

    battleResults();

    return () => {
      mounted.current = false;
    };
  }, [errorDispatch, id]);

  useEffect(() => {
    if (fightStatus > 1 && totalWinner === "") {
      let hostResult = 0;
      let opponentResult = 0;

      for (let i = 0; i < fightRounds.length; i++) {
        if (
          (fightRounds[i].Warrior1Attack === 0 &&
            fightRounds[i].Warrior2Attack === 1) ||
          (fightRounds[i].Warrior1Attack === 1 &&
            fightRounds[i].Warrior2Attack === 2) ||
          (fightRounds[i].Warrior1Attack === 2 &&
            fightRounds[i].Warrior2Attack === 0)
        ) {
          opponentResult += 1;
        } else if (
          (fightRounds[i].Warrior1Attack === 1 &&
            fightRounds[i].Warrior2Attack === 0) ||
          (fightRounds[i].Warrior1Attack === 2 &&
            fightRounds[i].Warrior2Attack === 1) ||
          (fightRounds[i].Warrior1Attack === 0 &&
            fightRounds[i].Warrior2Attack === 2)
        ) {
          hostResult += 1;
        }
      }

      hostResult > opponentResult
        ? setTotalWinner("host")
        : opponentResult > hostResult
        ? setTotalWinner("opponent")
        : setTotalWinner("draw");
    }
    return () => {};
  }, [fightRounds, fightStatus, totalWinner]);

  function tryAgain() {
    history.push("/")
  }

  return (
    <ResultsScreen
      state={state}
      fightStatus={fightStatus}
      opponent={opponent}
      fightRounds={fightRounds}
      totalWinner={totalWinner}
      tryAgain={tryAgain}
    />
  );
}
