import { setProjectAnnotations } from "@storybook/react-vite";
import type { Preview } from "@storybook/react-vite";
import { expect, vi } from "vitest";
import { page } from "vitest/browser";
import * as projectAnnotations from "./preview";

// Freeze "today" for the whole run so date-dependent stories don't change
// daily. This must happen before any stories file is loaded, because some
// stories compute dates at import time (e.g. default args using `now()`).
vi.useFakeTimers({ toFake: ["Date"], now: new Date(2025, 0, 15, 12) });

// Makes screenshots deterministic: no animations, transitions or blinking carets.
const stabilizeStyles = `
  *, *::before, *::after {
    animation-duration: 0s !important;
    animation-delay: 0s !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
    caret-color: transparent !important;
  }
`;

const visualAnnotations: Preview = {
  parameters: {
    // Accessibility is covered by the `storybook` project
    a11y: { test: "off" },
  },
  beforeEach() {
    const style = document.createElement("style");
    style.textContent = stabilizeStyles;
    document.head.appendChild(style);
    return () => style.remove();
  },
  // Runs after each story's `play` function, so open overlays are captured.
  // Screenshots document.body (not the canvas) to include portalled content
  // such as dialogs, menus and popovers.
  async afterEach({ id }) {
    await document.fonts.ready;
    await expect
      .element(page.elementLocator(document.body))
      .toMatchScreenshot(id);
  },
};

setProjectAnnotations([projectAnnotations, visualAnnotations]);
