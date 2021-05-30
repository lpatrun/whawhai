import { RoundType } from './RoundType';
import { GameState } from './GameStateType';

export type Props = {
  num: number;
  state: GameState;
  round: RoundType;
  opponent: undefined | {
    Name: string | null;
    WarriorType: number;
    Attacks: number[];
  };
};