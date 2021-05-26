import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { RoundType } from '../types/RoundType';
import { BattleResultsType } from '../types/BattleResultsType';
import { OpponentType } from "../types/OpponentType";

import ResultsScreen from "../screens/ResultsScreen";

import axios from "axios";

import { setError } from "../actions/errorActions";
import { useErrorContext } from "../custom-hooks/useErrorContext";
import { useCustomContext } from "../custom-hooks/useGameContext";

export default function ResultsContainer() {
  let { id } = useParams<{ id: string }>();
  const { state } = useCustomContext();
  const { errorDispatch } = useErrorContext();
  const [fightStatus, setFightStatus] = useState(0);
  const [opponent, setOpponent] = useState<OpponentType>({
    Name: null,
    WarriorType: 0,
    Attacks: [],
  });
  const [fightRounds, setFightRounds] = useState<RoundType[]>([]);
  const mounted = useRef(false);

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
            +response.data.result.fight.Status === 1 &&
            mounted.current
          ) {
            setOpponent({ ...response.data.result.fight.Warrior2 });
            setFightStatus(1);
            battleResults();
          } else if (
            +response.data.result.fight.Status === 2 &&
            mounted.current
          ) {
            setFightRounds(response.data.result.fight.Rounds);
            setFightStatus(2);
          } else if (
            +response.data.result.fight.Status < 2 &&
            mounted.current
          ) {
            battleResults();
          } else {
            console.log("Something unpredicted happened!");
          }
        })
        .catch((err) => console.log(err));
    }

    battleResults()

    return () => {
      mounted.current = false;
    };
  }, [errorDispatch, id]);

  return (
    <ResultsScreen
      state={state}
      fightStatus={fightStatus}
      opponent={opponent}
      fightRounds={fightRounds}
    />
  );
}
