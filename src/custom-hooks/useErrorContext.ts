import { useContext } from "react";
import { ErrorContext } from "../context/errorContext";

export const useErrorContext = () => useContext(ErrorContext)
