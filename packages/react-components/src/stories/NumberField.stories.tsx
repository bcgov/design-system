import type { Meta, StoryObj } from "@storybook/react-vite";

import { NumberField } from "../components";

const meta = {
  title: "Components/NumberField",
  component: NumberField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: {
      control: "number",
      description: "The current value of the input field (controlled)",
    },
    defaultValue: {
      control: "number",
      description: "The default value (uncontrolled)",
    },
    label: {
      control: "text",
      description: "Text label displayed above the input field",
    },
    description: {
      control: "text",
      description: "Explanatory text displayed below the input field",
    },
    errorMessage: {
      control: "text",
      description:
        "Message displayed when `isInvalid` prop is passed (usually populated dynamically)",
    },
    isRequired: {
      control: "boolean",
      description: "Whether an input is required",
    },
    isReadOnly: {
      control: "boolean",
      description: "Sets the field to read-only (focusable, non-interactable)",
    },
    isDisabled: {
      control: "boolean",
      description:
        "Sets the field to disabled (non-focusable, non-interactable)",
    },
    isInvalid: {
      control: "boolean",
      description: "Whether the input is valid (usually set programmatically)",
    },
    size: {
      control: "radio",
      options: ["small", "medium"],
      description: "Toggle size of input field and buttons",
    },
    formatOptions: {
      control: "object",
      description:
        "Option to format the sign displaying along with the number and All options supported by Intl.NumberFormat",
    },
    minValue: {
      control: "number",
      description: "Smallest allowed value",
    },
    maxValue: {
      control: "number",
      description: "Largest allowed value",
    },
    step: {
      control: "number",
      description:
        "value for the increment/decrement steps each click would take",
    },
    onChange: {
      description: "Click/press handler",
    },
  },
} satisfies Meta<typeof NumberField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NumberFieldTemplate: Story = {
  args: {
    label: "Label",
    description: "Description",
  },
  render: ({ ...args }) => <NumberField {...args} />,
};

export const Required: Story = {
  ...NumberFieldTemplate,
  args: {
    label: "This input is mandatory",
    description: "Description",
    isRequired: true,
    value: 401,
  },
};

export const Disabled: Story = {
  ...NumberFieldTemplate,
  args: {
    label: "This input is disabled",
    description: "A disabled input cannot be focused or interacted with",
    isDisabled: true,
    value: 503,
  },
};

export const ReadOnly: Story = {
  ...NumberFieldTemplate,
  args: {
    label: "This input is read-only",
    description:
      "A read-only input can be focused, but cannot be interacted with",
    isReadOnly: true,
    value: 403,
  },
};

export const Invalid: Story = {
  ...NumberFieldTemplate,
  args: {
    label: "This input is invalid",
    description:
      "This component supports custom, real-time and server-side data validation",
    errorMessage: "Error message",
    isInvalid: true,
    value: 406,
  },
};
