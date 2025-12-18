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
  const { container: smallContainer } = render(
    <NumberField size="small" label="Small" />
  );
  const { container: mediumContainer } = render(
    <NumberField size="medium" label="Medium" />
  );

  const smallNumberField = smallContainer.querySelector(
    ".bcds-react-aria-NumberField"
  ) as HTMLElement | null;
  const mediumNumberField = mediumContainer.querySelector(
    ".bcds-react-aria-NumberField"
  ) as HTMLElement | null;

  it("small NumberField has 'bcds-react-aria-NumberField' and 'small' classes", () => {
    expect(smallNumberField).not.toBeNull();
    expect(smallNumberField).toHaveClass(
      "bcds-react-aria-NumberField",
      "small"
    );
  });

  it("medium NumberField has 'bcds-react-aria-NumberField' and 'medium' classes", () => {
    expect(mediumNumberField).not.toBeNull();
    expect(mediumNumberField).toHaveClass(
      "bcds-react-aria-NumberField",
      "medium"
    );
  });
});

describe("pressing the increment and decrement buttons changes the value correctly", () => {
  render(<NumberField label="Counter" defaultValue={3} step={2} />);
  const input = screen.getByRole("button") as HTMLInputElement;
  const incrementButton = screen.getByLabelText("Increase");
  const decrementButton = screen.getByLabelText("Decrease");

  it("pressing the increment button increases the value by step", () => {
    incrementButton.click();
    expect(input.value).toBe("5");
  });

  it("pressing the decrement button decreases the value by step", () => {
    decrementButton.click();
    expect(input.value).toBe("1");
  });
});

describe("input is disabled when the disabled prop is set to true", () => {
  render(<NumberField label="Disabled numberfield" isDisabled />);
  const input = screen.getByRole("input") as HTMLInputElement;

  it("is disabled", () => {
    expect(input).toBeDisabled();
  });
});
