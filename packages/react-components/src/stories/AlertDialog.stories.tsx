import type { Meta, StoryObj } from "@storybook/react";

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
    description: {
      control: { type: "text" },
      description: "Provides additional description or helper text",
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
    description: "Alert dialog description",
    buttons: [
      <Button variant="tertiary">Button 1</Button>,
      <Button variant="secondary">Button 2</Button>,
    ],
  },
  render: ({ ...args }: AlertDialogProps) => (
    <DialogTrigger>
      <Button>Open the alert dialog</Button>
      <Modal>
        <AlertDialog {...args} />
      </Modal>
    </DialogTrigger>
  ),
};

export const AlertDialogWithoutIcon: Story = {
  ...AlertDialogTemplate,
  args: {
    isIconHidden: true,
    title: "Alert dialog title",
    description: "This dialog renders without an icon",
    buttons: [
      <Button variant="tertiary">Button 1</Button>,
      <Button variant="secondary">Button 2</Button>,
    ],
  },
};

export const AlertDialogWithoutCloseButton: Story = {
  ...AlertDialogTemplate,
  args: {
    isCloseable: false,
    title: "This dialog is not closeable",
    description:
      "It does not render a close button. Click outside the dialog to dismiss this example.",
  },
};

export const ConfirmationAlert: Story = {
  ...AlertDialogTemplate,
  args: {
    title: "Confirmation alert dialog",
    description: "Displays a green checkmark icon",
    variant: "confirmation",
    buttons: [
      <Button variant="tertiary">Button 1</Button>,
      <Button variant="secondary">Button 2</Button>,
    ],
  },
};

export const WarningAlert: Story = {
  ...AlertDialogTemplate,
  args: {
    title: "Warning alert dialog",
    description: "Displays an orange warning icon",
    variant: "warning",
    buttons: [
      <Button variant="tertiary">Button 1</Button>,
      <Button variant="secondary">Button 2</Button>,
    ],
  },
};

export const ErrorAlert: Story = {
  ...AlertDialogTemplate,
  args: {
    title: "Error alert dialog",
    description: "Displays a red error icon",
    variant: "error",
    buttons: [<Button variant="secondary">Button</Button>],
  },
};

export const DestructiveAlert: Story = {
  ...AlertDialogTemplate,
  args: {
    title: "Destructive alert dialog",
    description: "Displays a red error icon",
    variant: "destructive",
    buttons: [
      <Button variant="tertiary">Button 1</Button>,
      <Button variant="secondary" danger>
        Button 2
      </Button>,
    ],
  },
};
