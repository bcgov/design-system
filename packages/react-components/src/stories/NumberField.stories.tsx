import type { Meta, StoryObj } from "@storybook/react-vite";

import { NumberField } from "../components";

const meta = {
  title: "Components/NumberField",
  component: NumberField,
  parameters: {
    layout: "centered",
    parameters: {
      layout: "centered",
    },
  },
  argTypes: {
    value: {
      control: "number",
      description: "Desire default value to display",
    },
    description: {
      control: "text",
      description: "Text to show below the component",
    },
    formatOptions: {
      control: "object",
      description:
        "Option to format the sign displaying along with the number and All options supported by Intl.NumberFormat",
    },
    minValue: {
      control: "number",
      description: "Set the minimum value",
    },
    maxValue: {
      control: "number",
      description: "Set the maximum value",
    },
    step: {
      control: "number",
      description:
        "value for the increment/decrement steps each click would take",
    },
    isReadOnly: {
      control: "boolean",
      description: "Is the NumberField read-only",
    },
    isDisabled: {
      control: "boolean",
      description: "Is the NumberField disabled",
    },
    label: {
      control: "text",
      description: "Header of the component",
    },
    onChange: {
      description: "Click/press handler",
    },
    errorMessage: {
      control: "text",
    },
  },
} satisfies Meta<typeof NumberField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NumberFieldTemplate: Story = {
  args: {
    label: "Label",
    description: "Description",
    onChange: () => {},
  },
  render: ({ ...args }) => <NumberField {...args} />,
};

export const NumberFieldInvalid: Story = {
  ...NumberFieldTemplate,
  args: {
    isInvalid: true,
    label: "Label",
    description: "Description",
    errorMessage: "Error message",
  },
};
