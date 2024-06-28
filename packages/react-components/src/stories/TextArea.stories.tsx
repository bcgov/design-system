import type { Meta, StoryObj } from "@storybook/react";

import { TextArea } from "../components";

const meta = {
  title: "Components/Text Input/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: {
      control: { type: "text" },
      description: "Input value",
    },
    label: {
      control: { type: "text" },
      description: "Text that appears above the input field",
    },
    isRequired: {
      control: "boolean",
      description: "Is this input required?",
    },
    isDisabled: {
      control: "boolean",
      description: "Is the input disabled?",
    },
    isInvalid: {
      control: "boolean",
      description: "Is the user's input valid?",
    },
    isReadOnly: {
      control: "boolean",
      description: "Locks the field to its current value",
    },
    minLength: {
      control: "number",
      description: "Minimum character length for this input",
    },
    maxLength: {
      control: "number",
      description: "Maximum character length for this input",
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextAreaTemplate: Story = {
  args: {
    label: "Label",
    description: "Optional description or helper text",
  },
};

export const TextAreaError: Story = {
  args: {
    label: "Label",
    description: "Optional description or helper text",
    isRequired: true,
    isInvalid: true,
    errorMessage: "Error message",
  },
};
