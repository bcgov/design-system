import {
  Calendar as ReactAriaCalendar,
  CalendarCell as ReactAriaCalendarCell,
  CalendarGrid as ReactAriaCalendarGrid,
  CalendarProps,
  DateValue,
} from "react-aria-components";

import "./Calendar.css";

import Button from "../Button";
import Heading from "../Heading";
import SvgChevronLeftIcon from "../Icons/SvgChevronLeftIcon";
import SvgChevronRightIcon from "../Icons/SvgChevronRightIcon";

export default function Calendar(props: CalendarProps<DateValue>) {
  return (
    <ReactAriaCalendar className="bcds-react-aria-Calendar" {...props}>
      <header className="bcds-react-aria-Calendar--Header">
        <Button slot="previous" size="xsmall" variant="tertiary" isIconButton>
          <SvgChevronLeftIcon />
        </Button>
        <Heading />
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
