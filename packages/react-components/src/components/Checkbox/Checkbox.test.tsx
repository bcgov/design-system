import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // for matchers like toBeChecked

import Checkbox from "./Checkbox";

describe("Checkbox component", () => {
  test("Checkbox renders unchecked, user clicks it, checkbox is checked", () => {
    render(<Checkbox>I agree</Checkbox>);
    const checkbox = screen.getByLabelText(/i agree/i);
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test("Checkbox renders checked, user clicks it, checkbox is unchecked", () => {
    render(<Checkbox defaultSelected={true}>Email me my results</Checkbox>);
    const checkbox = screen.getByLabelText(/email me my results/i);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  test("description is associated with the checkbox", () => {
    render(
      <Checkbox description="We'll never share your email">
        Email me my results
      </Checkbox>
    );
    const checkbox = screen.getByLabelText(/email me my results/i);
    expect(checkbox).toHaveAccessibleDescription(
      "We'll never share your email"
    );
  });

  test("error message is not rendered for a valid standalone checkbox", () => {
    render(
      <Checkbox errorMessage="You must agree to continue">I agree</Checkbox>
    );
    expect(
      screen.queryByText("You must agree to continue")
    ).not.toBeInTheDocument();
  });

  test("error message is rendered for an invalid standalone checkbox", () => {
    render(
      <Checkbox isInvalid errorMessage="You must agree to continue">
        I agree
      </Checkbox>
    );
    const checkbox = screen.getByLabelText(/i agree/i);
    expect(screen.getByText("You must agree to continue")).toBeInTheDocument();
    expect(checkbox).toHaveAccessibleDescription("You must agree to continue");
  });

  test("error message supports the validation callback form and only renders when invalid", () => {
    const errorMessage = (validation: { isInvalid: boolean }) =>
      validation.isInvalid ? "This field is required" : "";

    const { rerender } = render(
      <Checkbox errorMessage={errorMessage}>I agree</Checkbox>
    );
    expect(
      screen.queryByText("This field is required")
    ).not.toBeInTheDocument();

    rerender(
      <Checkbox isInvalid errorMessage={errorMessage}>
        I agree
      </Checkbox>
    );
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });
});
