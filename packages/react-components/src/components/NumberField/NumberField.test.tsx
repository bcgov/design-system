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

describe("can be disabled with isDisabled prop", () => {
  const { container: disabledContainer } = render(
    <NumberField label="Disabled" isDisabled />
  );
  const numberfield = disabledContainer.querySelector(
    ".bcds-react-aria-NumberField"
  ) as HTMLElement | null;

  it("is disabled with prop passed", () => {
    expect(numberfield).not.toBeNull();
    expect(numberfield).toBeDisabled();
  });
});
