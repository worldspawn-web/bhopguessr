import classNames from "classnames";
import { forwardRef } from "react";
import { Root, Indicator } from "@radix-ui/react-checkbox";

import { CheckIcon } from "../../icons";
import type { CheckboxProps } from "./checkbox.interface";
import styles from "./checkbox.module.css";

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ className, label, disabled, value, onChange, ...props }, ref) => (
    <label
      className={classNames(styles.checkbox__label, className)}
      data-disabled={disabled}
    >
      <Root
        {...props}
        ref={ref}
        checked={value}
        onCheckedChange={onChange}
        disabled={disabled}
        className={styles.checkbox}
      >
        <Indicator className={styles.checkbox__indicator}>
          <CheckIcon />
        </Indicator>
      </Root>
      {label}
    </label>
  ),
);
Checkbox.displayName = "Checkbox";
