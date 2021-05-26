import { GameState } from './GameStateType';
import { Warrior } from './WarriorType';
import { RoundType } from './RoundType';

export type RoundsProps = {
  state: GameState;
  warriors: Warrior[];
  selectedWarrior: number;
  round: RoundType;
  opponent: {
    Name: string | null;
    WarriorType: number;
    Attacks: number[];
  };
  num: number;
};