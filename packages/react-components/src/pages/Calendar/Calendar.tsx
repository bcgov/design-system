import { Calendar } from "@/components";

import { isWeekend, today, getLocalTimeZone } from "@internationalized/date";
import { useLocale } from "react-aria-components";

export default function CalendarPage() {
  return (
    <>
      <h2>Calendar</h2>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Default</h3>
            <Calendar />
          </div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Multiple months</h3>
            <Calendar visibleDuration={{ months: 3 }} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>
              Constrained range (weekdays only, one month either side of today's
              date)
            </h3>
            <Calendar
              minValue={today(getLocalTimeZone()).subtract({ months: 1 })}
              maxValue={today(getLocalTimeZone()).add({ months: 1 })}
              visibleDuration={{ months: 3 }}
              isDateUnavailable={(date) => isWeekend(date, useLocale().locale)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
