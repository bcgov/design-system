import type { Meta, StoryObj } from "@storybook/react";

import { Button, Modal, Dialog, DialogTrigger } from "../components";

const meta = {
  title: "Components/Dialogs/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalTemplate: Story = {
  args: {},
};

export const ModalDialogExample: Story = {
  args: {},
  render: ({ ...args }) => (
    <DialogTrigger>
      <Button variant="primary">Open dialog</Button>
      <Modal {...args}>
        <Dialog></Dialog>
      </Modal>
    </DialogTrigger>
  ),
};
