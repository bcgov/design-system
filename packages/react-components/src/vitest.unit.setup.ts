import "@testing-library/jest-dom/vitest";
import { afterAll, afterEach, expect, vi } from "vitest";

// Fail tests on console warnings
const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

afterEach(() => {
  expect(warnSpy).not.toHaveBeenCalled();
});
afterAll(() => {
  warnSpy.mockRestore();
});
