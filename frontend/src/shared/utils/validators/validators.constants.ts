import type { PasswordParams } from "./validators.interface";

export const defaultErrors = {
  fieldError: "Field cannot be empty",
  selectError: "Choose an value",
  emailError: "Enter correct email",
  passwordError: {
    tooSmall: "Password must be at least 8 characters",
    invalidDigits: "Password must have digits",
    invalidUpper: "Password must have upper letters",
    invalidSymbols: "Password must have special symbols",
  },
};

export const defaultPasswordParams: PasswordParams = {
  min: 8,
  hasUpper: true,
  hasDigits: true,
};
