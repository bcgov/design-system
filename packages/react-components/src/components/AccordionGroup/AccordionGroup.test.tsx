import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Accordion from "../Accordion";
import AccordionGroup from "./AccordionGroup";

describe("Render accordion group with two accordions", () => {
  it("renders an accordion group with two accordions collapsed by default", () => {
    const { container } = render(
      <AccordionGroup
        id="group"
        data-testid="accordion-group"
        title="Accordion group"
      >
        <Accordion id="1" data-testid="accordion-1" label="Accordion 1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Accordion>
        <Accordion id="2" data-testid="accordion-2" label="Accordion 2">
          Aenean dapibus lectus massa, ac finibus eros venenatis vel.
        </Accordion>
      </AccordionGroup>
    );
    const root = screen.getByTestId("accordion-group");
    const button1 = screen.getByRole("button", { name: /accordion 1/i });
    const button2 = screen.getByRole("button", { name: /accordion 2/i });
    const panel1 = container.querySelector(
      '[data-testid="accordion-1"] .bcds-react-aria-Disclosure--Panel'
    );
    const panel2 = container.querySelector(
      '[data-testid="accordion-2"] .bcds-react-aria-Disclosure--Panel'
    );

    expect(root).toBeInTheDocument();
    expect(button1).toBeInTheDocument();
    expect(button1).toHaveAttribute("aria-expanded", "false");
    expect(button2).toBeInTheDocument();
    expect(button2).toHaveAttribute("aria-expanded", "false");
    expect(panel1).toBeInTheDocument();
    expect(panel1).toHaveAttribute("aria-hidden", "true");
    expect(panel2).toBeInTheDocument();
    expect(panel2).toHaveAttribute("aria-hidden", "true");
    expect(
      screen.queryByText(
        /lorem ipsum dolor sit amet, consectetur adipiscing elit./i
      )
    ).not.toBeVisible();
  });
});

describe("Render group with one accordion open by default", () => {
  it("accordion 2 is open by default on render", () => {
    const { container } = render(
      <AccordionGroup
        title="Accordion group"
        id="group"
        data-testid="accordion-group"
        defaultExpandedKeys={["2"]}
      >
        <Accordion id="1" label="Accordion 1" data-testid="accordion-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Accordion>
        <Accordion id="2" label="Accordion 2" data-testid="accordion-2">
          Aenean dapibus lectus massa, ac finibus eros venenatis vel.
        </Accordion>
      </AccordionGroup>
    );
    const root = screen.getByTestId("accordion-group");
    const button1 = screen.getByRole("button", { name: /accordion 1/i });
    const button2 = screen.getByRole("button", { name: /accordion 2/i });
    const panel1 = container.querySelector(
      '[data-testid="accordion-1"] .bcds-react-aria-Disclosure--Panel'
    );
    const panel2 = container.querySelector(
      '[data-testid="accordion-2"] .bcds-react-aria-Disclosure--Panel'
    );
    expect(root).toBeInTheDocument();
    expect(button1).toBeInTheDocument();
    expect(button1).toHaveAttribute("aria-expanded", "false");
    expect(button2).toBeInTheDocument();
    expect(button2).toHaveAttribute("aria-expanded", "true");
    expect(panel1).toBeInTheDocument();
    expect(panel1).toHaveAttribute("aria-hidden", "true");
    expect(panel2).toBeInTheDocument();
    expect(panel2).toHaveAttribute("aria-hidden", "false");
  });
});

describe("Disable all accordions when group is disabled", () => {
  it("accordions are all disabled when isDisabled prop is present on parent group", () => {
    render(
      <AccordionGroup
        id="disabled-group"
        data-testid="disabled-group"
        title="Disabled accordion group"
        isDisabled
      >
        <Accordion id="1" data-testid="accordion-1" label="Accordion 1" />
        <Accordion id="2" data-testid="accordion-2" label="Accordion 2" />
      </AccordionGroup>
    );
    const button1 = screen.getByRole("button", { name: /accordion 1/i });
    const button2 = screen.getByRole("button", { name: /accordion 2/i });
    expect(button1).toHaveAttribute("data-disabled", "true");
    expect(button2).toHaveAttribute("data-disabled", "true");
  });
});
