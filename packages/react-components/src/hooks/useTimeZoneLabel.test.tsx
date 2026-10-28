import { ContextType, ReactElement, ReactNode } from "react";
import { beforeAll, describe, expect, test } from "vitest";
import { render, renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";
import { fromAbsolute, type ZonedDateTime } from "@internationalized/date";
import {
  DateFieldStateContext,
  I18nProvider,
  TimeFieldStateContext,
} from "react-aria-components";

import DatePicker from "../components/DatePicker";
import TimeField from "../components/TimeField";
import useTimeZoneLabel from "./useTimeZoneLabel";

type DateFieldState = NonNullable<ContextType<typeof DateFieldStateContext>>;
type TimeFieldState = NonNullable<ContextType<typeof TimeFieldStateContext>>;

const effectiveFrom = new Date("2026-11-01T02:00:00-07:00");

/* The hook only reads dateFormatter.resolvedOptions() and dateValue, so stub just those */
function stubState<T>(timeZone?: string, dateValue = effectiveFrom): T {
  return {
    dateValue,
    dateFormatter: {
      resolvedOptions: () => ({ timeZone }),
    },
  } as unknown as T;
}

function renderWithStates({
  dateFieldTimeZone,
  timeFieldTimeZone,
}: {
  dateFieldTimeZone?: string | null;
  timeFieldTimeZone?: string | null;
}) {
  const dateFieldState =
    dateFieldTimeZone === undefined
      ? null
      : stubState<DateFieldState>(dateFieldTimeZone ?? undefined);
  const timeFieldState =
    timeFieldTimeZone === undefined
      ? null
      : stubState<TimeFieldState>(timeFieldTimeZone ?? undefined);

  const wrapper = ({ children }: { children: ReactNode }) => (
    <DateFieldStateContext.Provider value={dateFieldState}>
      <TimeFieldStateContext.Provider value={timeFieldState}>
        {children}
      </TimeFieldStateContext.Provider>
    </DateFieldStateContext.Provider>
  );

  return renderHook(() => useTimeZoneLabel(), { wrapper }).result.current;
}

const fixtures = [
  {
    name: "historical winter",
    zone: "America/Vancouver",
    utc: "2026-01-15T17:30:00.000Z",
    hour: 9,
    label: "PST",
  },
  {
    name: "historical summer",
    zone: "America/Vancouver",
    utc: "2026-07-15T16:30:00.000Z",
    hour: 9,
    label: "PDT",
  },
  {
    name: "one millisecond before boundary",
    zone: "America/Vancouver",
    utc: "2026-11-01T08:59:59.999Z",
    hour: 1,
    label: "PDT",
  },
  {
    name: "exactly at boundary",
    zone: "America/Vancouver",
    utc: "2026-11-01T09:00:00.000Z",
    hour: 2,
    label: "PCT",
  },
  {
    name: "after boundary",
    zone: "America/Vancouver",
    utc: "2026-11-01T09:30:00.000Z",
    hour: 2,
    label: "PCT",
  },
  {
    name: "future winter",
    zone: "America/Vancouver",
    utc: "2027-01-15T17:30:00.000Z",
    hour: 10,
    label: "PCT",
  },
  {
    name: "future winter (alias)",
    zone: "Canada/Pacific",
    utc: "2027-01-15T17:30:00.000Z",
    hour: 10,
    label: "PCT",
  },
  {
    name: "after boundary (not overridden)",
    zone: "America/Los_Angeles",
    utc: "2026-11-01T09:30:00.000Z",
    hour: 1,
    label: "PST",
  },
] as const;

type FieldProps = { label: string; defaultValue: ZonedDateTime };

/* DatePicker provides DateFieldStateContext and TimeField provides TimeFieldStateContext */
const components: [string, (props: FieldProps) => ReactElement][] = [
  ["DatePicker", (props) => <DatePicker granularity="minute" {...props} />],
  ["TimeField", (props) => <TimeField granularity="minute" {...props} />],
];

describe("useTimeZoneLabel", () => {
  /* The expected hours assume tzdata that knows BC stops falling back in November 2026 */
  beforeAll(() => {
    const hour = new Intl.DateTimeFormat("en", {
      timeZone: "America/Vancouver",
      hour: "2-digit",
      hourCycle: "h23",
    }).format(new Date("2027-01-15T17:30:00Z"));

    if (hour !== "10") {
      throw new Error(
        `Node's ICU tzdata (${process.versions.tz}) predates BC's permanent daylight time rule`
      );
    }
  });

  describe.each(components)("rendered in %s", (_name, renderField) => {
    test.each(fixtures)(
      "$name: $zone → $label",
      ({ zone, utc, hour, label }) => {
        const { container } = render(
          // Pin the locale so TimeField doesn't format with the host's locale
          <I18nProvider locale="en-CA">
            {renderField({
              label: "Pacific time",
              defaultValue: fromAbsolute(Date.parse(utc), zone),
            })}
          </I18nProvider>
        );

        const hourSegment = container.querySelector('[data-type="hour"]');
        const zoneSegment = container.querySelector(
          '[data-type="timeZoneName"]'
        );

        expect(hourSegment, "hour segment").not.toBeNull();
        expect(zoneSegment, "time zone segment").not.toBeNull();
        expect(hourSegment).toHaveTextContent(new RegExp(`^${hour}$`));
        expect(zoneSegment).toHaveTextContent(new RegExp(`^${label}$`));
      }
    );
  });

  describe("returns undefined", () => {
    test("outside a DateInput (no field state)", () => {
      expect(renderHook(() => useTimeZoneLabel()).result.current).toBe(
        undefined
      );
    });

    test("when the formatter has no time zone", () => {
      expect(renderWithStates({ dateFieldTimeZone: null })).toBe(undefined);
      expect(renderWithStates({ timeFieldTimeZone: null })).toBe(undefined);
    });

    test.each([
      ["a misspelled time zone", "America/Vancover"],
      ["a time zone with the wrong case", "america/vancouver"],
      ["an empty time zone", ""],
    ])("for %s", (_, timeZone) => {
      expect(renderWithStates({ dateFieldTimeZone: timeZone })).toBe(undefined);
      expect(renderWithStates({ timeFieldTimeZone: timeZone })).toBe(undefined);
    });
  });

  describe("when both field states are present", () => {
    test("uses DateFieldStateContext over TimeFieldStateContext", () => {
      expect(
        renderWithStates({
          dateFieldTimeZone: "America/Vancouver",
          timeFieldTimeZone: "America/Toronto",
        })
      ).toBe("PCT");
      expect(
        renderWithStates({
          dateFieldTimeZone: "America/Toronto",
          timeFieldTimeZone: "America/Vancouver",
        })
      ).toBe(undefined);
    });
  });
});
