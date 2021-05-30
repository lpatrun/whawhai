export enum ActionType {
  SelectWarrior,
  SetCustomWarrior,
  SetFullWarrior,
  ClearCustomWarrior,
}

type SelectWarrior = {
  type: ActionType.SelectWarrior;
  payload: { id: number };
};

export const selectWarrior = (id: number): SelectWarrior => ({
  type: ActionType.SelectWarrior,
  payload: { id },
});

type SetCustomWarrior = {
  type: ActionType.SetCustomWarrior;
  payload: { name: string; attacks: number[] };
};

export const setCustomWarrior = (
  name: string,
  attacks: number[]
): SetCustomWarrior => ({
  type: ActionType.SetCustomWarrior,
  payload: { name, attacks },
});

type SetFullWarrior = {
  type: ActionType.SetFullWarrior;
  payload: { Name: string; WarriorType: number; Attacks: number[] };
};

export const setFullWarrior = (
  Name: string,
  WarriorType: number,
  Attacks: number[]
): SetFullWarrior => ({
  type: ActionType.SetFullWarrior,
  payload: { Name, WarriorType, Attacks },
});

type ClearCustomWarrior = {
  type: ActionType.ClearCustomWarrior;
};

export const clearCustomWarrior = (): ClearCustomWarrior => ({
  type: ActionType.ClearCustomWarrior,
});

export type GameActions = SelectWarrior | SetCustomWarrior | ClearCustomWarrior | SetFullWarrior;
