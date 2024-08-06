import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "@shared/ui";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: {
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
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: fn(),
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
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
