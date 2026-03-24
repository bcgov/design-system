import {
  RangeCalendar as ReactAriaRangeCalendar,
  CalendarCell as ReactAriaCalendarCell,
  CalendarGrid as ReactAriaCalendarGrid,
  RangeCalendarProps,
  DateValue,
} from "react-aria-components";

import { useDateFormatter } from "react-aria";

import "./RangeCalendar.css";

import Button from "../Button";
import Heading from "../Heading";
import SvgChevronLeftIcon from "../Icons/SvgChevronLeftIcon";
import SvgChevronRightIcon from "../Icons/SvgChevronRightIcon";

export type { DateValue };

export default function RangeCalendar({
  visibleDuration = { months: 1 },
  ...props
}: RangeCalendarProps<DateValue>) {
  const monthFormatter = useDateFormatter({
    month: "long",
    year: "numeric",
  });

  return (
    <ReactAriaRangeCalendar
      className="bcds-react-aria-RangeCalendar"
      visibleDuration={visibleDuration}
      {...props}
    >
      {({ state }) =>
        [...Array(visibleDuration.months).keys()].map((i) => (
          <div key={i} className="bcds-react-aria-RangeCalendar--GridContainer">
            <div className="bcds-react-aria-RangeCalendar--Header">
              <div className="bcds-react-aria-RangeCalendar--HeaderButton">
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
              </div>
              <Heading>
                {monthFormatter.format(
                  state.visibleRange.start
                    .add({ months: i })
                    .toDate(state.timeZone)
                )}
              </Heading>
              <div className="bcds-react-aria-RangeCalendar--HeaderButton">
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
              </div>
            </div>
            <ReactAriaCalendarGrid
              offset={{ months: i }}
              className={`bcds-react-aria-RangeCalendar--Grid`}
              weekdayStyle="short"
            >
              {(date) => (
                <ReactAriaCalendarCell
                  className="bcds-react-aria-RangeCalendar--Cell"
                  date={date}
                />
              )}
            </ReactAriaCalendarGrid>
          </div>
        ))
      }
    </ReactAriaRangeCalendar>
  );
}
