import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom"; // for matchers like toHaveAccessibleDescription
import { afterEach } from "vitest";

import TextField from "./TextField";

afterEach(cleanup);

describe("TextField component", () => {
  test("renders label and description", () => {
    render(<TextField label="Your name" description="First and last name" />);
    const input: HTMLInputElement = screen.getByLabelText(/your name/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAccessibleDescription("First and last name");
  });

  test("required label renders as '(required)'", () => {
    render(<TextField label="Your name" isRequired />);
    expect(screen.getByText("(required)")).toBeInTheDocument();
  });

  test("onChange fires as the user types", () => {
    const onChange = vi.fn();
    render(<TextField label="Your name" onChange={onChange} />);
    const input: HTMLInputElement = screen.getByLabelText(/your name/i);
    fireEvent.change(input, { target: { value: "Trev" } });
    expect(onChange).toHaveBeenCalledWith("Trev");
  });

  test("size prop applies the small modifier class to the container", () => {
    const { container } = render(<TextField label="Your name" size="small" />);
    expect(
      container.querySelector(".bcds-react-aria-TextField--container.small")
    ).toBeInTheDocument();
  });

  test("default size applies the medium modifier class to the container", () => {
    const { container } = render(<TextField label="Your name" />);
    expect(
      container.querySelector(".bcds-react-aria-TextField--container.medium")
    ).toBeInTheDocument();
  });

  test("iconLeft and iconRight are rendered inside the container", () => {
    render(
      <TextField
        label="Search"
        iconLeft={<svg data-testid="icon-left" />}
        iconRight={<svg data-testid="icon-right" />}
      />
    );
    expect(screen.getByTestId("icon-left")).toBeInTheDocument();
    expect(screen.getByTestId("icon-right")).toBeInTheDocument();
  });

  test("type prop is respected (password obscures input)", () => {
    render(<TextField label="Your password" type="password" />);
    const input: HTMLInputElement = screen.getByLabelText(/your password/i);
    expect(input).toHaveAttribute("type", "password");
  });

  test("maxLength is a soft limit: input is not truncated when the limit is exceeded", () => {
    render(<TextField label="Your name" maxLength={5} />);
    const input: HTMLInputElement = screen.getByLabelText(/your name/i);
    fireEvent.change(input, { target: { value: "too long" } });
    expect(input.value).toBe("too long");
    // no native maxlength enforcement on the DOM element
    expect(input).not.toHaveAttribute("maxLength");
  });

  test("exceeding maxLength invalidates the field and shows the error message on blur", () => {
    render(<TextField label="Your name" maxLength={5} />);
    const input: HTMLInputElement = screen.getByLabelText(/your name/i);
    fireEvent.change(input, { target: { value: "too long" } });
    fireEvent.blur(input);
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(
      screen.getByText("Must be 5 characters or fewer.")
    ).toBeInTheDocument();
  });

  test("custom errorMessage overrides the default maxLength error message", () => {
    render(
      <TextField
        label="Your name"
        maxLength={5}
        value="too long"
        errorMessage="Please shorten your name"
        isInvalid
      />
    );
    expect(screen.getByText("Please shorten your name")).toBeInTheDocument();
  });

  test("isInvalid renders the error icon in the container and shows errorMessage", () => {
    render(
      <TextField label="Your website" isInvalid errorMessage="Enter a URL" />
    );
    const input: HTMLInputElement = screen.getByLabelText(/your website/i);
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAccessibleDescription("Enter a URL");
    expect(input.closest(".bcds-react-aria-TextField")).toHaveAttribute(
      "data-invalid"
    );
  });

  test("error message is not rendered when the field is valid", () => {
    render(<TextField label="Your website" errorMessage="Enter a URL" />);
    expect(screen.queryByText("Enter a URL")).not.toBeInTheDocument();
  });

  test("disabled input is not editable", () => {
    render(<TextField label="Your name" isDisabled />);
    const input: HTMLInputElement = screen.getByLabelText(/your name/i);
    expect(input).toBeDisabled();
    expect(input.closest(".bcds-react-aria-TextField")).toHaveAttribute(
      "data-disabled"
    );
  });

  test("readonly input is focusable but not editable", () => {
    render(<TextField label="Your name" isReadOnly value="fixed" />);
    const input: HTMLInputElement = screen.getByLabelText(/your name/i);
    expect(input).toHaveAttribute("readonly");
    expect(input.closest(".bcds-react-aria-TextField")).toHaveAttribute(
      "data-readonly"
    );
  });
});
