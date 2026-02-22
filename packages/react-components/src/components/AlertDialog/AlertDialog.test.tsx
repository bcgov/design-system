import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import AlertDialog from "./AlertDialog";
import Button from "../Button";
import { DialogTrigger } from "../Dialog";
import Modal from "../Modal";

describe("AlertDialog", () => {
  it("text within AlertDialog is not initially visible", () => {
    render(
      <DialogTrigger>
        <Button>Open</Button>
        <Modal>
          <AlertDialog>Lorem ipsum</AlertDialog>
        </Modal>
      </DialogTrigger>
    );

    const text = screen.queryByText(/lorem ipsum/i);
    expect(text).not.toBeInTheDocument();
  });

  it("text within AlertDialog is visible after pressing open button", () => {
    render(
      <DialogTrigger>
        <Button>Open</Button>
        <Modal>
          <AlertDialog>Lorem ipsum</AlertDialog>
        </Modal>
      </DialogTrigger>
    );

    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    const text = screen.queryByText(/lorem ipsum/i);
    expect(text).toBeInTheDocument();
  });

  it("with `isCloseable` set to `false`, no close button is present", () => {
    render(
      <DialogTrigger>
        <Button>Open</Button>
        <Modal>
          <AlertDialog isCloseable={false}>Lorem ipsum</AlertDialog>
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

  it("by default, a close button is present and pushing it closes the AlertDialog", () => {
    render(
      <DialogTrigger>
        <Button>Open</Button>
        <Modal>
          <AlertDialog>Lorem ipsum</AlertDialog>
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

  it("can be passed Button components that can be pressed when open", () => {
    const handleCancel = vi.fn();
    const handleSubmit = vi.fn();
    render(
      <DialogTrigger>
        <Button>Open</Button>
        <Modal>
          <AlertDialog
            buttons={[
              <Button
                variant="secondary"
                onPress={handleCancel}
                key="secondary-button"
              >
                Cancel
              </Button>,
              <Button
                variant="primary"
                onPress={handleSubmit}
                key="primary-button"
              >
                Submit
              </Button>,
            ]}
          >
            Lorem ipsum
          </AlertDialog>
        </Modal>
      </DialogTrigger>
    );

    const missingCancelButton = screen.queryByText(/cancel/i);
    expect(missingCancelButton).not.toBeInTheDocument();
    const missingSubmitButton = screen.queryByText(/submit/i);
    expect(missingSubmitButton).not.toBeInTheDocument();

    const openButton = screen.getByText(/open/i);
    fireEvent.click(openButton);

    const presentCancelButton = screen.getByText(/cancel/i);
    const presentSubmitButton = screen.getByText(/submit/i);
    fireEvent.click(presentCancelButton);
    expect(handleCancel).toHaveBeenCalledTimes(1);
    fireEvent.click(presentSubmitButton);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
