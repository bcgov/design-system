import type { Meta, StoryObj } from "@storybook/react-vite";
import { now, getLocalTimeZone, Time } from "@internationalized/date";

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
      table: { defaultValue: { summary: "medium" } },
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
      table: { defaultValue: { summary: "12" } },
    },
    granularity: {
      control: "radio",
      options: ["hour", "minute", "second"],
      description: "Determines the smallest time unit that the user can select",
      table: { defaultValue: { summary: "minute" } },
    },
    hideTimeZone: {
      control: { type: "boolean" },
      description: "Whether to hide the time zone abbreviation",
      table: { defaultValue: { summary: "false" } },
    },
    shouldForceLeadingZeros: {
      control: { type: "boolean" },
      description:
        "Whether to always show leading zeros in the hour, minute, and second fields",
      table: { defaultValue: { summary: "false" } },
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
        "A placeholder time that influences the format of the placeholder shown when no value is selected",
    },
    minValue: {
      control: { type: "object" },
      description: "Sets the earliest selectable time",
    },
    maxValue: {
      control: { type: "object" },
      description: "Sets the latest selectable time",
    },
    isRequired: {
      control: { type: "boolean" },
      description: "Whether an input is required",
      table: { defaultValue: { summary: "false" } },
    },
    isDisabled: {
      control: { type: "boolean" },
      description: "Whether the input is active or disabled",
      table: { defaultValue: { summary: "false" } },
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
    defaultValue: now(getLocalTimeZone()),
  },
  render: ({ ...args }) => <TimeField {...args} />,
};

export const SmallTimeField: Story = {
  ...TimeFieldTemplate,
  args: {
    ...TimeFieldTemplate.args,
    size: "small",
  },
};

export const Hour24TimeField: Story = {
  ...TimeFieldTemplate,
  args: {
    ...TimeFieldTemplate.args,
    hourCycle: 24,
    defaultValue: new Time(20, 26),
  },
};

export const SecondGranularityTimeField: Story = {
  ...TimeFieldTemplate,
  args: {
    ...TimeFieldTemplate.args,
    granularity: "second",
  },
};

export const RequiredTimeField: Story = {
  ...TimeFieldTemplate,
  args: {
    ...TimeFieldTemplate.args,
    isRequired: true,
  },
};

export const ReadOnlyTimeField: Story = {
  ...TimeFieldTemplate,
  args: {
    ...TimeFieldTemplate.args,
    isReadOnly: true,
  },
};

export const DisabledTimeField: Story = {
  ...TimeFieldTemplate,
  args: {
    ...TimeFieldTemplate.args,
    isDisabled: true,
  },
};

export const InvalidTimeField: Story = {
  ...TimeFieldTemplate,
  args: {
    ...TimeFieldTemplate.args,
    isInvalid: true,
    errorMessage: "This is an error message.",
  },
};
