import type { RadioGroupProps } from "@radix-ui/react-radio-group";

import type { RadioOption } from "./item";

export interface RadioProps extends RadioGroupProps {
  options: RadioOption[];
  returnValue?: (option: RadioOption) => string;
  displayValue?: (option: RadioOption) => string;
}
