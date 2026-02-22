import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {
  render(<Header />);

  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role
  const bannerElements = screen.getAllByRole("banner");

  it("renders an HTML header component", () => {
    expect(bannerElements).toHaveLength(1);
    expect(bannerElements[0].tagName).toBe("HEADER");
  });
});
