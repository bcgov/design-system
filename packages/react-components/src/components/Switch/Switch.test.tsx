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
    const handleChange = jest.fn();
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
});
