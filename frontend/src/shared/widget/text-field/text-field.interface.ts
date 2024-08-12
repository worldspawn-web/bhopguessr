import type {
  FieldValues,
  FieldPath,
  UseControllerProps,
  Control,
} from "react-hook-form";

import type { InputProps } from "../../ui";

export type TextFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = UseControllerProps<TFieldValues, TName> &
  InputProps & {
    control: Control<TFieldValues>;
  };
