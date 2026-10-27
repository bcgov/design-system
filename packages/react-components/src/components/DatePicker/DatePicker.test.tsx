import { describe, expect, test, vi } from "vitest";
import { act, render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  CalendarDate,
  CalendarDateTime,
  parseZonedDateTime,
} from "@internationalized/date";

import DatePicker from "./DatePicker";

function getTimeZoneSegment(container: HTMLElement) {
  return container.querySelector('[data-type="timeZoneName"]');
}

describe("DatePicker component", () => {
  test("renders DatePicker with correct label", () => {
    render(<DatePicker label="Select date" />);
    const datePickerLabel = screen.getByText(/select date/i);
    expect(datePickerLabel).toBeInTheDocument();
  });

  test("shows format help text when showFormatHelpText is true", () => {
    render(<DatePicker label="Select date" showFormatHelpText />);
    const formatHelpText = screen.getByText(/format:/i);
    expect(formatHelpText).toBeInTheDocument();
  });

  test("button not shown when isCalendarDisabled is true", () => {
    render(<DatePicker label="Select date" isCalendarDisabled />);
    const calendarButton = screen.queryByRole("button");
    expect(calendarButton).not.toBeInTheDocument();
  });

  test("calendar popover opens when button is pressed", () => {
    render(<DatePicker label="Select date" />);
    const calendarButton = screen.getByRole("button");
    fireEvent.click(calendarButton);
    const calendarPopup = screen.getByRole("dialog");
    expect(calendarPopup).toBeInTheDocument();
  });

  test("sets date value when a day is selected", () => {
    const handleChange = vi.fn();
    render(
      <DatePicker
        label="Select date"
        defaultValue={new CalendarDate(2026, 2, 5)}
        onChange={handleChange}
      />
    );

    const calendarButton = screen.getByRole("button");
    fireEvent.click(calendarButton);

    const calendarPopup = screen.getByRole("dialog");
    const dayButton = within(calendarPopup)
      .getAllByRole("button")
      .find((button) => button.textContent?.trim() === "15");

    expect(dayButton).toBeDefined();
    if (!dayButton) {
      throw new Error("Expected to find day button 15");
    }

    fireEvent.click(dayButton);
    expect(handleChange).toHaveBeenCalled();
    expect(handleChange.mock.calls[0][0].toString()).toBe("2026-02-15");
  });

  describe("isRequired", () => {
    test("shows required marker and sets data-required when true", () => {
      const { container } = render(
        <DatePicker label="Select date" isRequired />
      );

      expect(screen.getByText("(required)")).toBeInTheDocument();
      expect(
        container.querySelector(".bcds-react-aria-DatePicker")
      ).toHaveAttribute("data-required");
    });

    test.each([
      ["false", false],
      ["omitted", undefined],
    ])("omits required marker and data-required when %s", (_, isRequired) => {
      const { container } = render(
        <DatePicker label="Select date" isRequired={isRequired} />
      );

      expect(screen.queryByText("(required)")).not.toBeInTheDocument();
      expect(
        container.querySelector(".bcds-react-aria-DatePicker")
      ).not.toHaveAttribute("data-required");
    });

    test("fails required validation when empty", () => {
      const { container } = render(
        <form>
          <DatePicker
            label="Select date"
            isRequired
            errorMessage="Enter a date"
          />
        </form>
      );
      const form = container.querySelector("form") as HTMLFormElement;

      let isValid = true;
      act(() => {
        isValid = form.checkValidity();
      });

      expect(isValid).toBe(false);
      expect(
        container.querySelector(".bcds-react-aria-DatePicker")
      ).toHaveAttribute("data-invalid");
      expect(screen.getByText("Enter a date")).toBeInTheDocument();
    });
  });

  describe("time zone label", () => {
    test.each(["America/Vancouver", "Canada/Pacific"])(
      "renders PCT for %s",
      (timeZone) => {
        const { container } = render(
          <DatePicker
            label="Select date"
            defaultValue={parseZonedDateTime(`2027-01-15T09:30[${timeZone}]`)}
          />
        );

        expect(getTimeZoneSegment(container)).toHaveTextContent(/^PCT$/);
      }
    );

    test("keeps the default label for other time zones", () => {
      const { container } = render(
        <DatePicker
          label="Select date"
          defaultValue={parseZonedDateTime("2026-01-15T09:30[America/Toronto]")}
        />
      );

      expect(getTimeZoneSegment(container)).toHaveTextContent(/^EST$/);
    });

    test("renders no time zone segment for unzoned values", () => {
      const { container } = render(
        <DatePicker
          label="Select date"
          defaultValue={new CalendarDateTime(2026, 1, 15, 9, 30)}
        />
      );

      expect(getTimeZoneSegment(container)).not.toBeInTheDocument();
      expect(screen.queryByText("PCT")).not.toBeInTheDocument();
      expect(container.querySelector('[data-type="minute"]')).toHaveTextContent(
        "30"
      );
    });
  });
});
