import React from 'react'
import { RoundType } from '../types/RoundType'
import { Props } from '../types/ResultsPropsType'

import RoundsComponent from "../components/RoundsComponent";

import './ResultsScreen.css'

export default function ResultsScreen(props:Props) {

  const opponentImg = props.opponent.WarriorType ? (
    <img
      src={
        require(`../images/${
          props.state.warriors[props.opponent.WarriorType].image
        }.svg`).default
      }
      alt={props.state.warriorName}
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
  );

  let fRounds = props?.fightRounds?.length ? (
    <div className="fight-rounds">
      {props.fightRounds.map((round: RoundType, index: number) => (
        <RoundsComponent 
          key={index}
          num={index}
          warriors={props.state.warriors} 
          selectedWarrior={props.state.selectedWarrior}
          round={round}
          opponent={props.opponent}
          state={props.state}
        />
      ))}
    </div>
  ) : (
    <></>
  );

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
              width="200"
              height="200"
            />
          </div>
          <div className="fight-wrapper__item">
            <h2>VS</h2>
          </div>
          <div className="fight-wrapper__item">
            <p>{props.opponent.Name ? props.opponent.Name : "Unknown"}</p>
            {opponentImg}
          </div>
        </div>

        {props.fightStatus < 1 && (
          <div className="player-waiting">
            <span>WAITING FOR 2ND PLAYER TO JOIN...</span>
          </div>
        )}

        {fRounds}
      </div>
  )
}
