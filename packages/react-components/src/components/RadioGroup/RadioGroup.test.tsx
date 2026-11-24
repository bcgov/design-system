import { beforeEach, describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import RadioGroup from ".";
import Radio from "../Radio";

it("exposes the horizontal orientation to assistive technology", () => {
  render(
    <RadioGroup label="Options" orientation="horizontal">
      <Radio value="one">One</Radio>
      <Radio value="two">Two</Radio>
    </RadioGroup>
  );

  expect(screen.getByRole("radiogroup", { name: "Options" })).toHaveAttribute(
    "aria-orientation",
    "horizontal"
  );
});

describe("RadioGroup", () => {
  beforeEach(() => {
    render(
      <RadioGroup label="Options">
        <Radio value="one" data-testid="one">
          Option 1
        </Radio>
        <Radio value="two" data-testid="two">
          Option 2
        </Radio>
        <Radio value="three" data-testid="three">
          Option 3
        </Radio>
      </RadioGroup>
    );
  });

  it("renders three radio input options", () => {
    const radios: HTMLFormElement[] = screen.getAllByRole("radio");
    expect(radios).toHaveLength(3);
  });

  it("user can select a radio input option with a click", () => {
    const optionOne: HTMLInputElement = screen.getByRole("radio", {
      name: /option 1/i,
    });
    expect(optionOne).not.toBeChecked();
    fireEvent.click(optionOne);
    expect(optionOne).toBeChecked();
  });
});
