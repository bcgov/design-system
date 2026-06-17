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
  let separators: HTMLElement[];

  beforeEach(() => {
    render(
      <Subheader size="small" data-testid="subheader">
        <Button>Button</Button>
        <Link href="https://example.com">Link</Link>
        <CustomChild />
      </Subheader>
    );

    subheader = screen.getByTestId("subheader");
    separators = screen.getAllByRole("separator", { hidden: true });
  });

  it("renders the navigation container", () => {
    expect(subheader).toHaveClass("bcds-Subheader--Container");
    expect(subheader).toHaveAttribute("data-testid", "subheader");
  });

  it("renders separators between children", () => {
    expect(separators).toHaveLength(2);
  });
});
