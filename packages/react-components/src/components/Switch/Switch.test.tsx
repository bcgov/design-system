import { afterEach, describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import Switch from "./Switch";

afterEach(() => {
  cleanup();
});

describe("Switch", () => {
  it("renders an HTML input component", () => {
    render(<Switch>Flip me</Switch>);

    const switchElements = screen.getAllByLabelText(/flip me/i);

    expect(switchElements).toHaveLength(1);
    expect(switchElements[0].tagName).toBe("INPUT");
    expect(switchElements[0]).toHaveAccessibleName(/flip me/i);
  });

  it("onChange handler fires on click", () => {
    const handleChange = vi.fn();
    render(<Switch onChange={handleChange}>Power</Switch>);

    const switchElement = screen.getByLabelText(/power/i);

    fireEvent.click(switchElement);

    expect(handleChange).toHaveBeenCalled();
  });

  it("defaultSelected adds checked attribute", () => {
    render(<Switch defaultSelected>Standby</Switch>);

    const switchElement = screen.getByLabelText(/standby/i);

    expect(switchElement).toHaveAttribute("checked");
  });

  it("description is associated with the switch", () => {
    render(<Switch description="Enables background sync">Auto-sync</Switch>);

    const switchElement = screen.getByLabelText(/auto-sync/i);

    expect(switchElement).toHaveAccessibleDescription(
      "Enables background sync"
    );
  });

  it("error message is not rendered for a valid switch", () => {
    render(<Switch errorMessage="This field is required">Auto-sync</Switch>);

    expect(
      screen.queryByText("This field is required")
    ).not.toBeInTheDocument();
  });

  it("error message is rendered for an invalid switch", () => {
    render(
      <Switch isInvalid errorMessage="This field is required">
        Auto-sync
      </Switch>
    );

    const switchElement = screen.getByLabelText(/auto-sync/i);

    expect(screen.getByText("This field is required")).toBeInTheDocument();
    expect(switchElement).toHaveAccessibleDescription("This field is required");
  });

  it("error message supports the validation callback form and only renders when invalid", () => {
    const errorMessage = (validation: { isInvalid: boolean }) =>
      validation.isInvalid ? "This field is required" : "";

    const { rerender } = render(
      <Switch errorMessage={errorMessage}>Auto-sync</Switch>
    );

    expect(
      screen.queryByText("This field is required")
    ).not.toBeInTheDocument();

    rerender(
      <Switch isInvalid errorMessage={errorMessage}>
        Auto-sync
      </Switch>
    );

    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });
});
