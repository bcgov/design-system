import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";

import Select from "./Select";

it("ignores a disabled option and still allows an enabled option to be selected", async () => {
  const onChange = vi.fn();
  render(
    <Select
      label="Status"
      defaultValue="active"
      items={[
        { id: "active", label: "Active" },
        { id: "paused", label: "Paused", isDisabled: true },
        { id: "closed", label: "Closed" },
      ]}
      onChange={onChange}
    />
  );

  const trigger = screen.getByRole("button");
  fireEvent.click(trigger);
  fireEvent.click(await screen.findByRole("option", { name: "Paused" }));
  expect(onChange).not.toHaveBeenCalled();
  expect(trigger).toHaveTextContent("Active");

  fireEvent.click(screen.getByRole("option", { name: "Closed" }));
  expect(onChange).toHaveBeenCalledWith("closed");
  expect(trigger).toHaveTextContent("Closed");
});
