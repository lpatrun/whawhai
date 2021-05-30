import React from 'react'

import './ResultsAnnouncment.css'

type Props = {
  totalWinner: string,
  character: string,
  fightStatus: number
}

export default function ResultsAnnouncment(props: Props) {
  if (props.totalWinner === "" || props.fightStatus < 2) {
    return <></>
  }

  if (props.totalWinner === "draw") {
    return <p>DRAWN</p>
  }

  return (
    <p className="text-green">{ props.character === props.totalWinner && "WINNER" }</p>
  )
}
