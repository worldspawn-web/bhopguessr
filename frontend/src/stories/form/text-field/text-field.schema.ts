import { object } from "zod";

import { validators } from "@shared/utils";

export const schema = object({
  name: validators.getStringRequiredValidationSchema(),
  login: validators.getStringRequiredValidationSchema(),
  email: validators.getEmailValidationSchema(),
  password: validators.getPasswordValidationSchema(),
  repeatPassword: validators.getPasswordValidationSchema(),
}).refine((value) => value.password === value.repeatPassword, {
  message: "Passwords doesn't match",
  path: ["repeatPassword"],
});
