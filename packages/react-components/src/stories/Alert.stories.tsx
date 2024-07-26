import type { Meta, StoryObj } from "@storybook/react";

import { Alert, Button } from "../components";
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
    closeable: {
      control: { type: "boolean" },
      description: "Whether an alert can be closed",
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

export const AlertWithActions: Story = {
  args: {
    variant: "success",
    title: "This is a successful alert",
    description: "Also this alert has some actions",
    closeable: true,
    children: [
      <Button variant="secondary" size="small">
        Do a smaller thing
      </Button>,
      <Button variant="primary" size="small">
        Do a thing
      </Button>,
    ],
  },
};
