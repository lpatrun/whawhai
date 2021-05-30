import { ErrorState } from "../state/errorState";
import { ErrorActions, ActionType } from "../actions/errorActions";

export function errorReducer(errorState: ErrorState, action: ErrorActions): ErrorState {
  switch (action.type) {
    case ActionType.SetError:
      return {...errorState, error: true, message: action.payload.message, code: action.payload.code, reason: action.payload.reason}
    
    case ActionType.ClearError:
      return {...errorState, error: false, message: "", code: 0, reason: undefined}

    default:
      return errorState;
  }
}
