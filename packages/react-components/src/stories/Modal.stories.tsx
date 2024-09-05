import type { Meta, StoryObj } from "@storybook/react";

import { Button, Modal, DialogTrigger } from "../components";
import { ModalProps } from "@/components/Modal";

const meta = {
  title: "Components/Dialogs/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    modalHeight: {
      control: { type: "text" },
      description: "Sets the height of the modal",
    },
    modalWidth: {
      control: { type: "text" },
      description: "Sets the width of the modal",
    },
  },
  args: {
    modalHeight: 200,
    modalWidth: 600,
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalTemplate: Story = {
  args: {},
  render: ({ ...args }: ModalProps) => (
    <DialogTrigger>
      <Button>Open an empty modal</Button>
      <Modal {...args}></Modal>
    </DialogTrigger>
  ),
};
