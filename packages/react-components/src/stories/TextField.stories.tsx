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
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextFieldTemplate: Story = {
  args: {
    label: "Label",
    size: "medium",
    type: "text",
    description: "Optional description or helper text",
  },
};

export const MediumTextField: Story = {
  args: {
    ...TextFieldTemplate.args,
    description: "This is the default/medium size variant of the input field",
  },
};

export const SmallTextField: Story = {
  args: {
    ...TextFieldTemplate.args,
    size: "small",
    description: "The small size variant has reduced height",
  },
};

export const RequiredTextField: Story = {
  args: {
    ...TextFieldTemplate.args,
    isRequired: true,
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
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
  >
    <path
      d="M14.4479 13.2956C14.7213 13.569 14.7213 13.9792 14.4479 14.2253C14.3385 14.362 14.1745 14.4167 14.0104 14.4167C13.819 14.4167 13.6549 14.362 13.5182 14.2253L9.85416 10.5612C8.86978 11.3542 7.63931 11.7917 6.32681 11.7917C3.20963 11.7917 0.666656 9.24869 0.666656 6.10416C0.666656 2.98697 3.18228 0.416656 6.32681 0.416656C9.444 0.416656 12.0143 2.98697 12.0143 6.10416C12.0143 7.444 11.5768 8.67447 10.7838 9.6315L14.4479 13.2956ZM1.97916 6.10416C1.97916 8.53775 3.92056 10.4792 6.35416 10.4792C8.76041 10.4792 10.7292 8.53775 10.7292 6.10416C10.7292 3.69791 8.76041 1.72916 6.35416 1.72916C3.92056 1.72916 1.97916 3.69791 1.97916 6.10416Z"
      fill="#2D2D2D"
    />
  </svg>
);

export const TextFieldWithIcons: Story = {
  args: {
    ...TextFieldTemplate.args,
    iconLeft: iconPlaceholder,
    iconRight: iconPlaceholder,
    description: "You can use either, both or neither icon slot as needed",
  },
};

export const SearchField: Story = {
  args: {
    label: "Search",
    size: "medium",
    type: "search",
    iconLeft: iconSearch,
    description: "Icon slots can be used to provide additional visual context",
  },
};

export const PasswordField: Story = {
  args: {
    label: "Password",
    size: "medium",
    type: "password",
    value: "password",
    description: "Input is automatically obscured",
  },
};

export const DisabledTextField: Story = {
  args: {
    ...TextFieldTemplate.args,
    description: "This field is disabled and cannot be interacted with",
    isDisabled: true,
  },
};

export const ReadOnlyTextField: Story = {
  args: {
    label: "Label",
    size: "medium",
    type: "text",
    value: "This field is locked",
    description: "Input can be selected and copied but not edited",
    isReadOnly: true,
  },
};

export const TextFieldError: Story = {
  args: {
    ...TextFieldTemplate.args,
    label: "This is a URL field",
    type: "url",
    value: "This value is invalid",
    description:
      "This component supports custom, real-time and server-side data validation",
    isInvalid: true,
    errorMessage: "Error messages can be customised or passed programmatically",
  },
};
