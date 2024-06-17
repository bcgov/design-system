import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "../components";

const meta = {
  title: "Components/TextField/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["medium", "small"],
      control: { type: "radio" },
      description: "Defaults to 'medium', also supports 'small'",
    },
    type: {
      options: ["text", "search", "email", "url", "tel", "password"],
      control: { type: "radio" },
    },
    label: {
      control: { type: "text" },
      description: "Text that appears above the input field",
    },
    isDisabled: {
      control: "boolean",
      description: "Is the input disabled?",
    },
    isInvalid: {
      control: "boolean",
      description: "Is the user's input valid?",
    },
    minLength: {
      control: "number",
      description: "Minimum length for this input",
    },
    maxLength: {
      control: "number",
      description: "Maximum length for this input",
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextFieldTemplate: Story = {};
