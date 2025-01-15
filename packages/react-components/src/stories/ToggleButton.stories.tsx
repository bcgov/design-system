import type { Meta, StoryObj } from "@storybook/react";

import { ToggleButton, SvgCheckCircleIcon } from "../components";
import { ToggleButtonProps } from "../components/ToggleButton";

const meta = {
  title: "Components/Toggle Button Group/Toggle Button",
  component: ToggleButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    id: {
      control: { type: "text" },
      description: "Unique identifier for the button (required)",
    },
    children: {
      control: { type: "object" },
      description: "Populates button text",
    },
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
      description: "The behavior of the button when used in an HTML form",
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium"],
      description: "Sets button size",
    },
    danger: {
      control: { type: "boolean" },
      description: "Applies a red colourway",
    },
    isDisabled: {
      control: { type: "boolean" },
      description: "Whether a button is disabled",
    },
    autoFocus: {
      control: { type: "boolean" },
      description: "Whether the element should receive focus on render",
    },
    isSelected: {
      control: { type: "boolean" },
      description: "Whether the element should be selected (controlled)",
    },
    defaultSelected: {
      control: { type: "boolean" },
      description: "Whether the element should be selected (uncontrolled)",
    },
  },
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleButtonTemplate: Story = {
  args: { children: ["Button text"], id: "1", isDisabled: false },
  render: ({ ...args }: ToggleButtonProps) => <ToggleButton {...args} />,
};

export const ToggleButtonWithIcon: Story = {
  ...ToggleButtonTemplate,
  args: {
    children: [<SvgCheckCircleIcon />, "Button with icon"],
  },
};

export const DangerToggleButton: Story = {
  ...ToggleButtonTemplate,
  args: { children: ["Danger colourway"], danger: true },
};

export const DefaultSelectedToggleButton: Story = {
  ...ToggleButtonTemplate,
  args: {
    children: ["This button is selected by default"],
    defaultSelected: true,
  },
};

export const DisabledToggleButton: Story = {
  ...ToggleButtonTemplate,
  args: { children: ["This button is disabled"], isDisabled: true },
};
