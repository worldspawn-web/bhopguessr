import classNames from "classnames";
import { Item } from "@radix-ui/react-radio-group";
import { motion } from "framer-motion";

import type { ItemProps } from "./item.interface";
import styles from "./item.module.scss";

export const RadioGroupItem = ({
  option,
  className,
  displayValue,
  returnValue,
  selected,
  disabled,
  ...props
}: ItemProps) => {
  const itemDisabled = disabled || option?.disabled;

  return (
    <motion.li
      className={classNames(styles.radio_item__wrapper, className)}
      whileHover={!itemDisabled ? { scale: 1.05 } : {}}
      whileTap={!itemDisabled ? { scale: 0.95 } : {}}
      transition={{ type: "spring", duration: 0.3 }}
    >
      <Item
        {...props}
        disabled={itemDisabled || option.disabled}
        value={returnValue ? returnValue(option) : option.value}
        className={classNames(styles.radio_item, {
          [styles["radio_item--invalid"]]: option?.invalid,
          [styles["radio_item--success"]]: option?.success,
          [styles["radio_item--selected"]]: selected,
        })}
      >
        {displayValue ? displayValue(option) : option.label}
      </Item>
    </motion.li>
  );
};
RadioGroupItem.displayName = "RadioGroupItem";
