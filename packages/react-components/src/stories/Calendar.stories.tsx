import type { Meta, StoryObj } from "@storybook/react-vite";
import { CalendarDate } from "@internationalized/date";

import { Calendar } from "../components";
import { CalendarProps, DateValue } from "../components/Calendar";

const meta = {
  title: "Inputs and controls/Calendar",
  component: Calendar,
  parameters: { layout: "centered" },
  argTypes: {
    firstDayOfWeek: {
      control: { type: "radio" },
      options: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
      description: "Sets the first day of the week in the calendar view",
    },
    isDateUnavailable: {
      control: { type: "object" },
      description:
        "Function that determines whether a date is a permissible selection",
    },
    visibleDuration: {
      control: { type: "object" },
      description: "Sets the number of months visible in the calendar view",
    },
    pageBehavior: {
      control: { type: "radio" },
      options: ["single", "visible"],
      description: "Controls the behavior of pagination",
    },
    selectionAlignment: {
      control: { type: "radio" },
      options: ["start", "center", "end"],
      description: "Sets the alignment of the selected date in the view",
    },
    isDisabled: {
      control: { type: "boolean" },
      description: "Whether the calendar is active or disabled",
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CalendarTemplate: Story = {
  args: {
    visibleDuration: { months: 1 },
    firstDayOfWeek: "sun",
    isDisabled: false,
  },
  render: ({ ...args }: CalendarProps<DateValue>) => <Calendar {...args} />,
};

export const MultipleMonths: Story = {
  ...CalendarTemplate,
  args: {
    ...CalendarTemplate.args,
    visibleDuration: { months: 3 },
    firstDayOfWeek: "mon",
    isDisabled: false,
    pageBehavior: "visible",
  },
};

export const HalfYear: Story = {
  ...CalendarTemplate,
  args: {
    ...CalendarTemplate.args,
    visibleDuration: { months: 6 },
    minValue: new CalendarDate(2026, 1, 1),
    maxValue: new CalendarDate(2026, 12, 31),
    firstDayOfWeek: "mon",
    isDisabled: false,
    pageBehavior: "visible",
  },
};
