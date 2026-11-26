import { setProjectAnnotations } from "@storybook/react-vite";
import { createElement } from "react";
import type { Preview } from "@storybook/react-vite";
import { expect, vi } from "vitest";
import { page } from "vitest/browser";
import * as projectAnnotations from "./preview";

// Freeze "today" for the whole run so date-dependent stories don't change
// daily. This must happen before any stories file is loaded, because some
// stories compute dates at import time (e.g. default args using `now()`).
vi.useFakeTimers({ toFake: ["Date"], now: new Date(2026, 11, 15, 12) });
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
const overlaySelector = [
  '[role="dialog"]',
  '[role="alertdialog"]',
  '[role="menu"]',
  '[role="listbox"]',
  '[role="tooltip"]',
  // A Modal without a Dialog inside has no ARIA role
  ".bcds-react-aria-Modal",
].join(", ");
const findOpenOverlay = () =>
  [...document.querySelectorAll(overlaySelector)].find((element) =>
    element.checkVisibility()
  );
const visualAnnotations: Preview = {
  parameters: {
    // Accessibility is covered by the `storybook` project
    a11y: { test: "off" },
  },
  // Storybook's `layout: "centered"` styles aren't loaded under Vitest. Apply
  // them here so stories look as they do in Storybook, and overlays have room
  // to open in their intended placement.
  decorators: [
    (Story, { parameters }) =>
      parameters.layout === "centered"
        ? createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
              },
            },
            createElement(Story)
          )
        : createElement(Story),
  ],
  beforeEach() {
    const style = document.createElement("style");
    style.textContent = stabilizeStyles;
    document.head.appendChild(style);
    return () => style.remove();
  },
  // Runs after each story's `play` function, so open overlays are captured.
  // Screenshots document.body (not the canvas) to include portalled content
  // such as dialogs, menus and popovers.
  async afterEach({ id, tags }) {
    if (tags.includes("overlay")) {
      // Never accept a baseline of a closed overlay
      await expect
        .poll(findOpenOverlay, {
          message: `Story "${id}" is tagged "overlay" but no overlay is open`,
        })
        .toBeTruthy();
    } else if (findOpenOverlay()) {
      console.warn(
        `Story "${id}" shows an open overlay but isn't tagged "overlay"`
      );
    }
    await document.fonts.ready;
    await expect
      .element(page.elementLocator(document.body))
      .toMatchScreenshot(id);
  },
};
setProjectAnnotations([projectAnnotations, visualAnnotations]);
