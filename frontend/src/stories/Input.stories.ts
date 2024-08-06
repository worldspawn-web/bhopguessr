import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@shared/ui";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "Input",
  },
};

export const PrimaryPassword: Story = {
  args: {
    placeholder: "Input",
    type: "password",
  },
};
