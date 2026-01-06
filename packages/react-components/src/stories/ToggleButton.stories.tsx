import type { Meta, StoryObj } from "@storybook/react-vite";

import { ToggleButton, SvgCheckCircleIcon } from "../components";
import { ToggleButtonProps } from "../components/ToggleButton";

const meta = {
  title: "Components/Toggle buttons/Toggle button",
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
    isIconButton: {
      control: { type: "boolean" },
      description: "Must be set if not using a text label",
    },
    "aria-label": {
      control: { type: "text" },
      description: "Must be set if not using a text label",
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium"],
      description: "Sets button size",
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

export const SmallToggleButton: Story = {
  ...ToggleButtonTemplate,
  args: {
    children: [<SvgCheckCircleIcon />, "Button with icon"],
    size: "small",
  },
};

export const ToggleButtonWithIcon: Story = {
  ...ToggleButtonTemplate,
  args: {
    children: [<SvgCheckCircleIcon />, "Button with icon"],
  },
};

export const IconOnlyToggleButton: Story = {
  ...ToggleButtonTemplate,
  args: {
    isIconButton: true,
    "aria-label": "Confirm",
    children: [<SvgCheckCircleIcon />],
  },
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
