import React from 'react'
import { NavLink } from 'react-router-dom';
import { Props } from '../types/WarriorsPropsType';
import { Warrior } from '../types/WarriorType';

import './WarriorsScreen.css'



export default function WarriorsScreen(props: Props) {
  if (!props.state.warriors) {
    return (
      <div className="container">
        <p>No warriors in state!</p>
      </div>
    )
  }


  return (
    <div className="container">
      <div className="title-wrapper">
        <NavLink to="/">
          <span className="left-arrow"></span>
          <h1>TANGATA TOA</h1>
        </NavLink>
      </div>

      <div className="warriors-wrapper">
        { props.state.warriors.map((warrior: Warrior, index: number) => {
            if (warrior.id !== props.state.selectedWarrior) {
              return (
                <img
                  key={index}
                  src={require(`../images/${warrior.image}.svg`).default}
                  alt={warrior.name}
                  title={warrior.name}
                  width="200"
                  height="200"
                  onClick={() => props.setWarrior(warrior.id)}
                />
              );
            } else {
              return null;
            }
          })
        }
      </div>
    </div>
  )
}
