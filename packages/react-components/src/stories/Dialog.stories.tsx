import type { Meta, StoryObj } from "@storybook/react";

import { Dialog } from "../components";

const meta = {
  title: "Components/ModalDialog/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DialogTemplate: Story = {
  args: {},
};
