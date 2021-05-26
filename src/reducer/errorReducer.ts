import { ErrorState } from "../state/errorState";
import { ErrorActions, ActionType } from "../actions/errorActions";

export function errorReducer(errorState: ErrorState, action: ErrorActions): ErrorState {
  switch (action.type) {
    case ActionType.SetError:
      return {...errorState, message: action.payload.message, code: action.payload.code}
    
    case ActionType.ClearError:
      return {...errorState, message: "", code: 0}

    default:
      return errorState;
  }
}
