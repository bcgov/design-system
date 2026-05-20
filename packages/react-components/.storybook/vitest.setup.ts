import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview";
import { setProjectAnnotations } from "@storybook/react-vite";
import { afterAll, afterEach, beforeEach, expect, vi } from "vitest";
import * as projectAnnotations from "./preview";

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);

// Fail tests on console warnings
const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

beforeEach(() => {
  expect(warnSpy).not.toHaveBeenCalled();
  warnSpy.mockClear();
});

afterEach(() => {
  expect(warnSpy).not.toHaveBeenCalled();
});
afterAll(() => {
  warnSpy.mockRestore();
});
