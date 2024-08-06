import classNames from "classnames";
import { forwardRef } from "react";

import type { ButtonProps } from "./button.interface";
import styles from "./button.module.css";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "medium", fullWidth, ...props },
    ref,
  ) => {
    return (
      <button
        {...props}
        ref={ref}
        className={classNames(
          styles.button,
          {
            [styles["button--primary"]]: variant === "primary",
            [styles["button--secondary"]]: variant === "secondary",
            [styles["button--plain"]]: variant === "plain",
            [styles["button--large"]]: size === "large",
            [styles["button--medium"]]: size === "medium",
            [styles["button--small"]]: size === "small",
            [styles["button--full_width"]]: fullWidth,
          },
          className,
        )}
      />
    );
  },
);
Button.displayName = "Button";
