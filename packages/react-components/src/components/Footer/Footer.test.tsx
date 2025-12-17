import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer", () => {
  render(<Footer />);

  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role
  const contentInfoElements = screen.getAllByRole("contentinfo");

  it("renders an HTML footer component", () => {
    expect(contentInfoElements).toHaveLength(1);
    expect(contentInfoElements[0].tagName).toBe("FOOTER");
  });
});
