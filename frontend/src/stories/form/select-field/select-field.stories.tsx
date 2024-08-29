import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { SuccessSubmitHandler, RejectSubmitHandler } from "@shared/types";
import { SelectField } from "@shared/widget";
import type { SelectOption, SelectProps } from "@shared/ui";

import type { Schema } from "./select-field.interface";
import { schema } from "./select-field.schema";

const options: SelectOption[] = [
  {
    id: 0,
    value: "value man",
    label: "Man",
  },
  {
    id: 1,
    value: "value woman",
    label: "Woman",
  },
  {
    id: 2,
    value: "value other",
    label: "Other",
  },
];

const meta = {
  title: "UI Kit/Select Field",
  component: SelectField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    options,
    // this args will be overridden inside the component
    name: "",
    control: {} as any,
  },
} satisfies Meta<typeof SelectField>;

export default meta;
type Story = StoryObj<typeof meta>;

const PrimaryWithForm = (props: SelectProps) => {
  const { control, handleSubmit, reset } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      sex: null,
    },
  });

  const onSuccessSubmit: SuccessSubmitHandler<Schema> = (values) => {
    console.log(values);
  };

  const onRejectSubmit: RejectSubmitHandler<Schema> = (errors) => {
    console.error(errors);
  };

  return (
    <form
      onSubmit={handleSubmit(onSuccessSubmit, onRejectSubmit)}
      style={{
        width: 400,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "var(--bg-light-color)",
        padding: 40,
        rowGap: 12,
      }}
    >
      <SelectField {...props} control={control} name="sex" />
      <button type="submit">Submit</button>
      <button type="button" onClick={() => reset()}>
        Reset
      </button>
    </form>
  );
};

export const Primary: Story = {
  args: {
    placeholder: "Gender",
  },
  render: (props) => <PrimaryWithForm {...props} />,
};

export const PrimaryWithResetButton: Story = {
  args: {
    ...Primary.args,
    reset: "Reset to default",
  },
  render: (props) => <PrimaryWithForm {...props} />,
};

export const PrimaryDisabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
  render: (props) => <PrimaryWithForm {...props} />,
};

export const PrimaryWithDisabledValue: Story = {
  args: {
    ...Primary.args,
    options: options.map((option, index) => ({
      ...option,
      disabled: index === 1,
    })),
  },
  render: (props) => <PrimaryWithForm {...props} />,
};

export const PrimaryWithCustomReturnValue: Story = {
  args: {
    placeholder: "Pick value",
    returnValue: (option) => option.label,
  },
  render: (props) => <PrimaryWithForm {...props} />,
};

export const PrimaryWithCustomDisplayValue: Story = {
  args: {
    placeholder: "Pick value",
    displayValue: (option) => option.value,
  },
  render: (props) => <PrimaryWithForm {...props} />,
};
