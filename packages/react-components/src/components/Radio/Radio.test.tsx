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

  it("renders a visible description and associates it as the accessible description", () => {
    render(
      <RadioGroup label="More options">
        <Radio value="four" description="Extra context for option 4">
          Option 4
        </Radio>
      </RadioGroup>
    );

    expect(screen.getByText("Extra context for option 4")).toBeVisible();
    expect(
      screen.getByRole("radio", {
        name: /option 4/i,
        description: "Extra context for option 4",
      })
    ).toBeInTheDocument();
  });
});
