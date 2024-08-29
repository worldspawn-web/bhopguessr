import z from "zod";

import type { PasswordParams } from "./validators.interface";
import { defaultErrors, defaultPasswordParams } from "./validators.constants";
import { isNull, isNil, isStringEmpty } from "../type-guards";

export const validators = {
  getStringRequiredValidationSchema: (message?: string) =>
    z
      .string()
      .min(1, message || defaultErrors.fieldError)
      .default(""),
  getStringNullableValidationSchema: () => z.string().nullable().default(null),
  getStringOptionalValidationSchema: () => z.string().optional(),
  getSelectRequiredValidationSchema: (message?: string) =>
    z
      .string()
      .nullable()
      .superRefine((value, context) => {
        if (isNull(value)) {
          context.addIssue({
            code: z.ZodIssueCode.invalid_type,
            expected: "string",
            received: "null",
            message: message || defaultErrors.selectError,
          });
        }
      })
      .default(null),
  getSelectNullableValidationSchema: () => z.string().nullable().default(null),
  getNumberRequiredValidationSchema: (message?: string) =>
    z.coerce
      .number()
      .refine((value) => !isNil(value), message || defaultErrors.fieldError)
      .default(0),
  getNumberNullableValidationSchema: () =>
    z.coerce.number().nullable().default(null),
  getNumberOptionalValidationSchema: () => z.coerce.number().optional(),
  getEmailValidationSchema: (message?: string) =>
    z
      .string()
      .email(message || defaultErrors.emailError)
      .default(""),
  getPasswordValidationSchema: (params?: PasswordParams) => {
    const passwordParams = params || defaultPasswordParams;

    return z
      .string()
      .superRefine((value, context) => {
        if (isStringEmpty(value)) {
          context.addIssue({
            code: z.ZodIssueCode.too_small,
            minimum: passwordParams.min || 8,
            inclusive: true,
            type: "string",
            message: defaultErrors.passwordError.tooSmall,
          });
        }

        if (passwordParams.hasDigits) {
          if (!/\d/g.test(value)) {
            context.addIssue({
              code: z.ZodIssueCode.invalid_string,
              validation: "regex",
              message: defaultErrors.passwordError.invalidDigits,
            });
          }
        }

        if (passwordParams.hasUpper) {
          if (!/[A-Z]/g.test(value)) {
            context.addIssue({
              code: z.ZodIssueCode.invalid_string,
              validation: "regex",
              message: defaultErrors.passwordError.invalidUpper,
            });
          }
        }

        if (!isNil(passwordParams.symbols)) {
          if (!passwordParams.symbols.test(value)) {
            context.addIssue({
              code: z.ZodIssueCode.invalid_string,
              validation: "regex",
              message: defaultErrors.passwordError.invalidSymbols,
            });
          }
        }
      })
      .default("");
  },
};
