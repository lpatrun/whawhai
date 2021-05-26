import React, { createContext } from "react";
import { ErrorState, initialErrorState } from "../state/errorState";
import { ErrorActions } from "../actions/errorActions";

export const ErrorContext = createContext<{
  errorState: ErrorState;
  errorDispatch: React.Dispatch<ErrorActions>;
}>({ errorState: initialErrorState, errorDispatch: () => undefined });
