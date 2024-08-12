import type { FieldValues, FieldErrors } from "react-hook-form";

export type SuccessSubmitHandler<T extends FieldValues> = (values: T) => void;
export type RejectSubmitHandler<T extends FieldValues> = (
  errors: FieldErrors<T>,
  event: React.FormEvent,
) => void;
