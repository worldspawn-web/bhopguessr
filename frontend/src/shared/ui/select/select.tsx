import classNames from "classnames";
import { forwardRef, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Root,
  Trigger,
  Content,
  Portal,
  Item,
  ScrollDownButton,
  ScrollUpButton,
} from "@radix-ui/react-select";

import { ArrowDownIcon, ArrowUpIcon } from "../../icons";
import { isNull } from "../../utils";
import type { SelectOption, SelectProps } from "./select.interface";
import styles from "./select.module.css";

export const Select = forwardRef<React.ElementRef<typeof Trigger>, SelectProps>(
  (
    {
      className,
      options,
      displayValue,
      returnValue,
      required,
      value,
      placeholder,
      open,
      invalid,
      ...props
    },
    ref,
  ) => {
    const selectedValue = useMemo<SelectOption | null>(
      () =>
        options.find((option) => {
          if (returnValue) {
            return returnValue(option) === value;
          }

          return option.value === value;
        }) || null,
      [options, returnValue, value],
    );

    const label = useMemo<string | null>(() => {
      if (isNull(selectedValue)) {
        return null;
      }

      if (displayValue) {
        return displayValue(selectedValue);
      }

      return selectedValue.label;
    }, [displayValue, selectedValue]);

    return (
      <Root {...props} open={open} value={value} required={required}>
        <div className={classNames(styles.select__wrapper, className)}>
          <Trigger
            ref={ref}
            className={classNames(styles.select__trigger, {
              [styles["select__trigger--invalid"]]: invalid,
            })}
          >
            <p
              className={classNames(styles.trigger__label, {
                [styles["trigger__label--selected"]]: Boolean(selectedValue),
              })}
            >
              {placeholder}
            </p>
            {label && label}
            <ArrowDownIcon />
          </Trigger>

          <Portal>
            <Content
              asChild
              className={styles.select__options}
              position="popper"
              sideOffset={8}
            >
              <motion.ul
                initial={{
                  opacity: 0,
                  translateY: 40,
                }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                }}
                exit={{
                  opacity: 0,
                  translateY: 40,
                }}
              >
                <ScrollDownButton>
                  <ArrowUpIcon />
                </ScrollDownButton>
                {options.map((item, index) => (
                  <Item
                    asChild
                    key={item.id}
                    value={returnValue ? returnValue(item) : item.value}
                    className={styles.options__item}
                    disabled={item.disabled}
                  >
                    <motion.li
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{ delay: index / 10 }}
                    >
                      {item.label}
                    </motion.li>
                  </Item>
                ))}
                <ScrollUpButton>
                  <ArrowDownIcon />
                </ScrollUpButton>
              </motion.ul>
            </Content>
          </Portal>
        </div>
      </Root>
    );
  },
);
Select.displayName = "Select";
