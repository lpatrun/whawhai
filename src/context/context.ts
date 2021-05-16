import React, { createContext } from "react";
import { GameState, initialGameState } from "../state/state";
import { GameActions } from "../actions/actions";

export const GameContext = createContext<{
  state: GameState;
  dispatch: React.Dispatch<GameActions>;
}>({
  state: initialGameState,
  dispatch: () => undefined,
});
