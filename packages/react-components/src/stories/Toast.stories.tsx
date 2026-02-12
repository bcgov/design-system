import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Toaster, ToastQueue } from "../components";
import { ToastContent } from "../components/Toast/Toast";

function ToastStory(props: ToastContent) {
  return (
    <>
      <Button variant="primary" onPress={() => ToastQueue.add({ ...props })}>
        Activate
      </Button>
      <Toaster />
    </>
  );
}

const meta = {
  title: "Notifications and feedback/Toast/Toast",
  component: ToastStory,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "progress", "success", "warning", "danger"],
      description: "Message theme and icon",
      table: { defaultValue: { summary: "info" } },
    },
    title: {
      control: "text",
      description: "Message title",
    },
    message: {
      control: "text",
      description: "Message content",
    },
  },
} satisfies Meta<typeof ToastStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToastTemplate: Story = {
  args: {
    title: "Toast title text",
    message: "Toast message text",
    variant: "info",
  },
  render: ({ ...args }: ToastContent) => (
    <>
      <Button
        variant="primary"
        onPress={() => ToastQueue.add({ ...args }, { timeout: 5000 })}
      >
        Activate
      </Button>
      <Toaster />
    </>
  ),
};
