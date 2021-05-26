import { Warrior } from './WarriorType';

export type GameState = {
  warriors: Warrior[];
  selectedWarrior: number;
  warriorName: string;
  selectedAttacks: number[];
}