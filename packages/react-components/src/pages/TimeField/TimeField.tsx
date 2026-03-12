import { useMemo, useState } from "react";
import {
  Time,
  getLocalTimeZone,
  toCalendarDateTime,
  toZoned,
} from "@internationalized/date";
import { DatePicker, TimeField, Text } from "@/components";
import type { CalendarDate, ZonedDateTime } from "@internationalized/date";

export default function TimeFieldPage() {
  const [date, setDate] = useState<CalendarDate | null>(null);
  const [time, setTime] = useState<Time | null>(null);

  const zonedDateTime: ZonedDateTime | null = useMemo(() => {
    if (!date || !time) {
      return null;
    }

    return toZoned(toCalendarDateTime(date, time), getLocalTimeZone());
  }, [date, time]);

  return (
    <>
      <h2>TimeField</h2>
      <div className="col">
        <div className="row">
          <TimeField label="Default TimeField" description="Description" />
          <TimeField label="With seconds" granularity="second" />
          <TimeField
            label="24hr TimeField, hour only"
            hourCycle={24}
            granularity="hour"
          />
        </div>
        <div className="row">
          <TimeField label="Small" size="small" />
          <TimeField label="With seconds" granularity="second" size="small" />
          <TimeField
            label="24hr TimeField, hour only"
            hourCycle={24}
            granularity="hour"
            size="small"
          />
        </div>
        <div className="row">
          <TimeField label="Disabled" isDisabled />
          <TimeField label="Read-only" value={new Time(11, 45)} isReadOnly />
          <TimeField label="Errored" isInvalid errorMessage={"Error text"} />
        </div>
        <div className="col" style={{ gap: "var(--layout-margin-medium)" }}>
          <div className="row">
            <h3>DateTime example</h3>
          </div>
          <div className="row">
            <div className="col">
              <DatePicker
                label="Date"
                showFormatHelpText={false}
                onChange={(value) => setDate(value as CalendarDate)}
              />
            </div>
            <div className="col">
              <TimeField
                label="Time"
                granularity="minute"
                hourCycle={12}
                onChange={(value) => setTime(value as Time)}
              />
            </div>
          </div>
          <div className="row">
            <Text>
              ZonedDateTime:{" "}
              <b>
                {zonedDateTime
                  ? zonedDateTime.toString()
                  : "Select a date and time to view the computed value"}
              </b>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
