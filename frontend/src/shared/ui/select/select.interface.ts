import type { SelectProps as SelectPrimitiveProps } from "@radix-ui/react-select";

export type SelectOption = {
  id: number | string;
  value: string;
  label: string;
  disabled?: boolean;
};

export interface SelectProps extends SelectPrimitiveProps {
  options: SelectOption[];
  placeholder: string;
  displayValue?: (option: SelectOption) => string;
  returnValue?: (option: SelectOption) => string;
  className?: string;
  invalid?: boolean;
}
