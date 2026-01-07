import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox } from "../components";
import { CheckboxProps } from "../components/Checkbox";

const meta = {
  title: "Inputs and controls/CheckboxGroup/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: {
      control: { type: "text" },
      description: "Unique identifier used for validation and data submission",
    },
    children: {
      control: { type: "object" },
      description: "Text label",
    },
    defaultSelected: {
      control: { type: "boolean" },
      description: "Whether a checkbox is selected by default",
    },
    isRequired: {
      control: { type: "boolean" },
      description: "Whether a checkbox is mandatory",
    },
    isIndeterminate: {
      control: { type: "boolean" },
      description: "Locks a checkbox to an 'indeterminate' state",
    },
    isInvalid: {
      control: { type: "boolean" },
      description: "Whether a checkbox is invalid",
    },
    isDisabled: {
      control: { type: "boolean" },
      description: "Disables a checkbox",
    },
    isReadOnly: {
      control: { type: "boolean" },
      description: "Locks a checkbox to its current state",
    },
    isSelected: {
      control: { type: "boolean" },
      description:
        "For a controlled component, whether the checkbox is selected",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxTemplate: Story = {
  args: { children: "This is a checkbox label" },
  render: ({ ...args }: CheckboxProps) => <Checkbox {...args} />,
};

export const DefaultSelectedCheckbox: Story = {
  args: {
    children: "This checkbox is selected by default",
    defaultSelected: true,
  },
};

export const RequiredCheckbox: Story = {
  args: {
    children: "This checkbox is mandatory",
    isRequired: true,
  },
};

export const DisabledCheckbox: Story = {
  args: {
    children: "This checkbox is disabled",
    isDisabled: true,
  },
};

export const ReadOnlyCheckbox: Story = {
  args: {
    children: "This checkbox is set to read-only",
    isSelected: true,
    isReadOnly: true,
  },
};

export const IndeterminateCheckbox: Story = {
  args: {
    children: "This checkbox is neither selected nor deselected",
    isIndeterminate: true,
  },
};
