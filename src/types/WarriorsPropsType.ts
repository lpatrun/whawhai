import { GameState } from "./GameStateType";

export type Props = {
  state: GameState;
  setWarrior: (id: number) => void
}