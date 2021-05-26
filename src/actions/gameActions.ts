export enum ActionType {
  SelectWarrior,
  SetCustomWarrior,
  ClearCustomWarrior
}

type SelectWarrior = {
  type: ActionType.SelectWarrior;
  payload: {id: number};
}

export const selectWarrior = (id: number): SelectWarrior => ({
  type: ActionType.SelectWarrior,
  payload: { id },
});

type SetCustomWarrior = {
  type: ActionType.SetCustomWarrior;
  payload: {name: string, attacks: number[]};
}

export const setCustomWarrior = (name: string, attacks: number[]): SetCustomWarrior => ({
  type: ActionType.SetCustomWarrior,
  payload: { name, attacks },
});


type ClearCustomWarrior = {
  type: ActionType.ClearCustomWarrior;
}

export const clearCustomWarrior = (): ClearCustomWarrior => ({
  type: ActionType.ClearCustomWarrior,
});

export type GameActions = SelectWarrior | SetCustomWarrior | ClearCustomWarrior
