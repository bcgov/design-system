import type { Meta, StoryObj } from "@storybook/react";

import { InlineAlert, Button } from "../components";
import { InlineAlertProps } from "@/components/InlineAlert";

const meta = {
  title: "Components/Inline Alert/Inline Alert",
  component: InlineAlert,
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
    icon: {
      control: { type: "boolean" },
      description: "Show or hide the left icon",
    },
    closeable: {
      control: { type: "boolean" },
      description: "Whether an alert can be closed",
    },
  },
} satisfies Meta<typeof InlineAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InlineAlertTemplate: Story = {
  args: {
    variant: "info",
    title: "This is an alert title",
    description: "This is an alert description",
  },
  render: ({ ...args }: InlineAlertProps) => <InlineAlert {...args} />,
};

export const InlineAlertWithActions: Story = {
  args: {
    variant: "success",
    title: "This is a successful alert",
    description: "Also this alert has some actions",
    icon: true,
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
