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
    title: "Alert title",
    description: "Alert description",
    buttons: [
      <Button variant="secondary">Button 1</Button>,
      <Button variant="primary">Button 2</Button>,
    ],
  },
  render: ({ ...args }: AlertDialogProps) => (
    <DialogTrigger>
      <Button>Open the alert dialog</Button>
      <Modal modalHeight={"auto"} modalWidth={600}>
        <AlertDialog {...args} />
      </Modal>
    </DialogTrigger>
  ),
};
