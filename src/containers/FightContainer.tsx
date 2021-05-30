import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router";
import { useCustomContext } from "../custom-hooks/useGameContext";
import { useErrorContext } from "../custom-hooks/useErrorContext";
import { setError } from "../actions/errorActions";

import { BattleRegistrationType } from "../types/BattleRegistrationType";
import FightScreen from "../screens/FightScreen";

import axios from "axios";

export default function FightView() {
  const { state } = useCustomContext();
  const { errorDispatch } = useErrorContext();
  const mounted = useRef(false);
  let history = useHistory();

  useEffect(() => {
    mounted.current = true;
    const battleRegistrationData: BattleRegistrationType = {
      jsonrpc: "2.0",
      method: "Register",
      params: {
        application: {
          name: state.warriorName,
          warriorType: state.selectedWarrior,
          attacks: state.selectedAttacks,
        },
      },
      id: "1",
    };

    axios
      .post(
        "https://recruitment-test.ants.house/jsonrpc2/whawhai/v1",
        battleRegistrationData
      )
      .then((response) => {
        if (response.data?.result?.id) {
          history.push("/fight/" + response.data.result.id);
        } else if (response.data.error) {
          errorDispatch(
            setError(
              response.data.error.message,
              response.data.error.code,
              response.data.error?.data?.reason
            )
          );
        }
      })
      .catch((err) => console.log(err));

    return () => {
      mounted.current = false;
    };
  }, [
    state.selectedAttacks,
    state.selectedWarrior,
    state.warriorName,
    errorDispatch,
    history,
  ]);

  return <FightScreen state={state} />;
}
