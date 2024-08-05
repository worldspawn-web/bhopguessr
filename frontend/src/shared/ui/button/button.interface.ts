import React from "react";

import type { Variant } from "../ui.interface";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}
