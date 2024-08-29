import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "../components";

const meta = {
  title: "Components/ModalDialog/Modal",
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
