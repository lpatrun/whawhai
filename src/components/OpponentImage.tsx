import React from 'react'
import { Props } from '../types/OpponentImageType'

export default function OpponentImage(props: Props) {
 
  return (
  <>
    { props.fightStatus >= 1 ? (
        <img
          src={
            require(`../images/${
              props.state.warriors[props?.opponent?.WarriorType ? props.opponent.WarriorType : 0].image
            }.svg`).default
          }
          alt={props.opponent?.Name ? props.opponent.Name : "fail 1"}
          width="200"
          height="200"
        />
      ) : (
        <img
          className="unknown-image"
          src="https://via.placeholder.com/200x200/FFFFFF/FFFF00?text=?"
          alt="Unknown"
          width="200"
          height="200"
        />
      )
    }
  </>
)}