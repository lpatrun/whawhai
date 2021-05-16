import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { GameContext } from "../context/context";
import { Warrior } from "../state/state";
import { selectWarrior } from '../reducer/reducer'

import "./WarriorsView.css";

export default function WarriorsView() {
  const { state, dispatch } = useContext(GameContext);
  const history = useHistory();

  const setWarrior = (id: number) => {
    dispatch(selectWarrior(id));

    history.push("/");
  };

  return (
    <div className="container">
      <div className="title-wrapper">
        <NavLink to="/">
          <span className="left-arrow"></span>
          <h1>TANGATA TOA</h1>
        </NavLink>
      </div>

      <div className="warriors-wrapper">
        {state.warriors ? (
          state.warriors.map((warrior: Warrior, index: number) => {
            if (warrior.id !== state.selectedWarrior) {
              return (
                <img
                  key={index}
                  src={require(`../images/${warrior.image}.svg`).default}
                  alt={warrior.name}
                  title={warrior.name}
                  width="200"
                  height="200"
                  onClick={() => setWarrior(warrior.id)}
                />
              );
            } else {
              return null;
            }
          })
        ) : (
          <p>No warriors in state!</p>
        )}
      </div>
    </div>
  );
}
