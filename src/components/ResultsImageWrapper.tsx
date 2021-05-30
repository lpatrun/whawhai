import React from 'react'
import { Props } from '../types/ResultsImageWrapperType';

import './ResultsImageWrapper.css';

export default function ResultsImageWrapper(props: Props) {
  if ( props.fightStatus < 2 ) {
    return <>{props.children}</>
  }

  return (
    <div className={`
      ${props.totalWinner === props.character ? "total-winner" : "" }
      ${props.totalWinner === 'draw' ? "draw-game" : "" } `}>
      {props.children}
    </div>
  )
}


