import { beforeEach, describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Button from "../Button";
import Link from "../Link";
import Subheader from "./Subheader";

function CustomChild({ size }: { size?: string }) {
  return <div data-testid="custom-child" data-size={size} />;
}

describe("Subheader", () => {
  let subheader: HTMLElement;
  let button: HTMLElement;
  let link: HTMLElement;
  let separators: HTMLElement[];
  let customChild: HTMLElement;

  beforeEach(() => {
    render(
      <Subheader size="small" data-testid="subheader">
        <Button>Button</Button>
        <Link href="https://example.com">Link</Link>
        <CustomChild />
      </Subheader>
    );

    subheader = screen.getByTestId("subheader");
    button = screen.getByRole("button", { name: /button/i });
    link = screen.getByRole("link", { name: /link/i });
    separators = screen.getAllByRole("separator", { hidden: true });
    customChild = screen.getByTestId("custom-child");
  });

  it("renders the navigation container", () => {
    expect(subheader).toHaveClass("bcds-react-aria-Subheader--Container");
    expect(subheader).toHaveAttribute("data-testid", "subheader");
  });

  it("injects size into supported children only", () => {
    expect(button).toHaveClass("small");
    expect(link).toHaveClass("small");
    expect(customChild).not.toHaveAttribute("data-size");
  });

  it("renders separators between children", () => {
    expect(separators).toHaveLength(2);
  });
});
