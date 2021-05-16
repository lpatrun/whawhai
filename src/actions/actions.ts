export enum ActionType {
  SelectWarrior
}

export interface SelectWarrior {
  type: ActionType.SelectWarrior;
  payload: {id: number};
}

export type GameActions = SelectWarrior