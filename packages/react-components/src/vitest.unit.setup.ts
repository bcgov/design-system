import { afterEach, beforeEach, expect, vi } from "vitest";

let warnSpy: ReturnType<typeof vi.spyOn>;

beforeEach(() => {
  warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {
    // Silence warning output during tests; assertions below enforce failure.
  });
});

afterEach(() => {
  try {
    expect(warnSpy).not.toHaveBeenCalled();
  } finally {
    warnSpy.mockRestore();
  }
});
