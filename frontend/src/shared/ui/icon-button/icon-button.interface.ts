import { motion } from "framer-motion";

import type { Variant, Size } from "../ui.interface";

export interface IconButtonProps
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
   * Display icon
   * Available value: ReactNode
   */
  icon: React.ReactNode;
}
