import classNames from "classnames";
import { forwardRef } from "react";
import { motion } from "framer-motion";

import type { IconButtonProps } from "./icon-button.interface";
import styles from "./icon-button.module.css";

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { className, variant = "primary", size = "medium", icon, ...props },
    ref,
  ) => {
    return (
      <motion.button
        {...props}
        ref={ref}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.1 }}
        className={classNames(
          styles.button,
          {
            [styles["button--primary"]]: variant === "primary",
            [styles["button--secondary"]]: variant === "secondary",
            [styles["button--plain"]]: variant === "plain",
            [styles["button--large"]]: size === "large",
            [styles["button--medium"]]: size === "medium",
            [styles["button--small"]]: size === "small",
          },
          className,
        )}
      >
        {icon}
      </motion.button>
    );
  },
);
IconButton.displayName = "IconButton";
