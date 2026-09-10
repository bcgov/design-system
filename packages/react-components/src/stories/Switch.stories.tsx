import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Switch } from "../components";
import { SwitchProps } from "@/components/Switch";

const meta = {
  title: "Inputs and controls/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: { type: "object" },
      description: "Used to set label text",
    },
    description: {
      control: { type: "text" },
      description: "Optional description text below label",
    },
    labelPosition: {
      options: ["left", "right"],
      control: { type: "radio" },
      description: "Sets the position of the text label",
    },
    defaultSelected: {
      control: "boolean",
      description: "Sets the switch to 'on' by default",
    },
    isSelected: {
      control: "boolean",
      description: "Whether a switch is currently selected",
    },
    isDisabled: {
      control: "boolean",
      description: "Disables the switch",
    },
    isReadOnly: {
      control: "boolean",
      description: "Sets the switch to read-only",
    },
    isInvalid: {
      control: "boolean",
      description: "Whether the switch's current value is invalid",
    },
    errorMessage: {
      control: "text",
      description:
        "Message displayed when `isInvalid` prop is passed (usually populated dynamically)",
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SwitchTemplate: Story = {
  args: {
    children: "Label text",
    labelPosition: "right",
    description: "The description field is optional.",
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

export const DefaultSelectedSwitch: Story = {
  ...SwitchTemplate,
  args: {
    children: "This switch is selected by default",
    defaultSelected: true,
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
    isSelected: true,
    isReadOnly: true,
  },
};

export const InvalidSwitch: Story = {
  args: {
    children: "This switch is invalid",
    description: "Turning the switch on clears the error.",
    errorMessage: "This switch must be on",
  },
  render: ({ ...args }: SwitchProps) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <Switch
        {...args}
        isSelected={isSelected}
        onChange={setIsSelected}
        isInvalid={!isSelected}
      />
    );
  },
};
