import type { RadioGroupItemProps } from "@radix-ui/react-radio-group";

export interface RadioOption {
  id: number | string;
  value: string;
  label: string;
  disabled?: boolean;
  invalid?: boolean;
  success?: boolean;
}

export type ItemProps = Omit<RadioGroupItemProps, "value" | "onSelect"> & {
  option: RadioOption;
  returnValue?: (option: RadioOption) => string;
  displayValue?: (option: RadioOption) => string;
  selected?: boolean;
};
