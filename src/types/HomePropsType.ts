import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";
import { GameState } from "./GameStateType";
import { FormValues } from "../resolver";

export type Props = {
  state: GameState;
  warrior:
    | {
        id: number;
        name: string;
        image: string;
        attacks: string[];
      }
    | undefined;
  onSubmit: () => {};
  register: UseFormRegister<FormValues>;
  errors: DeepMap<FormValues, FieldError>;
};
