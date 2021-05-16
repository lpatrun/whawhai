import React, { useContext, useState } from "react";
import { Resolver, FieldError, useForm } from "react-hook-form";

import { NavLink } from "react-router-dom";
import { GameContext } from "../context/context";
import { Warrior } from "../state/state";

import "./HomeView.css";

type FormValues = {
  warriorName: string;
  attack1: string;
  attack2: string;
  attack3: string;
};

function validateRequired(
  name: string,
  value: any,
  errors: Record<string, FieldError>
) {
  if (!value || value === "default") {
    return {
      ...errors,
      [name]: {
        type: `required`,
        message: `The "${name}" field is required`
      }
    };
  }
  return errors;
}

const resolver: Resolver<FormValues> = (
  values,
  _context
) => {
  let errors = {};
    errors = Object.entries(values).reduce(
      (acc, [name, value]) => validateRequired(name, value, acc),
      {}
    );
  return { values, errors };
};

export default function HomeView() {
  const { state } = useContext(GameContext);
  const [warrior] = useState(
    state.warriors.find(
      (warrior: Warrior) => warrior.id === state.selectedWarrior
    )
  );

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    mode: "onChange",
    resolver
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="container">
      <div className="title-wrapper">
        <h1>WhaWhai</h1>
      </div>

      {warrior ? (
        <form
          onSubmit={onSubmit}
          id="fightForm"
          className="form-wrapper"
        >
          <div className="form-wrapper__basic-data">
            <NavLink to="/warriors">
              <img
                src={require(`../images/${warrior.image}.svg`).default}
                alt={warrior.name}
                width="100"
                height="100"
              />
            </NavLink>
            <input
              {...register("warriorName")}
              type="text"
              placeholder="$WARRIOR-NAME"
            />
          </div>

          {errors?.warriorName && <p>{errors.warriorName.message}</p>}

          <div className="form-wrapper__select-data">
            <select id="attack1" {...register("attack1")}>
              <option value="default">Attack For Round #1</option>
              {warrior.attacks.map((attack: string, index: number) => (
                <option key={index} value={attack}>
                  {attack}
                </option>
              ))}
            </select>
            <select id="attack2" {...register("attack2")}>
              <option value="default">Attack For Round #2</option>
              {warrior.attacks.map((attack: string, index: number) => (
                <option key={index} value={attack}>
                  {attack}
                </option>
              ))}
            </select>
            <select id="attack3" {...register("attack3")}>
              ,<option value="default">Attack For Round #3</option>
              {warrior.attacks.map((attack: string, index: number) => (
                <option key={index} value={attack}>
                  {attack}
                </option>
              ))}
            </select>
          </div>
          {errors?.attack1 && <p>{errors.attack1.message}</p>}
          {errors?.attack2 && <p>{errors.attack2.message}</p>}
          {errors?.attack3 && <p>{errors.attack3.message}</p>}

          <button
            type="submit"
            name="startGame"
            id="startGame"
            className="form-wrapper__submit-button"
          >
            FIGHT!!!
          </button>
        </form>
      ) : (
        <p>No default warrior</p>
      )}
    </div>
  );
}
