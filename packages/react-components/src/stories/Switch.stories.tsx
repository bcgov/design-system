import type { Meta, StoryObj } from "@storybook/react-vite";

import { Switch } from "../components";
import { SwitchProps } from "@/components/Switch";

const meta = {
  title: "Components/Switch/Switch",
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
