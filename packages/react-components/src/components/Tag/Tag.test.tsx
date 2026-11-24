import { render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";

import TagGroup from "../TagGroup";
import TagList from "../TagList";

it("includes the tag label once in the remove button's accessible name", () => {
  render(
    <TagGroup label="Selected items" onRemove={vi.fn()}>
      <TagList items={[{ id: "first", textValue: "First" }]} />
    </TagGroup>
  );

  expect(
    screen.getByRole("button", { name: "Remove First" })
  ).toBeInTheDocument();
});
