import type { CalendarDate } from "@internationalized/date";
import {
  CalendarStateContext,
  RangeCalendarStateContext,
} from "react-aria-components";
import { ReactElement, useContext } from "react";
import { useDateFormatter } from "react-aria";
import Select from "../Select";

interface MonthItem {
  id: number;
  date: CalendarDate;
  formatted: string;
}

export function MonthDropdown(): ReactElement {
  let calendarState = useContext(CalendarStateContext);
  let rangeCalendarState = useContext(RangeCalendarStateContext);
  let state = calendarState || rangeCalendarState!;
  let formatter = useDateFormatter({
    month: "long",
    timeZone: state.timeZone,
  });

  // Format the name of each month in the year according to the
  // current locale and calendar system. Note that in some calendar
  // systems, such as the Hebrew, the number of months may differ
  // between years.
  let months: MonthItem[] = [];
  let numMonths = state.focusedDate.calendar.getMonthsInYear(state.focusedDate);
  for (let i = 1; i <= numMonths; i++) {
    let date = state.focusedDate.set({ month: i });
    months.push({
      id: i,
      date,
      formatted: formatter.format(date.toDate(state.timeZone)),
    });
  }

  return (
    <Select
      aria-label="Month"
      size="small"
      value={state.focusedDate.month}
      onChange={(key) => {
        if (typeof key === "number") {
          state.setFocusedDate(months[key - 1].date);
        }
      }}
      items={months.map((month) => ({
        id: month.id,
        label: month.formatted,
      }))}
    />
  );
}
