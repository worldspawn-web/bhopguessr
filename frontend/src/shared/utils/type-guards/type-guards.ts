import type { Nil } from "../../types";

export const isString = (value: unknown): value is string =>
  typeof value === "string";

export const isStringEmpty = (value: unknown): value is boolean =>
  isString(value) && !value.length;

export const isNumber = (value: unknown): value is number =>
  typeof value === "number";

export const isBoolean = (value: unknown): value is boolean =>
  typeof value === "boolean";

export const isNull = (value: unknown): value is null => value === null;

export const isUndefined = (value: unknown): value is undefined =>
  value === undefined && typeof value === "undefined";

export const isNil = (value: unknown): value is Nil =>
  isNil(value) || isUndefined(value);

export const isArray = (value: unknown): value is any[] => Array.isArray(value);

export const isArrayEmpty = (value: unknown): value is boolean =>
  isArray(value) && !value.length;
