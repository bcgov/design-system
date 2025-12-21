import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";

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
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalTemplate: Story = {
  args: { isDismissable: true },
  play: async ({ canvas, userEvent }) => {
    const body = within(document.body);

    expect(body.queryByTestId("modal")).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", { name: /open/i }));
    expect(body.getByTestId("modal")).toBeInTheDocument();
  },
  render: ({ ...args }: ModalOverlayProps) => (
    <DialogTrigger>
      <Button>Open an empty modal</Button>
      <Modal {...args} data-testid="modal"></Modal>
    </DialogTrigger>
  ),
};

export const DefaultOpenModal: Story = {
  ...ModalTemplate,
  args: {
    defaultOpen: true,
  },
  play: async () => {
    const body = within(document.body);
    expect(body.getByTestId("modal")).toBeInTheDocument();
  },
  render: ({ ...args }: ModalOverlayProps) => (
    <DialogTrigger>
      <Button>Re-open the modal</Button>
      <Modal {...args} data-testid="modal">
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
  play: async ({ canvas, userEvent }) => {
    const body = within(document.body);

    expect(body.queryByTestId("modal")).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", { name: /open/i }));
    expect(body.getByTestId("modal")).toBeInTheDocument();
    expect(body.getByTestId("modal")).toHaveStyle({
      width: "300px",
      height: "300px",
    });
  },
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
        data-testid="modal"
      >
        This modal has custom width and height rules applied
      </Modal>
    </DialogTrigger>
  ),
};
