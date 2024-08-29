import classNames from "classnames";
import { memo } from "react";
import { useController, type FieldValues } from "react-hook-form";

import { Input } from "../../ui";
import type { TextFieldProps } from "./text-field.interface";
import styles from "./text-field.module.scss";

const InnerComponent = <TFieldValues extends FieldValues = FieldValues>({
  className,
  control,
  name,
  defaultValue,
  disabled,
  rules,
  shouldUnregister,
  ...props
}: TextFieldProps<TFieldValues>) => {
  const { field, fieldState } = useController({
    control,
    defaultValue,
    disabled,
    name,
    rules,
    shouldUnregister,
  });

  const { invalid, error } = fieldState;

  return (
    <div className={classNames(styles.field, className)}>
      <Input {...field} {...props} invalid={invalid} />
      {error && <p className={styles.field__error}>{error.message}</p>}
    </div>
  );
};

export const TextField = memo(InnerComponent) as typeof InnerComponent;
