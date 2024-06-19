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

const iconSearch = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="20px/Search" clip-path="url(#clip0_717_6325)">
      <path
        id="Search icon"
        d="M20.7361 19.5586C21.088 19.9101 21.088 20.4375 20.7361 20.7539C20.5953 20.9297 20.3842 21 20.1731 21C19.9267 21 19.7155 20.9297 19.5396 20.7539L14.824 16.0429C13.5572 17.0625 11.9736 17.625 10.2845 17.625C6.27274 17.625 3 14.3555 3 10.3125C3 6.30468 6.23754 3 10.2845 3C14.2962 3 17.6041 6.30468 17.6041 10.3125C17.6041 12.0352 17.0411 13.6172 16.0205 14.8477L20.7361 19.5586ZM4.68916 10.3125C4.68916 13.4414 7.18769 15.9375 10.3197 15.9375C13.4164 15.9375 15.9501 13.4414 15.9501 10.3125C15.9501 7.21874 13.4164 4.6875 10.3197 4.6875C7.18769 4.6875 4.68916 7.21874 4.68916 10.3125Z"
        stroke="currentColor"
        stroke-width="1"
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

export const TextFieldSearch: Story = {
  args: {
    label: "Search",
    size: "medium",
    type: "search",
    iconLeft: iconSearch,
  },
};
