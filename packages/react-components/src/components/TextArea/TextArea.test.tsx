import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom"; // for matchers like toHaveAccessibleDescription
import { afterEach } from "vitest";

import TextArea from "./TextArea";

afterEach(cleanup);

describe("TextArea component", () => {
  test("renders label and description", () => {
    render(
      <TextArea label="Your feedback" description="Tell us what you think" />
    );
    const textarea: HTMLTextAreaElement =
      screen.getByLabelText(/your feedback/i);
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAccessibleDescription("Tell us what you think");
  });

  test("required label renders as '(required)'", () => {
    render(<TextArea label="Your feedback" isRequired />);
    expect(screen.getByText("Your feedback (required)")).toBeInTheDocument();
  });

  test("character counter renders when maxLength is set and updates as the user types", () => {
    render(<TextArea label="Your feedback" maxLength={500} />);
    const textarea: HTMLTextAreaElement =
      screen.getByLabelText(/your feedback/i);
    expect(screen.getByText("0/500")).toBeInTheDocument();
    fireEvent.change(textarea, { target: { value: "hello world" } });
    expect(screen.getByText("11/500")).toBeInTheDocument();
  });

  test("onChange fires as the user types", () => {
    const onChange = vi.fn();
    render(<TextArea label="Your feedback" onChange={onChange} />);
    const textarea: HTMLTextAreaElement =
      screen.getByLabelText(/your feedback/i);
    fireEvent.change(textarea, { target: { value: "hello" } });
    expect(onChange).toHaveBeenCalledWith("hello");
  });

  test("maxLength is enforced natively by the browser via the maxlength attribute", () => {
    render(<TextArea label="Your feedback" maxLength={5} />);
    const textarea: HTMLTextAreaElement =
      screen.getByLabelText(/your feedback/i);
    expect(textarea).toHaveAttribute("maxlength", "5");
  });

  test("custom errorMessage renders when the field is invalid alongside maxLength", () => {
    render(
      <TextArea
        label="Your feedback"
        maxLength={5}
        value="too long"
        errorMessage="Please shorten your feedback"
        isInvalid
      />
    );
    expect(
      screen.getByText("Please shorten your feedback")
    ).toBeInTheDocument();
  });

  test("isInvalid renders the error box with icon and errorMessage", () => {
    render(
      <TextArea label="Your feedback" isInvalid errorMessage="Invalid input" />
    );
    const textbox = screen.getByLabelText(/your feedback/i);
    expect(textbox).toHaveAttribute("aria-invalid", "true");
    expect(textbox).toHaveAccessibleDescription("Invalid input");
    expect(textbox.closest(".bcds-react-aria-TextArea")).toHaveAttribute(
      "data-invalid"
    );
  });

  test("error message is not rendered when the field is valid", () => {
    render(<TextArea label="Your feedback" errorMessage="Invalid input" />);
    expect(screen.queryByText("Invalid input")).not.toBeInTheDocument();
  });

  test("disabled textarea is not editable", () => {
    render(<TextArea label="Your feedback" isDisabled />);
    const textarea: HTMLTextAreaElement =
      screen.getByLabelText(/your feedback/i);
    expect(textarea).toBeDisabled();
    expect(textarea.closest(".bcds-react-aria-TextArea")).toHaveAttribute(
      "data-disabled"
    );
  });

  test("readonly textarea is focusable but not editable", () => {
    render(<TextArea label="Your feedback" isReadOnly value="fixed" />);
    const textarea: HTMLTextAreaElement =
      screen.getByLabelText(/your feedback/i);
    expect(textarea).toHaveAttribute("readonly");
    expect(textarea.closest(".bcds-react-aria-TextArea")).toHaveAttribute(
      "data-readonly"
    );
  });
});
