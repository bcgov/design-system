import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Modal, DialogTrigger } from "../components";
import type { ModalOverlayProps } from "react-aria-components";

const meta = {
  title: "Notifications and feedback/Dialogs/Modal",
  component: Modal,
  // Closed modals only show the trigger; see the hidden open and closed stories below
  tags: ["!visual"],
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
  tags: ["visual", "overlay"],
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

export const CustomSizeModalOpen: Story = {
  ...CustomSizeModal,
  tags: ["!dev", "!autodocs", "visual", "overlay"],
  args: { ...CustomSizeModal.args, defaultOpen: true },
};

// Captures the closed trigger once, so it's still covered by visual tests
export const ModalTemplateClosed: Story = {
  ...ModalTemplate,
  tags: ["!dev", "!autodocs", "visual"],
};
