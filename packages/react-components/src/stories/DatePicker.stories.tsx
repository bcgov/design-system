import type { Meta, StoryObj } from "@storybook/react-vite";
import { getLocalTimeZone, today } from "@internationalized/date";

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
      options: ["day", "minute"],
      description: "Sets smallest selectable unit of time",
    },
    minValue: {
      control: { type: "object" },
      description: "Sets the minimum selectable date",
    },
    maxValue: {
      control: { type: "object" },
      description: "Sets the maximum selectable date",
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
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DatePickerTemplate: Story = {
  args: { label: "Label", description: "Description" },
  render: ({ ...args }: DatePickerProps<DateValue>) => <DatePicker {...args} />,
};

export const ConstrainedRange: Story = {
  args: {
    label: "Date picker with limits",
    description: "This field only allows a future selection within one month.",
    minValue: today(getLocalTimeZone()),
    maxValue: today(getLocalTimeZone()).add({ months: 1 }),
  },
};

export const NoPicker: Story = {
  ...DatePickerTemplate,
  args: {
    label: "Label",
    description: "Description",
    isCalendarDisabled: true,
  },
};

export const DateAndTime: Story = {
  ...DatePickerTemplate,
  args: { label: "Label", description: "Description", granularity: "minute" },
};

export const Invalid: Story = {
  ...DatePickerTemplate,
  args: {
    label: "Label",
    description: "Description",
    isInvalid: true,
    errorMessage: "Error message",
  },
};

export const Disabled: Story = {
  ...DatePickerTemplate,
  args: { label: "Label", description: "Description", isDisabled: true },
};

export const ReadOnly: Story = {
  ...DatePickerTemplate,
  args: { label: "Label", description: "Description", isReadOnly: true },
};
