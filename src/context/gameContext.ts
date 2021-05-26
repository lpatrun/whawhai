import React, { createContext } from "react";
import { initialGameState } from "../state/gameState";
import { GameState } from '../types/GameStateType'
import { GameActions } from "../actions/gameActions";

export const GameContext = createContext<{
  state: GameState;
  dispatch: React.Dispatch<GameActions>;
}>({ state: initialGameState, dispatch: () => undefined });
