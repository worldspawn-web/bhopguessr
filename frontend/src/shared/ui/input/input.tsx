import classNames from "classnames";
import { forwardRef, useState, useMemo } from "react";

import { EyeHideIcon, EyeShowIcon } from "../../icons";
import type { InputProps } from "./input.interface";
import styles from "./input.module.css";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type = "text", invalid, readOnly, placeholder, id, ...props },
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
          id={id}
          className={styles.input}
        />
        <label htmlFor={id} className={styles.input__label}>
          {placeholder}
        </label>
        {type === "password" && (
          <button
            type="button"
            className={styles.input__button}
            onClick={hideToggleHandler}
            aria-label="Show/hide password"
          >
            {inputType === "password" ? <EyeShowIcon /> : <EyeHideIcon />}
          </button>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";
