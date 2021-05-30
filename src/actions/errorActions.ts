export enum ActionType {
  SetError,
  ClearError,
}

type SetError = {
  type: ActionType.SetError;
  payload: {message: string, code: number, reason: string  | undefined, type: string};
}

export const setError = (message: string, code: number, reason: string | undefined, type: string): SetError => ({
  type: ActionType.SetError,
  payload: { message, code, reason, type },
});

type ClearError = {
  type: ActionType.ClearError;
}

export const clearError = (): ClearError => ({
  type: ActionType.ClearError,
});

export type ErrorActions = SetError | ClearError
