import type {
  CheckboxProps as CheckboxPrimitiveProps,
  CheckedState,
} from "@radix-ui/react-checkbox";

export interface CheckboxProps
  extends Omit<
    CheckboxPrimitiveProps,
    "checked" | "onCheckedChange" | "value" | "onChange"
  > {
  label: string;
  value?: CheckedState;
  onChange?: (value: CheckedState) => void;
}

export type { CheckedState };
