import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { IconButton } from "@shared/ui";
import { TestIcon } from "@shared/icons";

const meta = {
  title: "Example/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: false,
    },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "plain"],
    },
    size: {
      control: "radio",
      options: ["large", "medium", "small"],
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    onClick: fn(),
    icon: <TestIcon />,
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "var(--bg-light-color)", padding: 40 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const PrimaryLarge: Story = {
  args: {
    ...Primary.args,
    size: "large",
  },
};

export const PrimarySmall: Story = {
  args: {
    ...Primary.args,
    size: "small",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const SecondaryLarge: Story = {
  args: {
    ...Secondary.args,
    size: "large",
  },
};

export const SecondarySmall: Story = {
  args: {
    ...Secondary.args,
    size: "small",
  },
};

export const SecondaryDisabled: Story = {
  args: {
    ...Secondary.args,
    disabled: true,
  },
};

export const Plain: Story = {
  args: {
    variant: "plain",
  },
};

export const PlainLarge: Story = {
  args: {
    ...Plain.args,
    size: "large",
  },
};

export const PlainSmall: Story = {
  args: {
    ...Plain.args,
    size: "small",
  },
};

export const PlainDisabled: Story = {
  args: {
    ...Plain.args,
    disabled: true,
  },
};
