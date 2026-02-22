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
});
