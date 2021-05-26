import { Resolver, FieldError } from "react-hook-form";

export type FormValues = {
  warriorName: string;
  attack1: string;
  attack2: string;
  attack3: string;
};

function validateRequired(
  name: string,
  value: any,
  errors: Record<string, FieldError>
) {
  if (!value || value === "default") {
    return {
      ...errors,
      [name]: {
        type: `required`,
        message: `The "${name}" field is required`
      }
    };
  }
  return errors;
}

export const resolver: Resolver<FormValues> = (
  values,
  _context
) => {
  let errors = {};
    errors = Object.entries(values).reduce(
      (acc, [name, value]) => validateRequired(name, value, acc),
      {}
    );
  return { values, errors };
};