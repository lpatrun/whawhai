import React from "react";
import { Props } from "../types/FightPropsType";

import "./FightScreen.css";

export default function FightScreen(props: Props) {
  return (
    <div className="container">
      <div className="fight-name">
        <h1>PAKIPAKI</h1>
      </div>

      <div className="fight-wrapper">
        <div className="fight-wrapper__item">
          <p>{props.state.warriorName}</p>
          <img
            src={
              require(`../images/${
                props.state.warriors[props.state.selectedWarrior].image
              }.svg`).default
            }
            alt={props.state.warriorName}
          />
        </div>
        <div className="fight-wrapper__item">
          <h2>VS</h2>
        </div>
        <div className="fight-wrapper__item">
          <p>Unknown</p>
          <img
            className="unknown-image"
            src="https://via.placeholder.com/200x200/FFFFFF/FFFF00?text=?"
            alt="Unknown"
          />
        </div>
      </div>
    </div>
  );
}
