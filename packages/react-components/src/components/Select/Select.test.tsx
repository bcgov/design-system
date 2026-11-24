import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Select from "./Select";

it("displays the selected option when its ID is zero", () => {
  render(
    <Select
      label="Priority"
      defaultValue={0}
      items={[
        { id: 0, label: "Normal" },
        { id: 1, label: "High" },
      ]}
    />
  );

  expect(screen.getByRole("button")).toHaveTextContent("Normal");
});
