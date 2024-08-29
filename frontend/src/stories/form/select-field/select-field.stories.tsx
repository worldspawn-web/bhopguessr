import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { SuccessSubmitHandler, RejectSubmitHandler } from "@shared/types";
import { SelectField } from "@shared/widget";
import type { SelectOption } from "@shared/ui";

import type { Schema } from "./select-field.interface";
import { schema } from "./select-field.schema";

const meta = {
  title: "UI Kit/Select Field",
  component: SelectField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof SelectField>;

export default meta;
type Story = StoryObj<typeof meta>;

const options: SelectOption[] = [
  {
    id: 0,
    value: "man",
    label: "Man",
  },
  {
    id: 1,
    value: "woman",
    label: "Woman",
  },
  {
    id: 2,
    value: "other",
    label: "Other",
  },
];

const PrimaryWithForm = () => {
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
      <SelectField
        control={control}
        name="sex"
        placeholder="Gender"
        options={options}
        reset="Reset to default"
      />
      <button type="submit">Submit</button>
      <button type="button" onClick={() => reset()}>
        Reset
      </button>
    </form>
  );
};

export const Primary: Partial<Story> = {
  render: () => <PrimaryWithForm />,
};
