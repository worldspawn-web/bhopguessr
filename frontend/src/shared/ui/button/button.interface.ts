import React from "react";
import { motion } from "framer-motion";

import type { Variant, Size } from "../ui.interface";

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof motion.button> {
  /**
   * Variant of button
   * Available value: `primary | secondary | plain`
   */
  variant?: Variant;
  /**
   * Size of button
   * Available value: `large | medium | small`
   */
  size?: Size;
  /**
   * Indicate that button will take full width of its parent
   */
  fullWidth?: boolean;
}
