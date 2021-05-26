import React, { useEffect, useState } from "react";
import { RoundsProps } from "../types/RoundsPropsType";

import "./RoundsComponent.css";

export default function RoundsComponent(props: RoundsProps) {
  const [roundWinner, setRoundWInner] = useState(0);

  useEffect(() => {
    if (
      (props.round.Warrior1Attack === 0 && props.round.Warrior2Attack === 1) ||
      (props.round.Warrior1Attack === 1 && props.round.Warrior2Attack === 2) ||
      (props.round.Warrior1Attack === 2 && props.round.Warrior2Attack === 0)
    ) {
      setRoundWInner(2);
    } else if (
      (props.round.Warrior1Attack === 1 && props.round.Warrior2Attack === 0) ||
      (props.round.Warrior1Attack === 2 && props.round.Warrior2Attack === 1) ||
      (props.round.Warrior1Attack === 0 && props.round.Warrior2Attack === 2)
    ) {
      setRoundWInner(1);
    } else {
      setRoundWInner(0);
    }

    return () => {};
  }, [props.round.Warrior1Attack, props.round.Warrior2Attack]);

  return (
    <p className="single-round">
      <span>{props.num + 1}. </span>
      <span className={`${roundWinner === 2 ? "round-lost" : ""}`}>
        {
          props.state.warriors[props.state.selectedWarrior].attacks[
            props.round.Warrior1Attack
          ]
        }
      </span>
      <span> - </span>
      <span className={`${roundWinner === 1 ? "round-lost" : ""}`}>
        {
          props.state.warriors[props.opponent.WarriorType].attacks[
            props.round.Warrior2Attack
          ]
        }
      </span>
    </p>
  );
}
