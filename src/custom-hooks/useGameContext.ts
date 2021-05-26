import { useContext } from "react";
import { GameContext } from "../context/gameContext";

export const useCustomContext = () => useContext(GameContext)
