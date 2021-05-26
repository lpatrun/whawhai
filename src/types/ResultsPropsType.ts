import { GameState } from '../types/GameStateType'
import { RoundType } from '../types/RoundType'

export type Props = {
  state: GameState;
  fightStatus: number;
  opponent: {
    Name: string | null;
    WarriorType: number;
    Attacks: number[];
  };
  fightRounds: RoundType[];
};