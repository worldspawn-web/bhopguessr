import classNames from "classnames";
import { forwardRef, useMemo, useCallback } from "react";
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
import { isNull, isStringEmpty } from "../../utils";
import type { SelectOption, SelectProps } from "./select.interface";
import styles from "./select.module.scss";

export const Select = forwardRef<React.ElementRef<typeof Trigger>, SelectProps>(
  (
    {
      className,
      options,
      displayValue,
      returnValue,
      required = true,
      value,
      onValueChange,
      placeholder,
      open,
      invalid,
      reset,
      disabled,
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

    const onChange = useCallback(
      (newValue: string) => {
        if (isStringEmpty(newValue)) {
          return;
        }

        if (onValueChange) {
          onValueChange(newValue);
        }
      },
      [onValueChange],
    );

    return (
      <Root
        {...props}
        open={open}
        value={value}
        onValueChange={onChange}
        disabled={disabled}
      >
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
                [styles["trigger__label--disabled"]]: disabled,
              })}
            >
              {placeholder}
              {required && <span className={styles.select__required}> *</span>}
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
                {reset && (
                  <Item
                    asChild
                    value={null as unknown as string}
                    className={classNames(
                      styles.options__item,
                      styles["options__item--reset"],
                    )}
                  >
                    <motion.li
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                    >
                      {reset}
                    </motion.li>
                  </Item>
                )}
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
