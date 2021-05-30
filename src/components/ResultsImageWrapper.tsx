import React from 'react'

import './ResultsImageWrapper.css';

type Props = {
  totalWinner: string,
  character: string,
  children: React.ReactNode
}

export default function ResultsImageWrapper(props: Props) {
  return (
    <div className={`
      ${props.totalWinner === props.character ? "total-winner" : "" }
      ${props.totalWinner === 'draw' ? "draw-game" : "" } `}>
      {props.children}
    </div>
  )
}


