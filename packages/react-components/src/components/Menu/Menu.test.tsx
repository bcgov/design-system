import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import Menu, { MenuSectionProps, MenuTrigger } from "./Menu";
import MenuItem from "../MenuItem";
import Button from "../Button";

describe("Menu", () => {
  it("renders menu items from children when opened", async () => {
    render(
      <MenuTrigger>
        <Button>Open</Button>
        <Menu aria-label="Actions">
          <MenuItem id="edit">Edit</MenuItem>
          <MenuItem id="delete">Delete</MenuItem>
        </Menu>
      </MenuTrigger>
    );

    fireEvent.click(screen.getByRole("button", { name: /open/i }));

    expect(await screen.findByRole("menu")).toBeInTheDocument();
    expect(
      await screen.findByRole("menuitem", { name: /edit/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("menuitem", { name: /delete/i })
    ).toBeInTheDocument();
  });

  it("applies the size class", async () => {
    render(
      <MenuTrigger>
        <Button>Open</Button>
        <Menu aria-label="Actions" size="small">
          <MenuItem id="edit">Edit</MenuItem>
        </Menu>
      </MenuTrigger>
    );

    fireEvent.click(screen.getByRole("button", { name: /open/i }));

    expect(await screen.findByRole("menu")).toHaveClass(
      "bcds-react-aria-Menu small"
    );
  });

  it("renders section headers and separator between sections", async () => {
    const sections: MenuSectionProps[] = [
      {
        id: "file",
        header: "File",
        items: [{ id: "new", children: "New" }],
      },
      {
        id: "edit",
        header: "Edit",
        items: [{ id: "copy", children: "Copy" }],
      },
    ];

    render(
      <MenuTrigger>
        <Button>Open</Button>
        <Menu aria-label="Sectioned actions" sections={sections} />
      </MenuTrigger>
    );

    fireEvent.click(screen.getByRole("button", { name: /open/i }));

    expect(await screen.findByText("File")).toBeInTheDocument();
    expect(await screen.findByText("Edit")).toBeInTheDocument();
    expect(
      await screen.findByRole("menuitem", { name: /new/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("menuitem", { name: /copy/i })
    ).toBeInTheDocument();
    expect(screen.getAllByRole("separator")).toHaveLength(1);
  });
});
