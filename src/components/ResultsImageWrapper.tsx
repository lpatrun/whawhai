import React from 'react'

import './ResultsImageWrapper.css';

type Props = {
  totalWinner: string,
  character: string,
  fightStatus: number,
  children: React.ReactNode
}

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


