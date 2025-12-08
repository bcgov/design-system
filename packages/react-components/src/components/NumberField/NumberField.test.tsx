import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import NumberField from "./NumberField";

describe("renders the component correctly", () => {
  render(<NumberField label="Hello world" />);
  const numberfield = screen.getByText(/hello world/i);

  it("appears in the document", () => {
    expect(numberfield).toBeInTheDocument();
  });

  it("is enabled by default", () => {
    expect(numberfield).toBeEnabled();
  });
});

describe("gets the correct class for each size variant", () => {
  render(<NumberField size="small" label="Small" />);
  render(<NumberField size="medium" label="Medium" />);
  const smallNumberField = screen.getByText(/small/i);
  const mediumNumberField = screen.getByText(/medium/i);
  it("small NumberField has 'bcds-react-aria-NumberField' and 'small' classes", () => {
    expect(smallNumberField).toHaveClass("bcds-react-aria-NumberField small");
  });
  it("medium NumberField has 'bcds-react-aria-NumberField' and 'medium' classes", () => {
    expect(mediumNumberField).toHaveClass("bcds-react-aria-NumberField medium");
  });
});

describe("can be disabled with isDisabled prop", () => {
  render(<NumberField label="Disabled NumberField" isDisabled />);
  const numberfield = screen.getByText(/disabled numberfield/i);

  it("is disabled with prop passed", () => {
    expect(numberfield).toBeDisabled();
  });
});
