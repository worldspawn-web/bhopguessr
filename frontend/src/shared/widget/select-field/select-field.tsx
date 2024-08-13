import classNames from "classnames";
import { memo } from "react";
import { useController, type FieldValues } from "react-hook-form";

import { Select } from "../../ui";
import type { SelectFieldProps } from "./select-field.interface";
import styles from "./select-field.module.css";

const InnerComponent = <TFieldValues extends FieldValues = FieldValues>({
  className,
  control,
  name,
  defaultValue,
  disabled,
  rules,
  shouldUnregister,
  ...props
}: SelectFieldProps<TFieldValues>) => {
  const { field, fieldState } = useController({
    control,
    defaultValue,
    disabled,
    name,
    rules,
    shouldUnregister,
  });

  const { onChange, ...restField } = field;
  const { invalid, error } = fieldState;

  console.log(field);

  return (
    <div className={classNames(styles.field, className)}>
      <Select
        {...restField}
        {...props}
        onValueChange={onChange}
        invalid={invalid}
      />
      {error && <p className={styles.field__error}>{error.message}</p>}
    </div>
  );
};

export const SelectField = memo(InnerComponent) as typeof InnerComponent;
