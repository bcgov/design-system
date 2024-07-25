import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "../components";
import { AlertProps } from "@/components/Alert";

const meta = {
  title: "Components/Alert/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: ["info", "success", "warning", "danger"],
      control: { type: "radio" },
      description: "Sets the theme of the alert",
    },
    title: {
      control: { type: "text" },
      description: "Sets the alert title",
    },
    description: {
      control: { type: "text" },
      description: "Sets the alert text",
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AlertTemplate: Story = {
  args: {
    variant: "info",
    title: "This is an alert title",
    description: "This is an alert description",
  },
  render: ({ ...args }: AlertProps) => <Alert {...args} />,
};
