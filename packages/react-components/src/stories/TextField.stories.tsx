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

export const TextFieldTemplate: Story = {
  args: {
    label: "Label",
    size: "medium",
    type: "text",
  },
};

const iconPlaceholder = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="20px/Icon placeholder" clip-path="url(#clip0_717_6325)">
      <path
        id="Icon"
        d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 9.99996C18.3333 5.39759 14.6023 1.66663 9.99996 1.66663C5.39759 1.66663 1.66663 5.39759 1.66663 9.99996C1.66663 14.6023 5.39759 18.3333 9.99996 18.3333Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_717_6325">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const TextFieldWithIcons: Story = {
  args: {
    ...TextFieldTemplate.args,
    iconLeft: iconPlaceholder,
    iconRight: iconPlaceholder,
  },
};
