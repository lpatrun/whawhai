import React from 'react'

import './ResultsAnnouncment.css'

type Props = {
  totalWinner: string,
  character: string,
}

export default function ResultsAnnouncment(props: Props) {
  if (props.totalWinner === "") {
    return <></>
  }

  if (props.totalWinner === "draw") {
    return <p>DRAWN</p>
  }

  return (
    <p className="text-green">{ props.character === props.totalWinner && "WINNER" }</p>
  )
}
