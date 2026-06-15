import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import Menu, { MenuTrigger } from "../Menu";
import Button from "../Button";
import MenuItem from "./MenuItem";

async function renderOpenMenu(menuItem: React.ReactNode) {
  render(
    <MenuTrigger>
      <Button>Open</Button>
      <Menu aria-label="Actions">{menuItem}</Menu>
    </MenuTrigger>
  );

  fireEvent.click(screen.getByRole("button", { name: /open/i }));
  await screen.findByRole("menu");
}

describe("MenuItem", () => {
  it("renders as a menu item with children text", async () => {
    await renderOpenMenu(<MenuItem id="edit">Edit</MenuItem>);

    const menuItem = await screen.findByRole("menuitem", { name: /edit/i });
    expect(menuItem).toBeInTheDocument();
    expect(menuItem).toHaveClass("bcds-react-aria-MenuItem medium");
  });

  it("applies small size class", async () => {
    await renderOpenMenu(
      <MenuItem id="edit" size="small">
        Edit
      </MenuItem>
    );

    expect(await screen.findByRole("menuitem", { name: /edit/i })).toHaveClass(
      "bcds-react-aria-MenuItem small"
    );
  });

  it("renders label and description content", async () => {
    await renderOpenMenu(
      <MenuItem id="share" label="Share" description="Send this item" />
    );

    expect(await screen.findByText("Share")).toBeInTheDocument();
    expect(await screen.findByText("Send this item")).toBeInTheDocument();
  });

  it("renders left icon when iconLeft is passed", async () => {
    await renderOpenMenu(
      <MenuItem
        id="profile"
        iconLeft={<svg data-testid="left-icon" aria-label="left icon" />}
      >
        Profile
      </MenuItem>
    );

    expect(await screen.findByTestId("left-icon")).toBeInTheDocument();
    expect(
      await screen.findByRole("menuitem", { name: /profile/i })
    ).toBeInTheDocument();
  });
});
