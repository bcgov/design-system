import { beforeEach, describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "../Button";
import { DialogTrigger } from "../Dialog";
import Modal from "./Modal";

describe("Modal", () => {
  beforeEach(() => {
    render(
      <DialogTrigger>
        <Button>Open</Button>
        <Modal>Lorem ipsum</Modal>
      </DialogTrigger>
    );
  });

  it("text within Modal is not initially visible", () => {
    const text = screen.queryByText(/lorem ipsum/i);
    expect(text).not.toBeInTheDocument();
  });

  it("text within Modal is visible after pressing open button", () => {
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    const text = screen.queryByText(/lorem ipsum/i);
    expect(text).toBeInTheDocument();
  });
});
