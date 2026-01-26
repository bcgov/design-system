import type { Meta, StoryObj } from "@storybook/react-vite";
import { getLocalTimeZone, today, isWeekend } from "@internationalized/date";
import { useLocale } from "react-aria-components";

import { DatePicker } from "../components";
import { DatePickerProps, DateValue } from "../components/DatePicker";

const meta = {
  title: "Inputs and controls/DatePicker",
  component: DatePicker,
  parameters: { layout: "centered" },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["medium", "small"],
      description: "Sets the size of the input field",
    },
    label: {
      control: { type: "text" },
      description: "Text that appears above the input field",
    },
    description: {
      control: {
        type: "text",
      },
      description: "Additional helper text below the input field",
    },
    granularity: {
      control: {
        type: "radio",
      },
      options: ["day", "hour", "minute", "second"],
      description: "Sets smallest selectable unit of time",
    },
    hourCycle: {
      control: { type: "radio" },
      options: [12, 24],
      description: "Whether to display the time in 12 or 24 hour format",
    },
    hideTimeZone: {
      control: { type: "boolean" },
      description: "Whether to hide the time zone abbreviation",
    },
    shouldForceLeadingZeros: {
      control: { type: "boolean" },
      description:
        "Whether to always show leading zeros in the month, day, and hour fields",
    },
    minValue: {
      control: { type: "object" },
      description: "Sets the minimum selectable date",
    },
    maxValue: {
      control: { type: "object" },
      description: "Sets the maximum selectable date",
    },
    isDateUnavailable: {
      control: { type: "object" },
      description:
        "Function that determines whether a date is a permissible selection",
    },
    isCalendarDisabled: {
      control: { type: "boolean" },
      description: "Disables the calendar button and popover",
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
    errorMessage: {
      control: { type: "object" },
      description: "Text displayed when the input is invalid",
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DatePickerTemplate: Story = {
  args: {
    label: "Label",
    description: "Description",
    size: "medium",
    isCalendarDisabled: false,
    isRequired: false,
    granularity: "day",
    isDisabled: false,
  },
  render: ({ ...args }: DatePickerProps<DateValue>) => <DatePicker {...args} />,
};

export const SmallDatePicker: Story = {
  ...DatePickerTemplate,
  args: {
    ...DatePickerTemplate.args,
    label: "Label",
    description: "Description",
    size: "small",
  },
};

export const RequiredDatePicker: Story = {
  ...DatePickerTemplate,
  args: {
    ...DatePickerTemplate.args,
    label: "Label",
    description: "Description",
    isRequired: true,
  },
};

export const ConstrainedRange: Story = {
  args: {
    ...DatePickerTemplate.args,
    label: "Date picker with limits",
    description: "This field only allows a future selection within one month.",
    minValue: today(getLocalTimeZone()),
    maxValue: today(getLocalTimeZone()).add({ months: 1 }),
  },
};

export const WeekdayOnly: Story = {
  args: {
    ...DatePickerTemplate.args,
    label: "This date picker does not allow weekends to be selected",
    isDateUnavailable: (date) => isWeekend(date, useLocale().locale),
    description:
      "The isDateUnavailable prop can be used to programmatically disable dates.",
  },
};

export const NoPicker: Story = {
  ...DatePickerTemplate,
  args: {
    ...DatePickerTemplate.args,
    label: "Label",
    description: "Description",
    isCalendarDisabled: true,
  },
};

export const DateAndTime: Story = {
  ...DatePickerTemplate,
  args: {
    ...DatePickerTemplate.args,
    label: "Label",
    description: "Description",
    granularity: "minute",
  },
};

export const Invalid: Story = {
  ...DatePickerTemplate,
  args: {
    ...DatePickerTemplate.args,
    label: "Label",
    description: "Description",
    isInvalid: true,
    errorMessage: "Error message",
  },
};

export const Disabled: Story = {
  ...DatePickerTemplate,
  args: {
    ...DatePickerTemplate.args,
    label: "Label",
    description: "Description",
    isDisabled: true,
  },
};

export const ReadOnly: Story = {
  ...DatePickerTemplate,
  args: {
    ...DatePickerTemplate.args,
    label: "Label",
    description: "Description",
    isReadOnly: true,
  },
};

export const CustomFormatting: Story = {
  ...DatePickerTemplate,
  args: {
    ...DatePickerTemplate.args,
    label: "Label",
    description: "Description",
    granularity: "minute",
    hourCycle: 12,
    hideTimeZone: false,
    shouldForceLeadingZeros: false,
  },
};
