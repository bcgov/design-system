import type { Meta, StoryObj } from "@storybook/react";

import { Button, Modal, DialogTrigger } from "../components";
import type { ModalOverlayProps } from "react-aria-components";

const meta = {
  title: "Components/Dialogs/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isDismissable: {
      control: { type: "boolean" },
      description: "Whether to close the modal when user interacts outside it",
    },
    isKeyboardDismissDisabled: {
      control: { type: "boolean" },
      description:
        "Whether pressing the escape key to close the modal should be disabled",
    },
    isOpen: {
      control: { type: "boolean" },
      description: "Whether the overlay is open by default (controlled)",
    },
    defaultOpen: {
      control: { type: "boolean" },
      description: "Whether the overlay is open by default (uncontrolled)",
    },
  },
  args: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalTemplate: Story = {
  args: { isDismissable: true },
  render: ({ ...args }: ModalOverlayProps) => (
    <DialogTrigger>
      <Button>Open an empty modal</Button>
      <Modal {...args}></Modal>
    </DialogTrigger>
  ),
};

export const DefaultOpenModal: Story = {
  ...ModalTemplate,
  args: {
    defaultOpen: true,
  },
  render: ({ ...args }: ModalOverlayProps) => (
    <DialogTrigger>
      <Button>Re-open the modal</Button>
      <Modal {...args}>
        <div
          style={{
            font: "var(--typography-regular-body)",
            textAlign: "center",
            padding: "var(--layout-padding-small)",
          }}
        >
          This modal is open by default
        </div>
      </Modal>
    </DialogTrigger>
  ),
};

export const CustomSizeModal: Story = {
  args: { isDismissable: true },
  render: ({ ...args }: ModalOverlayProps) => (
    <DialogTrigger>
      <Button>Open the modal</Button>
      <Modal
        style={{
          width: "300px",
          height: "300px",
          font: "var(--typography-regular-body",
          textAlign: "center",
          padding: "var(--layout-padding-small)",
        }}
        {...args}
      >
        This modal has custom width and height rules applied
      </Modal>
    </DialogTrigger>
  ),
};
