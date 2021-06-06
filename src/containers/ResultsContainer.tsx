import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { RoundType } from "../types/RoundType";
import { OpponentType } from "../types/OpponentType";

import ResultsScreen from "../screens/ResultsScreen";
import { WhawhaiSite } from '../enums/WhawhaiSiteEnum';

import axios from "axios";

import { setError } from "../actions/errorActions";
import { useErrorContext } from "../custom-hooks/useErrorContext";
import { useCustomContext } from "../custom-hooks/useGameContext";
import { setFullWarrior } from "../actions/gameActions";

import { FightStatus } from '../enums/FightStatusEnum';

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
      axios
        .post(
          WhawhaiSite.url,
          {
            method: "Status",
            params: {
              id,
            },
          }
        )
        .then((response) => {
          if (response.data.error) {
            errorDispatch(
              setError(
                response.data.error.message,
                response.data.error.code,
                response.data.error?.data?.reason,
                "error"
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
    function battleResults() {
      axios
        .post(
          WhawhaiSite.url,
          { method: "Status",
          params: {
            id,
          },}
        )
        .then((response) => {
          if (response.data.error && mounted.current) {
            errorDispatch(
              setError(
                response.data.error.message,
                response.data.error.code,
                response.data.error?.data?.reason,
                "error"
              )
            );
          } else if (
            +response.data.result.fight.Status === FightStatus.FightStart &&
            mounted.current
          ) {
            setOpponent({ ...response.data.result.fight.Warrior2 });
            setFightStatus(1);
            battleResults();
          } else if (
            +response.data.result.fight.Status === FightStatus.FightEnd &&
            mounted.current
          ) {
            setFightRounds(response.data.result.fight.Rounds);
            setOpponent({ ...response.data.result.fight.Warrior2 });
            setFightStatus(2);
          } else if (
            +response.data.result.fight.Status < FightStatus.FightEnd &&
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
    if (fightStatus >= FightStatus.FightStart && totalWinner === "") {
      let hostResult = 0;
      let opponentResult = 0;

      let hostAttacks = state.selectedAttacks;
      let opponentAttacks = opponent?.Attacks;

      let fightRounds = [];

      if (opponentAttacks && hostAttacks) {

        fightRounds.push({AttackerOne: hostAttacks[0], AttackerTwo: opponentAttacks[0]})
        fightRounds.push({AttackerOne: hostAttacks[1], AttackerTwo: opponentAttacks[1]})
        fightRounds.push({AttackerOne: hostAttacks[2], AttackerTwo: opponentAttacks[2]})

        for (let i = 0; i < hostAttacks.length; i++) {
          if (
            (hostAttacks[i] === 0 &&
              opponentAttacks[i] === 1) ||
            (hostAttacks[i] === 1 &&
              opponentAttacks[i] === 2) ||
            (hostAttacks[i] === 2 &&
              opponentAttacks[i] === 0)
          ) {
            opponentResult += 1;
          } else if (
            (hostAttacks[i] === 1 &&
              opponentAttacks[i] === 0) ||
            (hostAttacks[i] === 2 &&
              opponentAttacks[i] === 1) ||
            (hostAttacks[i] === 0 &&
              opponentAttacks[i] === 2)
          ) {
            hostResult += 1;
          }
        }

      }

      hostResult > opponentResult
        ? setTotalWinner("host")
        : opponentResult > hostResult
        ? setTotalWinner("opponent")
        : setTotalWinner("draw");
    }
    return () => {};
  }, [fightStatus, totalWinner, opponent?.Attacks, state.selectedAttacks]);
 
  function tryAgain() {
    history.push("/")
  }

  function chickenOut() {
    errorDispatch(
      setError(
        "Too late to chicken out",
        420,
        "You can't quit now",
        "info"
      )
    );
  }

  return (
    <ResultsScreen
      state={state}
      fightStatus={fightStatus}
      opponent={opponent}
      fightRounds={fightRounds}
      totalWinner={totalWinner}
      tryAgain={tryAgain}
      chickenOut={chickenOut}
    />
  );
}
