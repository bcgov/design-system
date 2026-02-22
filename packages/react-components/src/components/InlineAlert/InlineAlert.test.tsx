import { afterEach, describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import InlineAlert from "./InlineAlert";

afterEach(() => {
  cleanup();
});

describe("InlineAlert", () => {
  it("renders a div with role='note'", () => {
    render(<InlineAlert variant="info" data-testid="info" />);
    render(<InlineAlert variant="danger" data-testid="danger" />);
    render(<InlineAlert variant="success" data-testid="success" />);
    render(<InlineAlert variant="warning" data-testid="warning" />);

    const alertElements = screen.getAllByRole("note");

    expect(alertElements).toHaveLength(4);
    expect(alertElements[0].tagName).toBe("DIV");
  });

  it("isCloseable prop causes a close button to be rendered", () => {
    const handleClose = vi.fn();
    render(
      <InlineAlert isCloseable onClose={handleClose} data-test-id="closeable" />
    );

    const closeButtons = screen.getAllByRole("button");

    expect(closeButtons[0]).toHaveAccessibleName(/close this alert/i);

    fireEvent.click(closeButtons[0]);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
