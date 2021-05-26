export enum ActionType {
  SetError,
  ClearError,
}

type SetError = {
  type: ActionType.SetError;
  payload: {message: string, code: number, reason: string  | undefined};
}

export const setError = (message: string, code: number, reason: string | undefined): SetError => ({
  type: ActionType.SetError,
  payload: { message, code, reason },
});

type ClearError = {
  type: ActionType.ClearError;
}

export const clearError = (): ClearError => ({
  type: ActionType.ClearError,
});

export type ErrorActions = SetError | ClearError
