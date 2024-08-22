import { afterEach, describe, it, expect, vitest } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import Button from "./Button";

describe("Button component", () => {
  afterEach(() => cleanup());

  it("renders the component correctly", () => {
    render(<Button>Hello world</Button>);
    const button = screen.getByText(/hello world/i);
    expect(button).toBeInTheDocument();
  });

  it("is enabled by default", () => {
    render(<Button>Hello world</Button>);
    const button = screen.getByText(/hello world/i);
    expect(button).toBeEnabled();
  });

  it("handles a click event with onPress prop", () => {
    const handleClick = vitest.fn();
    render(<Button onPress={handleClick}>Press me</Button>);
    fireEvent.click(screen.getByText(/press me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("can be disabled with isDisabled prop", () => {
    render(<Button isDisabled>Disabled button</Button>);
    const button = screen.getByText(/disabled button/i);
    expect(button).toBeDisabled();
  });
});
