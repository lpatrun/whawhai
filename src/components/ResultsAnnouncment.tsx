import React from "react";
import { Props } from "../types/ResultsAnnouncmentType";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  txtGreen: {
    color: '#73ffa0'
  }
})

export default function ResultsAnnouncment(props: Props) {
  const classes = useStyles();

  if (props.totalWinner === "" || props.fightStatus < 2) {
    return <></>;
  }

  if (props.totalWinner === "draw") {
    return <p>DRAWN</p>;
  }

  return (
    <p className={classes.txtGreen}>
      {props.character === props.totalWinner && "WINNER"}
    </p>
  );
}
