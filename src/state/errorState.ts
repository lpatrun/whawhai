export interface ErrorState {
  error: boolean;
  message: string | null;
  code: number | null;
  reason: string | undefined;
}

export const initialErrorState: ErrorState = {
  error: false,
  message: null,
  code: null,
  reason: undefined
};