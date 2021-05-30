import { GameState } from "./GameStateType";
import { OpponentType } from "./OpponentType";
import { RoundType } from "./RoundType";

export type Props = {
  fightRounds: RoundType[];
  state: GameState;
  opponent: undefined | OpponentType;
};