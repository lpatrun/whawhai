import { GameState } from "../state/state";
import { GameActions, ActionType } from "../actions/actions";
import { SelectWarrior } from '../actions/actions'

export function gameReducer(state: GameState, action: GameActions): GameState {
  switch (action.type) {
    case ActionType.SelectWarrior:
      return { ...state, selectedWarrior: action.payload.id };

    default:
      return state;
  }
}

export const selectWarrior = (id: number): SelectWarrior => ({
  type: ActionType.SelectWarrior,
  payload: { id },
});