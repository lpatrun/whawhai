import React from "react";
import { Props } from "../types/FightButtonsType";

export default function FightButtons(props: Props) {
  return (
    <div className="flex-center">
     
        <button className="btn btn-primary" onClick={ props.fightStatus ===  1 ? props.chickenOut : props.tryAgain}>
        { props.fightStatus === 0 && "PANIC!!!" }
        { props.fightStatus === 1 && "SURRENDER!!!" }
        { props.fightStatus === 2 && "AGAIN!!!" }
        </button>
    </div>
  );
}
