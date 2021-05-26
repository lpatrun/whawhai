import React from 'react'

import { useErrorContext } from "../custom-hooks/useErrorContext";
import { clearError } from "../actions/errorActions";

import ErrorScreen from '../screens/ErrorScreen';

export default function ErrorContainer() {
  const { errorState, errorDispatch } = useErrorContext();

  function resetError() {
    errorDispatch(clearError())
  }

  return (
    <ErrorScreen errorState={errorState} resetError={resetError} />
  )
}
