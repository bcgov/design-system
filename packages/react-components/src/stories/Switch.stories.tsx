import type { Meta, StoryObj } from "@storybook/react-vite";

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
    labelPosition: {
      options: ["left", "right"],
      control: { type: "radio" },
      description: "Sets the position of the text label",
    },
    description: {
      control: "text",
      description: "Explanatory text displayed below the switch",
    },
    errorMessage: {
      control: "text",
      description:
        "Message displayed when `isInvalid` prop is passed (usually populated dynamically)",
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
    defaultSelected: {
      control: "boolean",
      description: "Sets the switch to 'on' by default",
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

export const SwitchWithDescription: Story = {
  ...SwitchTemplate,
  args: {
    children: "Switch with description",
    description: "This is a description for the switch",
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

export const ErrorSwitch: Story = {
  ...SwitchTemplate,
  args: {
    children: "Switch with error",
    isInvalid: true,
    errorMessage: "This switch is in an invalid state",
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
