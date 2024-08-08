import classNames from "classnames";
import { forwardRef, useState, useMemo } from "react";
import { motion } from "framer-motion";

import { EyeHideIcon, EyeShowIcon } from "../../icons";
import type { InputProps } from "./input.interface";
import styles from "./input.module.scss";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      invalid,
      readOnly,
      placeholder,
      id,
      disabled,
      ...props
    },
    ref,
  ) => {
    const [fieldHidden, setFieldHidden] = useState<boolean>(
      type === "password",
    );

    const inputType = useMemo<typeof type>(() => {
      if (type === "password") {
        if (fieldHidden) {
          return "password";
        }

        return "text";
      }

      return type;
    }, [type, fieldHidden]);

    const hideToggleHandler = () => {
      setFieldHidden((prev) => !prev);
    };

    return (
      <div
        className={classNames(
          styles.input__wrapper,
          {
            [styles["input--invalid"]]: invalid,
            [styles["input--readonly"]]: readOnly,
          },
          className,
        )}
      >
        <input
          {...props}
          type={inputType}
          ref={ref}
          readOnly={readOnly}
          placeholder={placeholder}
          id={id}
          disabled={disabled}
          className={styles.input}
        />
        <label htmlFor={id} className={styles.input__label}>
          {placeholder}
        </label>
        {type === "password" && !disabled && (
          <motion.button
            type="button"
            className={styles.input__button}
            onClick={hideToggleHandler}
            disabled={disabled}
            aria-label="Show/hide password"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {inputType === "password" ? <EyeShowIcon /> : <EyeHideIcon />}
          </motion.button>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";
