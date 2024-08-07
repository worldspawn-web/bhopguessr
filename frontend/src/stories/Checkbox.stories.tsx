import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Checkbox, type CheckedState } from "@shared/ui";

const meta = {
  title: "Example/Checkbox",
  component: Checkbox,
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
    label: "Checkbox",
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "var(--bg-dark-color)", padding: 40 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDisabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

const CheckboxWithState = (
  props: React.ComponentPropsWithoutRef<typeof Checkbox>,
) => {
  const [checked, setChecked] = useState<CheckedState>(false);

  return <Checkbox {...props} value={checked} onChange={setChecked} />;
};

export const PrimaryWithState: Story = {
  args: {
    ...Primary.args,
  },
  render: (props) => <CheckboxWithState {...props} />,
};
