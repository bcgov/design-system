import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";

import { AlertDialog, Button, DialogTrigger, Modal } from "../components";
import { AlertDialogProps } from "@/components/AlertDialog";

const meta = {
  title: "Components/Dialogs/AlertDialog",
  component: AlertDialog,
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      options: ["info", "confirmation", "warning", "error", "destructive"],
      control: { type: "radio" },
      description: "Sets the theme and icon for the alert",
    },
    title: {
      control: { type: "text" },
      description: "Set the alert title",
    },
    buttons: {
      control: { type: "object" },
      description: "Populates the button group",
    },
    isIconHidden: {
      control: { type: "boolean" },
      description: "Show or hide the alert icon",
    },
    isCloseable: {
      control: { type: "boolean" },
      description: "Whether an alert can be closed",
    },
    role: {
      control: { type: "radio" },
      options: ["alertdialog", "dialog"],
      description: "Sets ARIA role",
    },
  },
  args: {
    variant: "info",
    isCloseable: true,
    isIconHidden: false,
    role: "dialog",
  },
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AlertDialogTemplate: Story = {
  args: {
    title: "Alert dialog title",
    children: "Alert dialog children slot",
    buttons: [
      <Button variant="tertiary" key="alert-dialog-button-1">
        Button 1
      </Button>,
      <Button variant="secondary" key="alert-dialog-button-2">
        Button 2
      </Button>,
    ],
  },
  play: async ({ canvas, userEvent }) => {
    const body = within(document.body);

    expect(body.queryByRole("dialog")).not.toBeInTheDocument();
    await userEvent.click(
      canvas.getByRole("button", { name: /open the alert dialog/i })
    );
    expect(body.getByRole("dialog")).toBeInTheDocument();
  },
  render: ({ ...args }: AlertDialogProps) => (
    <DialogTrigger>
      <Button>Open the alert dialog</Button>
      <Modal>
        <AlertDialog {...args} data-testid="alert-dialog" />
      </Modal>
    </DialogTrigger>
  ),
};

export const AlertDialogWithoutIcon: Story = {
  ...AlertDialogTemplate,
  args: {
    isIconHidden: true,
    title: "Alert dialog title",
    children: "This dialog renders without an icon",
    buttons: [
      <Button variant="tertiary" key="alert-dialog-button-1">
        Button 1
      </Button>,
      <Button variant="secondary" key="alert-dialog-button-2">
        Button 2
      </Button>,
    ],
  },
  play: async ({ canvas, userEvent }) => {
    const body = within(document.body);

    expect(body.queryByRole("dialog")).not.toBeInTheDocument();
    await userEvent.click(
      canvas.getByRole("button", { name: /open the alert dialog/i })
    );
    expect(body.getByRole("dialog")).toBeInTheDocument();
    expect(
      body
        .getByTestId("alert-dialog")
        .querySelector(".bcds-react-aria-AlertDialog--Icon")
    ).not.toBeInTheDocument();
  },
};

export const AlertDialogWithoutCloseButton: Story = {
  ...AlertDialogTemplate,
  args: {
    isCloseable: false,
    title: "This dialog is not closeable",
    children:
      "It does not render a close button. Click outside the dialog to dismiss this example.",
  },
  play: async ({ canvas, userEvent }) => {
    const body = within(document.body);

    expect(body.queryByRole("dialog")).not.toBeInTheDocument();
    await userEvent.click(
      canvas.getByRole("button", { name: /open the alert dialog/i })
    );
    expect(body.getByRole("dialog")).toBeInTheDocument();
    expect(
      body.queryByRole("button", { name: /close/i })
    ).not.toBeInTheDocument();
  },
  render: ({ ...args }: AlertDialogProps) => (
    <DialogTrigger>
      <Button>Open the alert dialog</Button>
      <Modal isDismissable>
        <AlertDialog {...args} data-testid="alert-dialog" />
      </Modal>
    </DialogTrigger>
  ),
};

export const ConfirmationAlert: Story = {
  ...AlertDialogTemplate,
  args: {
    title: "Confirmation alert dialog",
    children: "Displays a green checkmark icon",
    variant: "confirmation",
    buttons: [
      <Button variant="tertiary" key="alert-dialog-button-1">
        Button 1
      </Button>,
      <Button variant="secondary" key="alert-dialog-button-2">
        Button 2
      </Button>,
    ],
  },
  play: async ({ canvas, userEvent }) => {
    const body = within(document.body);

    expect(body.queryByRole("dialog")).not.toBeInTheDocument();
    await userEvent.click(
      canvas.getByRole("button", { name: /open the alert dialog/i })
    );
    expect(body.getByRole("dialog")).toBeInTheDocument();
    expect(
      body.getByTestId("alert-dialog").querySelector('svg[id="check-icon"]')
    ).toBeInTheDocument();
  },
};

export const WarningAlert: Story = {
  ...AlertDialogTemplate,
  args: {
    title: "Warning alert dialog",
    children: "Displays an orange warning icon",
    variant: "warning",
    buttons: [
      <Button variant="tertiary" key="alert-dialog-button-1">
        Button 1
      </Button>,
      <Button variant="secondary" key="alert-dialog-button-2">
        Button 2
      </Button>,
    ],
  },
  play: async ({ canvas, userEvent }) => {
    const body = within(document.body);

    expect(body.queryByRole("dialog")).not.toBeInTheDocument();
    await userEvent.click(
      canvas.getByRole("button", { name: /open the alert dialog/i })
    );
    expect(body.getByRole("dialog")).toBeInTheDocument();
    expect(
      body
        .getByTestId("alert-dialog")
        .querySelector('svg[id="exclamation-icon"]')
    ).toBeInTheDocument();
  },
};

export const ErrorAlert: Story = {
  ...AlertDialogTemplate,
  args: {
    title: "Error alert dialog",
    children: "Displays a red error icon",
    variant: "error",
    buttons: [
      <Button variant="secondary" key="button">
        Button
      </Button>,
    ],
  },
  play: async ({ canvas, userEvent }) => {
    const body = within(document.body);

    expect(body.queryByRole("dialog")).not.toBeInTheDocument();
    await userEvent.click(
      canvas.getByRole("button", { name: /open the alert dialog/i })
    );
    expect(body.getByRole("dialog")).toBeInTheDocument();
    expect(
      body
        .getByTestId("alert-dialog")
        .querySelector('svg[id="exclamation-icon-circle"]')
    ).toBeInTheDocument();
  },
};

export const DestructiveAlert: Story = {
  ...AlertDialogTemplate,
  args: {
    title: "Destructive alert dialog",
    children: "Displays a red error icon",
    variant: "destructive",
    buttons: [
      <Button variant="tertiary" key="alert-dialog-button-1">
        Button 1
      </Button>,
      <Button variant="secondary" danger key="alert-dialog-button-2">
        Button 2
      </Button>,
    ],
  },
  play: async ({ canvas, userEvent }) => {
    const body = within(document.body);

    expect(body.queryByRole("dialog")).not.toBeInTheDocument();
    await userEvent.click(
      canvas.getByRole("button", { name: /open the alert dialog/i })
    );
    expect(body.getByRole("dialog")).toBeInTheDocument();
    expect(
      body
        .getByTestId("alert-dialog")
        .querySelector('svg[id="exclamation-icon-circle"]')
    ).toBeInTheDocument();
  },
};
