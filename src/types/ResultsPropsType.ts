import { RoundType } from '../types/RoundType'
import { GameState } from './GameStateType';

export type Props = {
  state: GameState;
  fightStatus: number;
  opponent: undefined | {
    Name: string;
    WarriorType: number;
    Attacks: number[];
  };
  fightRounds: RoundType[];
  totalWinner: string
};

