import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "../components";
import { SwitchProps } from "@/components/Switch";

const meta = {
  title: "Components/Switch/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    labelPosition: {
      options: ["left", "right"],
      control: { type: "radio" },
      description: "Sets the position of the text label",
    },
    isDisabled: {
      control: "boolean",
      description: "Disables the switch",
    },
    isReadOnly: {
      control: "boolean",
      description: "Sets the switch to read-only",
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SwitchTemplate: Story = {
  args: {
    children: "Label text",
    labelPosition: "right",
  },
  render: ({ ...args }: SwitchProps) => <Switch {...args} />,
};

export const LabelReversed: Story = {
  ...SwitchTemplate,
  args: {
    children: "Label position reversed",
    labelPosition: "left",
  },
};

export const DisabledSwitch: Story = {
  ...SwitchTemplate,
  args: {
    children: "Disabled switch",
    isDisabled: true,
  },
};

export const ReadOnlySwitch: Story = {
  ...SwitchTemplate,
  args: {
    children: "Read-only switch",
    isReadOnly: true,
  },
};
