import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ButtonGroup from "./ButtonGroup";

describe("ButtonGroup", () => {
  render(<ButtonGroup data-testid="button-group" />);
  render(
    <ButtonGroup data-testid="orientation-vertical" orientation="vertical" />
  );
  render(<ButtonGroup data-testid="alignment-end" alignment="end" />);
  render(<ButtonGroup data-testid="alignment-center" alignment="center" />);
  const defaultButtonGroup = screen.getByTestId("button-group");
  const verticalButtonGroup = screen.getByTestId("orientation-vertical");
  const endButtonGroup = screen.getByTestId("alignment-end");
  const centerButtonGroup = screen.getByTestId("alignment-center");

  it("has default classes", () => {
    expect(defaultButtonGroup).toHaveClass("bcds-ButtonGroup horizontal start");
  });
  it("has the role='group' attribute", () => {
    expect(defaultButtonGroup).toHaveAttribute("role", "group");
  });
  it("passing orientation adds the correct class", () => {
    expect(verticalButtonGroup).toHaveClass("bcds-ButtonGroup vertical start");
  });
  it("passing 'end' alignment adds the correct class", () => {
    expect(endButtonGroup).toHaveClass("bcds-ButtonGroup horizontal end");
  });
  it("passing 'center' alignment adds the correct class", () => {
    expect(centerButtonGroup).toHaveClass("bcds-ButtonGroup horizontal center");
  });
});
