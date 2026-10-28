import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Time, parseZonedDateTime } from "@internationalized/date";

import TimeField from "./TimeField";

function getTimeZoneSegment(container: HTMLElement) {
  return container.querySelector('[data-type="timeZoneName"]');
}

describe("TimeField component", () => {
  describe("time zone label", () => {
    test.each(["America/Vancouver", "Canada/Pacific"])(
      "renders PCT for %s",
      (timeZone) => {
        const { container } = render(
          <TimeField
            label="Select time"
            defaultValue={parseZonedDateTime(`2027-01-15T09:30[${timeZone}]`)}
          />
        );

        expect(getTimeZoneSegment(container)).toHaveTextContent(/^PCT$/);
      }
    );

    test("keeps the default label for other time zones", () => {
      const { container } = render(
        <TimeField
          label="Select time"
          defaultValue={parseZonedDateTime("2026-01-15T09:30[America/Toronto]")}
        />
      );

      expect(getTimeZoneSegment(container)).toHaveTextContent(/^EST$/);
    });

    test("renders no time zone segment for unzoned values", () => {
      const { container } = render(
        <TimeField label="Select time" defaultValue={new Time(9, 30)} />
      );

      expect(getTimeZoneSegment(container)).not.toBeInTheDocument();
      expect(screen.queryByText("PCT")).not.toBeInTheDocument();
      expect(container.querySelector('[data-type="minute"]')).toHaveTextContent(
        "30"
      );
    });
  });
});
