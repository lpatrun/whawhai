import { GameState } from "./GameStateType";

export type Props = {
  fightStatus: number,
  opponent: undefined | {
    Name: string;
    WarriorType: number;
    Attacks: number[];
  };
  state: GameState
}