import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { SuccessSubmitHandler, RejectSubmitHandler } from "@shared/types";
import { TextField } from "@shared/widget";

import type { Schema } from "./text-field.interface";
import { schema } from "./text-field.schema";

const meta = {
  title: "UI Kit/Text Field",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

const PrimaryWithForm = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const { control, handleSubmit, reset } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      login: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  const onSuccessSubmit: SuccessSubmitHandler<Schema> = (values) => {
    console.log(values);

    setSubmitted(true);
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
      <TextField control={control} name="name" placeholder="Name" />
      <TextField control={control} name="login" placeholder="Login" />
      <TextField
        control={control}
        name="email"
        placeholder="Email"
        type="email"
      />
      <TextField
        control={control}
        name="password"
        placeholder="Password"
        type="password"
      />
      <TextField
        control={control}
        name="repeatPassword"
        placeholder="Repeat password"
        type="password"
      />
      <button type="submit" disabled={submitted}>
        Submit
      </button>
      <button
        type="button"
        onClick={() => {
          reset();
          setSubmitted(false);
        }}
      >
        Reset
      </button>
    </form>
  );
};

export const Primary: Partial<Story> = {
  render: () => <PrimaryWithForm />,
};
