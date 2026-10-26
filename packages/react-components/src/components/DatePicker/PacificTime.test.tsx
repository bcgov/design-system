// This file describes tests for manually applying "PCT" to datetime instances
// after November 1, 2026.

import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { fromAbsolute } from "@internationalized/date";
import type { ElementType } from "react";

import DatePicker from "./DatePicker";
import TimeField from "../TimeField";

const zone = "America/Vancouver";

const fixtures = [
  {
    name: "historical winter",
    utc: "2026-01-15T17:30:00.000Z",
    hour: "09",
    label: "PST",
  },
  {
    name: "historical summer",
    utc: "2026-07-15T16:30:00.000Z",
    hour: "09",
    label: "PDT",
  },
  {
    name: "after no-fallback boundary",
    utc: "2026-11-01T09:30:00Z",
    hour: "02",
    label: "PCT",
  },
  {
    name: "future winter",
    utc: "2027-01-15T17:30:00Z",
    hour: "10",
    label: "PCT",
  },
] as const;

describe.each([
  ["DatePicker", DatePicker],
  ["TimeField", TimeField],
] as const)("%s Vancouver timestamps", (_name, Component) => {
  test.each(fixtures)("$name", ({ utc, hour, label }) => {
    const value = fromAbsolute(Date.parse(utc), zone);
    const ComponentElement = Component as ElementType;
    const { container } = render(
      <ComponentElement
        label="Vancouver time"
        granularity="minute"
        defaultValue={value}
      />
    );

    // Check the conversion separately from the label substitution.
    expect(value.hour).toBe(Number(hour));
    expect(value.toAbsoluteString()).toBe(utc);

    const hourSegment = container.querySelector('[data-type="hour"]');
    const zoneSegment = container.querySelector('[data-type="timeZoneName"]');

    // Use hourCycle={24} on the component if supported by both components
    // in the installed `react-aria-components` version - otherwise assert the
    // rendered hour according to the configured locale/hour cycle.
    expect(hourSegment).toHaveTextContent(new RegExp(`^0?${Number(hour)}$`));
    expect(zoneSegment).toHaveTextContent(new RegExp(`^${label}$`));
  });
});
