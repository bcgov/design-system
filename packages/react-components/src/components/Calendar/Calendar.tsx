import {
  Calendar as ReactAriaCalendar,
  CalendarCell as ReactAriaCalendarCell,
  CalendarGrid as ReactAriaCalendarGrid,
  CalendarProps,
  DateValue,
} from "react-aria-components";

import { useDateFormatter } from "react-aria";

import "./Calendar.css";

import Button from "../Button";
import Heading from "../Heading";
import SvgChevronLeftIcon from "../Icons/SvgChevronLeftIcon";
import SvgChevronRightIcon from "../Icons/SvgChevronRightIcon";

export type { DateValue };

export default function Calendar({
  isHeaderHidden = false,
  visibleDuration = { months: 1 },
  ...props
}: CalendarProps<DateValue>) {
  const monthFormatter = useDateFormatter({
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <ReactAriaCalendar
      className="bcds-react-aria-Calendar"
      visibleDuration={visibleDuration}
      {...props}
    >
      {({ state }) =>
        [...Array(visibleDuration.months).keys()].map((i) => (
          <div key={i} className="bcds-react-aria-Calendar--GridContainer">
            {!isHeaderHidden && (
              <header className="bcds-react-aria-Calendar--Header">
                {i === 0 && (
                  <Button
                    slot="previous"
                    size="xsmall"
                    variant="tertiary"
                    isIconButton
                  >
                    <SvgChevronLeftIcon />
                  </Button>
                )}
                <Heading>
                  {monthFormatter.format(
                    state.visibleRange.start
                      .add({ months: i })
                      .toDate(state.timeZone),
                  )}
                </Heading>
                {i === (visibleDuration.months ?? 1) - 1 && (
                  <Button
                    slot="next"
                    size="xsmall"
                    variant="tertiary"
                    isIconButton
                  >
                    <SvgChevronRightIcon />
                  </Button>
                )}
              </header>
            )}
            <ReactAriaCalendarGrid
              offset={{ months: i }}
              className={`bcds-react-aria-Calendar--Grid`}
              weekdayStyle="short"
            >
              {(date) => (
                <ReactAriaCalendarCell
                  className="bcds-react-aria-Calendar--Cell"
                  date={date}
                />
              )}
            </ReactAriaCalendarGrid>
          </div>
        ))
      }
    </ReactAriaCalendar>
  );
}
