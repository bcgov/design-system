import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "../Button";
import Dialog, { DialogTrigger } from "./Dialog";
import Modal from "../Modal";

describe("Dialog", () => {
  it("text within Dialog is not initially visible", () => {
    render(
      <DialogTrigger>
        <Button>Open</Button>
        <Modal>
          <Dialog>Lorem ipsum</Dialog>
        </Modal>
      </DialogTrigger>
    );

    const text = screen.queryByText(/lorem ipsum/i);
    expect(text).not.toBeInTheDocument();
  });

  it("text within Dialog is visible after pressing open button", () => {
    render(
      <DialogTrigger>
        <Button>Open</Button>
        <Modal>
          <Dialog>Lorem ipsum</Dialog>
        </Modal>
      </DialogTrigger>
    );

    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    const text = screen.queryByText(/lorem ipsum/i);
    expect(text).toBeInTheDocument();
  });

  it("without `isCloseable` passed, no close button is present", () => {
    render(
      <DialogTrigger>
        <Button>Open</Button>
        <Modal>
          <Dialog>Lorem ipsum</Dialog>
        </Modal>
      </DialogTrigger>
    );

    const missingModalText = screen.queryByText(/lorem ipsum/i);
    expect(missingModalText).not.toBeInTheDocument();

    const openButton = screen.getByText(/open/i);
    fireEvent.click(openButton);
    const presentModalText = screen.queryByText(/lorem ipsum/i);
    expect(presentModalText).toBeInTheDocument();

    const closeButton = screen.queryByLabelText(/close/i);
    expect(closeButton).not.toBeInTheDocument();
  });

  it("with `isCloseable` passed, a close button push closes the Dialog", () => {
    render(
      <DialogTrigger>
        <Button>Open</Button>
        <Modal>
          <Dialog isCloseable>Lorem ipsum</Dialog>
        </Modal>
      </DialogTrigger>
    );

    const missingModalText = screen.queryByText(/lorem ipsum/i);
    expect(missingModalText).not.toBeInTheDocument();

    const openButton = screen.getByText(/open/i);
    fireEvent.click(openButton);
    const presentModalText = screen.queryByText(/lorem ipsum/i);
    expect(presentModalText).toBeInTheDocument();

    const closeButton = screen.getByLabelText(/close/i);
    expect(closeButton).toBeInTheDocument();
    fireEvent.click(closeButton);
    const dismissedModalText = screen.queryByText(/lorem ipsum/i);
    expect(dismissedModalText).not.toBeInTheDocument();
  });
});
