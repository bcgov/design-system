import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import AlertBanner from "./AlertBanner";

describe("AlertBanner", () => {
  it("renders children content", () => {
    render(<AlertBanner>Banner content</AlertBanner>);

    expect(screen.getByText(/banner content/i)).toBeInTheDocument();
  });

  it("applies default classes for variant, size and layout", () => {
    const { container } = render(<AlertBanner>Default banner</AlertBanner>);
    const root = container.firstElementChild;

    expect(root).toHaveClass("bcds-Alert-Banner");
    expect(root).toHaveClass("info");
    expect(root).toHaveClass("medium");
    expect(root).toHaveClass("fixed");
  });

  it("applies provided variant, size and layout classes", () => {
    const { container } = render(
      <AlertBanner variant="warning" size="small" layout="fluid">
        Custom classes
      </AlertBanner>
    );
    const root = container.firstElementChild;

    expect(root).toHaveClass("warning");
    expect(root).toHaveClass("small");
    expect(root).toHaveClass("fluid");
  });

  it("renders close button by default", () => {
    render(<AlertBanner>Closeable banner</AlertBanner>);

    expect(
      screen.getByRole("button", { name: /close this alert/i })
    ).toBeInTheDocument();
  });

  it("does not render a close button when isCloseable is false", () => {
    render(<AlertBanner isCloseable={false}>Not closeable banner</AlertBanner>);

    expect(
      screen.queryByRole("button", { name: /close this alert/i })
    ).not.toBeInTheDocument();
  });

  it("calls onClose when close button is pressed", () => {
    const handleClose = vi.fn();
    render(<AlertBanner onClose={handleClose}>Close callback</AlertBanner>);

    const closeButton = screen.getByRole("button", {
      name: /close this alert/i,
    });
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("sets role to status by default", () => {
    render(<AlertBanner>Status role</AlertBanner>);

    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("accepts a custom role", () => {
    render(<AlertBanner role="alert">Alert role</AlertBanner>);

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("renders an icon by default", () => {
    const { container } = render(<AlertBanner>With icon</AlertBanner>);
    const iconContainer = container.querySelector(".bcds-Alert-Banner--Icon");

    expect(iconContainer).toBeInTheDocument();
    expect(iconContainer?.querySelector("svg")).toBeInTheDocument();
  });

  it("does not render the icon when isIconHidden is true", () => {
    const { container } = render(
      <AlertBanner isIconHidden>Without icon</AlertBanner>
    );
    const iconContainer = container.querySelector(".bcds-Alert-Banner--Icon");

    expect(iconContainer).not.toBeInTheDocument();
  });

  it("renders customIcon when provided", () => {
    const customIcon = <span data-testid="custom-icon">*</span>;
    render(<AlertBanner customIcon={customIcon}>Custom icon</AlertBanner>);

    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
  });
});
