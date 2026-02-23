import type { Meta, StoryObj } from "@storybook/react-vite";

import { TimeField } from "@/components";

const meta = {
  title: "Inputs and controls/TimeField",
  component: TimeField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["small", "medium"],
      description: "Toggle size of input field and buttons",
    },
    label: {
      control: "text",
      description: "Text that appears above the input field",
    },
    description: {
      control: "text",
      description: "Explanatory text displayed below the input field",
    },
    hourCycle: {
      control: "radio",
      options: [12, 24],
      description:
        "Toggles between 12- and 24-hour format. By default, this is determined by the user's locale",
    },
    granularity: {
      control: "radio",
      options: ["hour", "minute", "second"],
      description: "Determines the smallest time unit that the user can select",
    },
    hideTimeZone: {
      control: { type: "boolean" },
      description: "Whether to hide the time zone abbreviation",
    },
    shouldForceLeadingZeros: {
      control: { type: "boolean" },
      description:
        "Whether to always show leading zeros in the hour, minute, and second fields",
    },
    value: {
      control: "object",
      description: "The current value of the input field (controlled)",
    },
    defaultValue: {
      control: "object",
      description: "The default value (uncontrolled)",
    },
    placeholderValue: {
      control: "object",
      description:
        "`TimeValue` object that sets the placeholder value for the input field",
    },
    isRequired: {
      control: { type: "boolean" },
      description: "Whether an input is required",
    },
    isDisabled: {
      control: { type: "boolean" },
      description: "Whether the input is active or disabled",
    },
    isInvalid: {
      control: { type: "boolean" },
      description: "Whether the current input is valid",
    },
  },
} satisfies Meta<typeof TimeField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TimeFieldTemplate: Story = {
  args: {
    label: "Label",
    description: "Description",
    size: "medium",
    granularity: "minute",
    hourCycle: 12,
  },
  render: ({ ...args }) => <TimeField {...args} />,
};
