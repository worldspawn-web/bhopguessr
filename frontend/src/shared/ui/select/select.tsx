import classNames from "classnames";
import { forwardRef, useMemo } from "react";
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

    const label = useMemo<string>(() => {
      if (isNull(selectedValue)) {
        return placeholder;
      }

      if (displayValue) {
        return displayValue(selectedValue);
      }

      return selectedValue.label;
    }, [displayValue, placeholder, selectedValue]);

    return (
      <Root {...props} value={value} required={required}>
        <div className={classNames(styles.select__wrapper, className)}>
          <Trigger ref={ref} className={styles.select__trigger}>
            {label}
            <ArrowDownIcon />
          </Trigger>

          <Portal>
            <Content
              asChild
              className={styles.select__options}
              position="popper"
              sideOffset={8}
            >
              <ul>
                <ScrollDownButton>
                  <ArrowUpIcon />
                </ScrollDownButton>
                {options.map((item) => (
                  <Item
                    asChild
                    key={item.id}
                    value={returnValue ? returnValue(item) : item.value}
                    className={styles.options__item}
                    disabled={item.disabled}
                  >
                    <li>{item.label}</li>
                  </Item>
                ))}
                <ScrollUpButton>
                  <ArrowDownIcon />
                </ScrollUpButton>
              </ul>
            </Content>
          </Portal>
        </div>
      </Root>
    );
  },
);
Select.displayName = "Select";
