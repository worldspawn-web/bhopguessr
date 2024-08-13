import classNames from "classnames";
import { forwardRef } from "react";
import { Root } from "@radix-ui/react-radio-group";

import { RadioGroupItem } from "./item";
import type { RadioProps } from "./radio.interface";
import styles from "./radio.module.scss";

export const RadioGroup = forwardRef<HTMLDivElement, RadioProps>(
  (
    {
      options,
      returnValue,
      displayValue,
      className,
      value,
      disabled,
      ...props
    },
    ref,
  ) => (
    <Root {...props} ref={ref} disabled={disabled} asChild>
      <ul className={classNames(styles.radio_group, className)}>
        {options.map((option) => (
          <RadioGroupItem
            key={option.id}
            option={option}
            returnValue={returnValue}
            displayValue={displayValue}
            disabled={disabled}
            selected={
              returnValue
                ? returnValue(option) === value
                : option.value === value
            }
          />
        ))}
      </ul>
    </Root>
  ),
);
RadioGroup.displayName = "RadioGroup";
