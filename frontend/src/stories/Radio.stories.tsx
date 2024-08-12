import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroup, type RadioOption } from "@shared/ui";
import { useState } from "react";

const options: RadioOption[] = [
  {
    id: 0,
    value: "1",
    label: "value 1",
  },
  {
    id: 1,
    value: "2",
    label: "value 2",
  },
  {
    id: 2,
    value: "3",
    label: "value 3",
    success: true,
  },
  {
    id: 3,
    value: "4",
    label: "value 4",
    invalid: true,
  },
  {
    id: 4,
    value: "5",
    label: "value 5",
    disabled: true,
  },
];

const meta = {
  title: "UI Kit/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
    },
  },
  args: {
    options,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: 300,
          padding: "40px",
          color: "#fff",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const RadioGroupWithState = (
  props: React.ComponentPropsWithoutRef<typeof RadioGroup>,
) => {
  const [value, setValue] = useState<string | undefined>();

  return (
    <>
      <p>Selected value: {value}</p>
      <RadioGroup {...props} value={value} onValueChange={setValue} />
    </>
  );
};

export const Primary: Story = {
  args: {},
  render: (props) => <RadioGroupWithState {...props} />,
};

export const PrimaryDisabled: Story = {
  args: {
    disabled: true,
  },
  render: (props) => <RadioGroupWithState {...props} />,
};
