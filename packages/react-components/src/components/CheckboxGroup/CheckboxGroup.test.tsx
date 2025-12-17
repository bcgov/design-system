import { beforeEach, describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // for matchers like toBeChecked

import CheckboxGroup from "./CheckboxGroup";
import Checkbox from "../Checkbox/Checkbox";

describe("CheckboxGroup component", () => {
  beforeEach(() => {
    render(
      <CheckboxGroup label="Fruits" defaultValue={["orange"]}>
        <Checkbox value="apple">Apple</Checkbox>
        <Checkbox value="orange">Orange</Checkbox>
        <Checkbox value="banana">Banana</Checkbox>
      </CheckboxGroup>
    );
  });

  test("renders 3 checkboxes with middle one checked", () => {
    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes).toHaveLength(3);
    expect(checkboxes[0]).not.toBeChecked();
    expect(checkboxes[1]).toBeChecked();
    expect(checkboxes[2]).not.toBeChecked();
  });

  test("user clicks 'orange' option, it is no longer checked", () => {
    const checkboxOrange = screen.getByLabelText(/orange/i);
    expect(checkboxOrange).toBeChecked();
    fireEvent.click(checkboxOrange);
    expect(checkboxOrange).not.toBeChecked();
  });
});
