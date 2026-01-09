import type { CalendarDate } from "@internationalized/date";
import {
  CalendarStateContext,
  RangeCalendarStateContext,
} from "react-aria-components";
import { ReactElement, useContext } from "react";
import { useDateFormatter } from "react-aria";
import Select from "../Select";

interface YearItem {
  id: number;
  date: CalendarDate;
  formatted: string;
}

export function YearDropdown(): ReactElement {
  let calendarState = useContext(CalendarStateContext);
  let rangeCalendarState = useContext(RangeCalendarStateContext);
  let state = calendarState || rangeCalendarState!;
  let formatter = useDateFormatter({
    year: "numeric",
    timeZone: state.timeZone,
  });

  // Format the name of each month in the year according to the
  // current locale and calendar system. Note that in some calendar
  // systems, such as the Hebrew, the number of months may differ
  // between years.
  // Format 20 years on each side of the current year according
  // to the current locale and calendar system.
  let years: YearItem[] = [];
  for (let i = -20; i <= 20; i++) {
    let date = state.focusedDate.add({ years: i });
    years.push({
      // Use the index as the id so we can retrieve the full
      // date object from the list in onChange. We cannot only
      // store the year number, because in some calendars, such
      // as the Japanese, the era may also change.
      id: years.length,
      date,
      formatted: formatter.format(date.toDate(state.timeZone)),
    });
  }

  return (
    <Select
      aria-label="Year"
      size="small"
      value={20}
      onChange={(key) => {
        if (typeof key === "number") {
          state.setFocusedDate(years[key].date);
        }
      }}
      items={years.map((year) => ({
        id: year.id,
        label: year.formatted,
      }))}
    />
  );
}
