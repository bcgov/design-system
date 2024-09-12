import { render, screen } from "@testing-library/react";

import RadioGroup from ".";
import Radio from "../Radio";

describe("RadioGroup", () => {
  beforeEach(() => {
    render(
      <RadioGroup label="Options">
        <Radio value="one">Option 1</Radio>
        <Radio value="two">Option 2</Radio>
        <Radio value="three">Option 3</Radio>
      </RadioGroup>
    );
  });

  it("renders three radio input options", () => {
    const radios: HTMLFormElement[] = screen.getAllByRole("radio");
    expect(radios).toHaveLength(3);
  });
});
