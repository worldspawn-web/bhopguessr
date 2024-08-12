import type { RadioGroupProps } from "@radix-ui/react-radio-group";

import type { RadioOption } from "./item";

export interface RadioProps extends RadioGroupProps {
  options: RadioOption[];
  invalid?: boolean;
  returnValue?: (option: RadioOption) => string;
  displayValue?: (option: RadioOption) => string;
}
