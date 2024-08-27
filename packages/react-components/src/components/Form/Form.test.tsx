import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Form from "./Form";

describe("Form", () => {
  render(<Form data-testid="form-element" />);

  const form = screen.getByTestId("form-element");

  it("renders an HTML form component", () => {
    expect(form.tagName).toBe("FORM");
  });
});
