import type { Meta, StoryObj } from "@storybook/react";

import { Button, Dialog, DialogTrigger, Modal } from "../components";
import { DialogProps } from "../components/Dialog";

const meta = {
  title: "Components/Dialogs/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isCloseable: {
      control: { type: "boolean" },
      description: "Toggles display of close icon",
    },
    children: {
      control: { type: "object" },
      description: "Populates dialog content",
    },
  },
  args: {
    isCloseable: true,
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DialogTemplate: Story = {
  args: {
    children: [
      <div>
        <h2>Alert title</h2>
      </div>,
    ],
  },
  render: ({ ...args }: DialogProps) => (
    <DialogTrigger>
      <Button>Open the dialog</Button>
      <Modal>
        <Dialog {...args} />
      </Modal>
    </DialogTrigger>
  ),
};
