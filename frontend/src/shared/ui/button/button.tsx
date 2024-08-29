import classNames from "classnames";
import { forwardRef } from "react";
import { motion } from "framer-motion";

import type { ButtonProps } from "./button.interface";
import styles from "./button.module.scss";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "medium", fullWidth, ...props },
    ref,
  ) => {
    return (
      <motion.button
        {...props}
        ref={ref}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", duration: 0.25, stiffness: 200 }}
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
