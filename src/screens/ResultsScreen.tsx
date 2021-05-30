import React from 'react'
import { RoundType } from '../types/RoundType'
import { Props } from '../types/ResultsPropsType'

import RoundsComponent from "../components/RoundsComponent";
import ResultsImageWrapper from "../components/ResultsImageWrapper"

import './ResultsScreen.css'
import ResultsAnnouncment from '../components/ResultsAnnouncment';

export default function ResultsScreen(props:Props) {
  const opponentImg = props.fightStatus > 1 ? (
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
  );

  let fRounds = props?.fightRounds?.length ? (
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
  );

  return (
    <div className="container">
        <div className="fight-name">
          <h1>PAKIPAKI</h1>
        </div>

        <div className="fight-wrapper">
          <div className="fight-wrapper__item">
            <p>{props.state.warriorName}</p>

            <ResultsImageWrapper totalWinner={props.totalWinner} character={"host"}>
              <img
                src={
                  require(`../images/${
                    props.state.warriors[props.state.selectedWarrior ? props.state.selectedWarrior : 0].image
                  }.svg`).default
                }
                alt={props.state.warriorName}
                width="200"
                height="200"
                />
            </ ResultsImageWrapper>

            <ResultsAnnouncment totalWinner={props.totalWinner} character={"host"} />

          </div>
          <div className="fight-wrapper__item">
            <h2>VS</h2>
          </div>
          <div className="fight-wrapper__item">
            <p>{props?.opponent?.Name ? props.opponent.Name : "Unknown"}</p>
            <ResultsImageWrapper totalWinner={props.totalWinner} character={"opponent"}>
              {opponentImg}
            </ResultsImageWrapper>
            <ResultsAnnouncment totalWinner={props.totalWinner} character={"opponent"} />
          </div>
        </div>

        {props.fightStatus < 2 && (
          <div className="player-waiting">
            <span>WAITING FOR 2ND PLAYER TO JOIN...</span>
          </div>
        )}

        {fRounds}
      </div>
  )
}
