import { describe, expect, it, vi } from "vitest";
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
  const handleClick = vi.fn();
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

describe("gets the correct class for each variant", () => {
  render(<Button variant="primary">Primary</Button>);
  render(<Button variant="secondary">Secondary</Button>);
  render(<Button variant="tertiary">Tertiary</Button>);
  render(<Button variant="link">Link</Button>);
  const primaryButton = screen.getByText(/primary/i);
  const secondaryButton = screen.getByText(/secondary/i);
  const tertiaryButton = screen.getByText(/tertiary/i);
  const linkButton = screen.getByText(/link/i);

  it("primary button has 'bcds-react-aria-Button' and 'primary' classes", () => {
    expect(primaryButton).toHaveClass("bcds-react-aria-Button primary");
  });
  it("secondary button has 'bcds-react-aria-Button' and 'secondary' classes", () => {
    expect(secondaryButton).toHaveClass("bcds-react-aria-Button secondary");
  });
  it("tertiary button has 'bcds-react-aria-Button' and 'tertiary' classes", () => {
    expect(tertiaryButton).toHaveClass("bcds-react-aria-Button tertiary");
  });
  it("link button has 'bcds-react-aria-Button' and  'link' classes", () => {
    expect(linkButton).toHaveClass("bcds-react-aria-Button link");
  });
});
