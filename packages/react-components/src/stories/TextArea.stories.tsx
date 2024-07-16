import type { Meta, StoryObj } from "@storybook/react";

import { TextArea } from "../components";

const meta = {
  title: "Components/TextArea",
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

export const TextAreaWithMaxLength: Story = {
  args: {
    label: "Label",
    description: "This text area has a maximum length, and displays a counter.",
    maxLength: 500,
  },
};

export const DisabledTextArea: Story = {
  args: {
    label: "Label",
    description: "This text area is disabled",
    isDisabled: true,
  },
};

export const ReadOnlyTextArea: Story = {
  args: {
    label: "Label",
    value: "This text area is set to read-only.",
    description: "It is focusable, and the value can be copied but not edited.",
    isReadOnly: true,
  },
};
