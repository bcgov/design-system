import { expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

it("displays and removes the selected tag when its ID is zero in multiple mode", async () => {
  const onChange = vi.fn();
  render(
    <Select
      label="Priority"
      selectionMode="multiple"
      defaultValue={[0, 1]}
      onChange={onChange}
      items={[
        { id: 0, label: "Normal" },
        { id: 1, label: "High" },
      ]}
    />
  );

  // Tags render in a portal once the overlay container has mounted
  const selections = await screen.findByRole("grid", {
    name: "Priority selections",
  });
  const tags = within(selections).getAllByRole("row");
  expect(tags).toHaveLength(2);
  expect(tags[0]).toHaveTextContent("Normal");

  await userEvent.click(within(tags[0]).getByRole("button"));

  expect(onChange).toHaveBeenLastCalledWith([1]);
  expect(within(selections).getAllByRole("row")).toHaveLength(1);
  expect(within(selections).getByRole("row")).toHaveTextContent("High");
});
