import React from "react";
import { useHistory } from "react-router-dom";
import { useCustomContext } from '../custom-hooks/useGameContext'
import { selectWarrior, clearCustomWarrior } from '../actions/gameActions'
import WarriorsScreen from '../screens/WarriorsScreen'

export default function WarriorsView() {
  const { state, dispatch } = useCustomContext();
  const history = useHistory();

  const setWarrior = (id: number) => {
    dispatch(clearCustomWarrior());
    dispatch(selectWarrior(id));

    history.push("/");
  };

  return ( <WarriorsScreen state={state} setWarrior={setWarrior}/> );
}
