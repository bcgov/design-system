import { ContextType, ReactNode } from "react";
import { describe, expect, test } from "vitest";
import { renderHook } from "@testing-library/react";
import {
  DateFieldStateContext,
  TimeFieldStateContext,
} from "react-aria-components";

import useTimeZoneLabel from "./useTimeZoneLabel";

type DateFieldState = NonNullable<ContextType<typeof DateFieldStateContext>>;
type TimeFieldState = NonNullable<ContextType<typeof TimeFieldStateContext>>;

/* The hook only reads dateFormatter.resolvedOptions(), so stub just that */
function stubState<T>(timeZone?: string): T {
  return {
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

describe("useTimeZoneLabel", () => {
  describe("returns PCT for overridden time zones", () => {
    test.each(["America/Vancouver", "Canada/Pacific"])(
      "%s from DateFieldStateContext",
      (timeZone) => {
        expect(renderWithStates({ dateFieldTimeZone: timeZone })).toBe("PCT");
      }
    );

    test.each(["America/Vancouver", "Canada/Pacific"])(
      "%s from TimeFieldStateContext",
      (timeZone) => {
        expect(renderWithStates({ timeFieldTimeZone: timeZone })).toBe("PCT");
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
      ["a time zone with no override", "America/Toronto"],
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
