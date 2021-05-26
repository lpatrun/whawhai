import { ErrorState } from '../state/errorState'

export type Props = {
  errorState: ErrorState;
  resetError: () => void
}
