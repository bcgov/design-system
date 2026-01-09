import {
  Calendar as ReactAriaCalendar,
  CalendarCell as ReactAriaCalendarCell,
  CalendarGrid as ReactAriaCalendarGrid,
  CalendarProps as ReactAriaCalendarProps,
  DateValue,
} from "react-aria-components";

import "./Calendar.css";

import Button from "../Button";
import Heading from "../Heading";
import { MonthDropdown } from "./MonthDropdown";
import { YearDropdown } from "./YearDropdown";
import SvgChevronLeftIcon from "../Icons/SvgChevronLeftIcon";
import SvgChevronRightIcon from "../Icons/SvgChevronRightIcon";

export interface CalendarProps<T extends DateValue>
  extends ReactAriaCalendarProps<T> {
  /**
   * Whether to show the month and year dropdowns
   * for quicker navigation.
   */
  showDropdowns?: boolean;
}

export default function Calendar({
  showDropdowns = false,
  ...props
}: CalendarProps<DateValue>) {
  return (
    <ReactAriaCalendar className="bcds-react-aria-Calendar" {...props}>
      <header className="bcds-react-aria-Calendar--Header">
        <Button slot="previous" size="xsmall" variant="tertiary" isIconButton>
          <SvgChevronLeftIcon />
        </Button>
        {showDropdowns ? (
          <div className="bcds-react-aria-Calendar--Selectors">
            <MonthDropdown />
            <YearDropdown />
          </div>
        ) : (
          <Heading />
        )}
        <Button slot="next" size="xsmall" variant="tertiary" isIconButton>
          <SvgChevronRightIcon />
        </Button>
      </header>
      <ReactAriaCalendarGrid
        className="bcds-react-aria-Calendar--Grid"
        weekdayStyle="short"
      >
        {(date) => (
          <ReactAriaCalendarCell
            className="bcds-react-aria-Calendar--Cell"
            date={date}
          />
        )}
      </ReactAriaCalendarGrid>
    </ReactAriaCalendar>
  );
}
