import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Button from "../Button";
import Link from "../Link";
import Navbar from "./Navbar";

function CustomChild({ size }: { size?: string }) {
  return <div data-testid="custom-child" data-size={size} />;
}

describe("Navbar", () => {
  render(
    <Navbar size="small" data-testid="navbar">
      <Button>Button</Button>
      <Link href="https://example.com">Link</Link>
      <CustomChild />
    </Navbar>
  );

  const navbar = screen.getByTestId("navbar");
  const button = screen.getByRole("button", { name: /button/i });
  const link = screen.getByRole("link", { name: /link/i });
  const separators = screen.getAllByRole("separator");
  const customChild = screen.getByTestId("custom-child");

  it("renders the navigation container", () => {
    expect(navbar).toHaveClass("bcds-react-aria-Navbar--Container small");
    expect(navbar).toHaveAttribute("data-testid", "navbar");
  });

  it("injects size into supported children only", () => {
    expect(button).toHaveClass("bcds-react-aria-Button small primary");
    expect(link).toHaveClass("bcds-react-aria-Link small");
    expect(customChild).not.toHaveAttribute("data-size");
  });

  it("renders separators between children", () => {
    expect(separators).toHaveLength(2);
  });
});
