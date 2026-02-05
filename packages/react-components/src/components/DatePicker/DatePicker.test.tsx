import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CalendarDate } from "@internationalized/date";

import DatePicker from "./DatePicker";

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
      />,
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
});
