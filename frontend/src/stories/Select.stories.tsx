import type { Meta, StoryObj } from "@storybook/react";

import { Select, type SelectOption } from "@shared/ui";
import { useState } from "react";

const options: SelectOption[] = [
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
  },
  {
    id: 3,
    value: "4",
    label: "value 4",
  },
  {
    id: 4,
    value: "5",
    label: "value 5",
    disabled: true,
  },
];

const meta = {
  title: "UI Kit/Select",
  component: Select,
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
          backgroundColor: "var(--bg-light-color)",
          padding: "100px 40px",
          color: "#fff",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const SelectWithState = (
  props: React.ComponentPropsWithoutRef<typeof Select>,
) => {
  const [value, setValue] = useState<string | undefined>();

  return (
    <>
      <p style={{ marginBottom: 10 }}>Selected value: {value}</p>
      <Select {...props} value={value} onValueChange={setValue} />
    </>
  );
};

export const Primary: Story = {
  args: {
    placeholder: "Pick value",
  },
  render: (props) => <SelectWithState {...props} />,
};

export const PrimaryDisabled: Story = {
  args: {
    placeholder: "Pick value",
    disabled: true,
  },
  render: (props) => <SelectWithState {...props} />,
};

export const PrimaryWithCustomReturnValue: Story = {
  args: {
    placeholder: "Pick value",
    returnValue: (option) => option.label,
  },
  render: (props) => <SelectWithState {...props} />,
};

export const PrimaryWithCustomDisplayValue: Story = {
  args: {
    placeholder: "Pick value",
    displayValue: (option) => option.value,
  },
  render: (props) => <SelectWithState {...props} />,
};
