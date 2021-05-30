import React from "react";
import { Props } from "../types/FightRoundsType";

import { RoundType } from "../types/RoundType";
import RoundsComponent from "./RoundsComponent";

export default function FightRounds(props: Props) {
  return (
    <>
      {props?.fightRounds?.length ? (
        <div className="fight-rounds">
          {props.fightRounds.map((round: RoundType, index: number) => (
            <RoundsComponent
              key={index}
              num={index}
              state={props.state}
              round={round}
              opponent={props.opponent}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
