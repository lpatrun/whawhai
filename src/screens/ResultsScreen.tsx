import React from 'react'
import { Props } from '../types/ResultsPropsType'

import ResultsImageWrapper from "../components/ResultsImageWrapper"

import './ResultsScreen.css'
import ResultsAnnouncment from '../components/ResultsAnnouncment';
import OpponentImage from '../components/OpponentImage';
import FightRounds from '../components/FightRounds';
import FightButtons from '../components/FightButtons';

export default function ResultsScreen(props:Props) {

  return (
    <div className="container">
        <div className="fight-name">
          <h1>PAKIPAKI</h1>
        </div>

        <div className="fight-wrapper">
          <div className="fight-wrapper__item">
            <p>{props.state.warriorName}</p>

            <ResultsImageWrapper fightStatus={props.fightStatus} totalWinner={props.totalWinner} character={"host"}>
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
            <ResultsAnnouncment fightStatus={props.fightStatus} totalWinner={props.totalWinner} character={"host"} />

          </div>
          <div className="fight-wrapper__item">
            <h2>VS</h2>
          </div>
          <div className="fight-wrapper__item">
            <p>{props?.opponent?.Name ? props.opponent.Name : "Unknown"}</p>
            <ResultsImageWrapper fightStatus={props.fightStatus} totalWinner={props.totalWinner} character={"opponent"}>
              <OpponentImage fightStatus={props.fightStatus} opponent={props.opponent} state={props.state}/>
            </ResultsImageWrapper>
            <ResultsAnnouncment fightStatus={props.fightStatus} totalWinner={props.totalWinner} character={"opponent"} />
          </div>
        </div>

        {props.fightStatus < 1 && (
          <div className="player-waiting">
            <span>WAITING FOR 2ND PLAYER TO JOIN...</span>
          </div>
        )}

        {props.totalWinner !== 'draw' && props.fightStatus === 1 && (
          <div className="player-waiting">
            <span>
              {props.totalWinner === 'host' && `BEATING THE SHIT OUT OF ${props.opponent?.Name}`}
              {props.totalWinner === 'opponent' && `BEATING THE SHIT OUT OF ${props.state.warriorName}`}
            </span>
          </div>
        )}

        <FightRounds fightRounds={props.fightRounds} state={props.state} opponent={props.opponent} />

        <FightButtons fightStatus={props.fightStatus} tryAgain={props.tryAgain} chickenOut={props.chickenOut} />
      </div>
  )
}
