import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import Accordion from "./Accordion";

describe("Render accordion component", () => {
  it("renders the accordion and is collapsed by default", () => {
    const { container } = render(
      <Accordion id="1" data-testid="accordion" label="Accordion 1">
        Lorem ipsum dolor sit amet
      </Accordion>
    );

    const root = screen.getByTestId("accordion");
    const button = screen.getByRole("button", { name: /accordion 1/i });
    const panel = container.querySelector(".bcds-react-aria-Disclosure--Panel");
    expect(root).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(panel).toBeInTheDocument();
    expect(panel).toHaveAttribute("aria-hidden", "true");
    expect(screen.queryByText(/lorem ipsum dolor sit amet/i)).not.toBeVisible();
  });

  it("toggles expanded state when the trigger is clicked", () => {
    render(
      <Accordion id="1" data-testid="accordion" label="Accordion 1">
        Lorem ipsum dolor sit amet
      </Accordion>
    );

    const button = screen.getByRole("button", { name: /accordion 1/i });

    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/lorem ipsum dolor sit amet/i)).toBeVisible();

    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});

describe("Render accordion component expanded by default", () => {
  it("renders the accordion expanded when defaultExpanded is true", () => {
    render(
      <Accordion
        id="1"
        data-testid="expanded-accordion"
        label="Expanded Accordion"
        defaultExpanded
      >
        Lorem ipsum dolor sit amet
      </Accordion>
    );

    const button = screen.getByRole("button", { name: /expanded accordion/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/lorem ipsum dolor sit amet/i)).toBeVisible();
  });
});

describe("Render disabled accordion component", () => {
  it("accordion is disabled when isDisabled prop is true", () => {
    render(
      <Accordion
        id="disabled"
        data-testid="disabled-accordion"
        label="Disabled accordion"
        isDisabled
      />
    );
    const button = screen.getByRole("button", { name: /disabled accordion/i });
    expect(button).toHaveAttribute("data-disabled", "true");
  });
});
