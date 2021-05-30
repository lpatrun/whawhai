import { GameState } from "../types/GameStateType";
import { GameActions, ActionType } from "../actions/gameActions";

export function gameReducer(state: GameState, action: GameActions): GameState {
  switch (action.type) {
    case ActionType.SelectWarrior:
      return { ...state, selectedWarrior: action.payload.id };

    case ActionType.SetCustomWarrior:
      return {...state, warriorName: action.payload.name, selectedAttacks: [...action.payload.attacks]};

    case ActionType.SetFullWarrior: 
      return {...state, warriorName: action.payload.Name, selectedAttacks: action.payload.Attacks};
    
    case ActionType.ClearCustomWarrior:
      return {...state, warriorName: "", selectedAttacks: []}

    default:
      return state;
  }
}
