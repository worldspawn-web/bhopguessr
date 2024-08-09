import classNames from "classnames";
import { forwardRef } from "react";
import { Root, Indicator } from "@radix-ui/react-checkbox";
import { motion } from "framer-motion";

import { CheckIcon } from "../../icons";
import type { CheckboxProps } from "./checkbox.interface";
import styles from "./checkbox.module.scss";

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ className, label, disabled, value, onChange, ...props }, ref) => (
    <label
      className={classNames(styles.checkbox__label, className)}
      data-disabled={disabled}
    >
      <Root
        {...props}
        ref={ref}
        asChild
        checked={value}
        onCheckedChange={onChange}
        disabled={disabled}
        className={styles.checkbox}
      >
        <motion.button whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
          <Indicator className={styles.checkbox__indicator}>
            <CheckIcon />
          </Indicator>
        </motion.button>
      </Root>
      {label}
    </label>
  ),
);
Checkbox.displayName = "Checkbox";
