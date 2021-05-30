import React from 'react'
import { useHistory } from 'react-router';

import { useErrorContext } from "../custom-hooks/useErrorContext";
import { clearError } from "../actions/errorActions";

import ErrorScreen from '../screens/ErrorScreen';

export default function ErrorContainer() {
  const { errorState, errorDispatch } = useErrorContext();
  let history = useHistory()

  function resetError() {
    errorDispatch(clearError())
    history.push("/")
  }

  return (
    <ErrorScreen errorState={errorState} resetError={resetError} />
  )
}
