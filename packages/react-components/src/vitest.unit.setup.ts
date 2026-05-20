import { afterAll, afterEach, beforeEach, expect, vi } from "vitest";

// Fail tests on console warnings
const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

beforeEach(() => {
  warnSpy.mockClear();
});

afterEach(() => {
  expect(warnSpy).not.toHaveBeenCalled();
});
afterAll(() => {
  warnSpy.mockRestore();
});
