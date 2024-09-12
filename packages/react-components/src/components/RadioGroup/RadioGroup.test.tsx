import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import RadioGroup from ".";
import Radio from "../Radio";

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
    const optionOne: HTMLFormElement = screen.getByTestId("one");
    expect(optionOne).not.toHaveAttribute("data-selected");
    fireEvent.click(optionOne);
    expect(optionOne).toHaveAttribute("data-selected");
  });
});
