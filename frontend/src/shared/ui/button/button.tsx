import classNames from "classnames";
import { forwardRef } from "react";

import type { ButtonProps } from "./button.interface";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return <button {...props} ref={ref} className={classNames()} />;
  },
);
Button.displayName = "Button";
