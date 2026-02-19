import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  CalendarDate,
  isWeekend,
  today,
  getLocalTimeZone,
} from "@internationalized/date";
import { useLocale } from "react-aria-components";

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
    visibleDuration: {
      control: { type: "object" },
      description: "Sets the number of months visible in the calendar view",
    },
    pageBehavior: {
      control: { type: "radio" },
      options: ["single", "visible"],
      description: "Controls the behavior of pagination",
    },
    value: {
      control: { type: "object" },
      description:
        "The currently-selected date within the calendar (controlled)",
    },
    defaultValue: {
      control: { type: "object" },
      description:
        "The initially-selected date within the calendar (uncontrolled)",
    },
    focusedValue: {
      control: { type: "object" },
      description:
        "The currently-focused date within the calendar (controlled)",
    },
    defaultFocusedValue: {
      control: { type: "object" },
      description:
        "The initially-focused date within the calendar (uncontrolled)",
    },
    isReadOnly: {
      control: { type: "boolean" },
      description: "Whether the calendar is read-only",
    },
    isDisabled: {
      control: { type: "boolean" },
      description: "Whether the calendar is active or disabled",
    },
    isDateUnavailable: {
      control: { type: "object" },
      description:
        "Callback function that determines whether a date is a permissible selection",
    },
    selectionAlignment: {
      control: { type: "radio" },
      options: ["start", "center", "end"],
      description: "Sets the alignment of the selected date in the view",
    },
    createCalendar: {
      control: { type: "object" },
      description:
        "A function to create a new Calendar object for a given calendar identifier. If not provided, the `createCalendar` function from @internationalized/date will be used.",
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

export const ConstrainedRange: Story = {
  ...CalendarTemplate,
  args: {
    ...CalendarTemplate.args,
    minValue: new CalendarDate(2026, 2, 1),
    maxValue: new CalendarDate(2026, 3, 1),
    visibleDuration: { months: 3 },
  },
};

export const DefaultValue: Story = {
  ...CalendarTemplate,
  args: {
    ...CalendarTemplate.args,
    defaultValue: today(getLocalTimeZone()),
  },
};

export const FirstDayOfWeek: Story = {
  ...CalendarTemplate,
  args: {
    ...CalendarTemplate.args,
    firstDayOfWeek: "mon",
  },
};

export const DisabledCalendar: Story = {
  ...CalendarTemplate,
  args: {
    ...CalendarTemplate.args,
    isDisabled: true,
  },
};

export const WeekdayOnly: Story = {
  ...CalendarTemplate,
  args: {
    ...CalendarTemplate.args,
    minValue: new CalendarDate(2026, 2, 1),
    maxValue: new CalendarDate(2026, 3, 1),
    visibleDuration: { months: 3 },
    isDateUnavailable: (date) => isWeekend(date, useLocale().locale),
  },
};

export const PageBehavior: Story = {
  ...CalendarTemplate,
  args: {
    ...CalendarTemplate.args,
    visibleDuration: { months: 3 },
    pageBehavior: "single",
  },
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

export const MinMax: Story = {
  ...CalendarTemplate,
  args: {
    ...CalendarTemplate.args,
    visibleDuration: { months: 3 },
    minValue: new CalendarDate(2026, 1, 1),
    maxValue: new CalendarDate(2026, 3, 31),
    pageBehavior: "visible",
  },
};
