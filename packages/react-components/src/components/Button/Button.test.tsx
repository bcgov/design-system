import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import Button from "./Button";

describe("renders the component correctly", () => {
  render(<Button>Hello world</Button>);
  const button = screen.getByText(/hello world/i);

  it("appears in the document", () => {
    expect(button).toBeInTheDocument();
  });

  it("is enabled by default", () => {
    expect(button).toBeEnabled();
  });
});

describe("handles a click event with onPress prop", () => {
  const handleClick = jest.fn();
  render(<Button onPress={handleClick}>Press me</Button>);
  fireEvent.click(screen.getByText(/press me/i));

  it("has been clicked", () => {
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe("can be disabled with isDisabled prop", () => {
  render(<Button isDisabled>Disabled button</Button>);
  const button = screen.getByText(/disabled button/i);

  it("is disabled with prop passed", () => {
    expect(button).toBeDisabled();
  });
});
