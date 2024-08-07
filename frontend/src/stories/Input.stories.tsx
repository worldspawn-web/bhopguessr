import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@shared/ui";

const meta = {
  title: "UI Kit/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "var(--bg-light-color)", padding: 40 }}>
        <Story />
      </div>
    ),
  ],
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
    ...Primary.args,
    type: "password",
  },
};

export const PrimaryPasswordDisabled: Story = {
  args: {
    ...Primary.args,
    type: "password",
    disabled: true,
  },
};

export const PrimaryInvalid: Story = {
  args: {
    ...Primary.args,
    invalid: true,
  },
};

export const PrimaryReadonly: Story = {
  args: {
    ...Primary.args,
    readOnly: true,
    value: "Test input",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
    value: "Test input",
  },
};
