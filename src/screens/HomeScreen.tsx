import React from "react";
import { NavLink } from "react-router-dom";
import { Props } from "../types/HomePropsType";

import "./HomeScreen.css"

export default function HomeScreen(props: Props) {
  if (!props.warrior) {
    return (
      <div className="container">
        <div className="title-wrapper">
          <h1>WhaWhai</h1>
          <p>No default warrior</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="title-wrapper">
        <h1>WhaWhai</h1>
      </div>

      <form onSubmit={props.onSubmit} id="fightForm" className="form-wrapper">
        <div className="form-wrapper__basic-data">
          <NavLink to="/warriors">
            <img
              src={require(`../images/${props.warrior.image}.svg`).default}
              alt={props.warrior.name}
              width="100"
              height="100"
            />
          </NavLink>
          <input
            {...props.register("warriorName")}
            type="text"
            placeholder="$WARRIOR-NAME"
            autoComplete="off"
          />
        </div>
          {props.errors?.warriorName && (
            <p>{props.errors.warriorName.message}</p>
          )}

        <div className="form-wrapper__select-data">
          <select id="attack1" {...props.register("attack1")}>
            <option value="default">Attack For Round #1</option>
            {props.warrior.attacks.map((attack: string, index: number) => (
              <option key={index} value={index}>
                {attack}
              </option>
            ))}
          </select>
          <select id="attack2" {...props.register("attack2")}>
            <option value="default">Attack For Round #2</option>
            {props.warrior.attacks.map((attack: string, index: number) => (
              <option key={index} value={index}>
                {attack}
              </option>
            ))}
          </select>
          <select id="attack3" {...props.register("attack3")}>
            ,<option value="default">Attack For Round #3</option>
            {props.warrior.attacks.map((attack: string, index: number) => (
              <option key={index} value={index}>
                {attack}
              </option>
            ))}
          </select>
        </div>
        {props.errors?.attack1 && <p>{props.errors.attack1.message}</p>}
        {props.errors?.attack2 && <p>{props.errors.attack2.message}</p>}
        {props.errors?.attack3 && <p>{props.errors.attack3.message}</p>}

        <button
          type="submit"
          name="startGame"
          id="startGame"
          className="form-wrapper__submit-button"
        >
          FIGHT!!!
        </button>
      </form>
    </div>
  );
}
