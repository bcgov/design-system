import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Radio from "./Radio";
import RadioGroup from "../RadioGroup";

describe("Radio", () => {
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

  it("renders an input option with a label", () => {
    const radio = screen.getAllByRole("radio");
    expect(radio).toHaveLength(3);
    expect(radio[0].tagName).toBe("INPUT");
    const label = radio[0].parentElement?.parentElement;
    expect(label).toHaveTextContent(/option 1/i);
  });
});
