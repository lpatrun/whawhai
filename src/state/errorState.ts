export interface ErrorState {
  message: string | null;
  code: number | null;
  reason: string | null;
}

export const initialErrorState: ErrorState = {
  message: null,
  code: null,
  reason: null
};