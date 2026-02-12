import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, ButtonGroup, Toaster, ToastQueue } from "../components";

const meta = {
  title: "Notifications and feedback/Toast/Toaster",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    position: {
      control: "select",
      options: ["bottom-right", "bottom-left", "top-right", "top-left"],
      description: "Defines where toasts will appear on the screen",
      table: { defaultValue: { summary: "bottom-right" } },
    },
  },
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToasterTemplate: Story = {
  render: () => (
    <>
      <ButtonGroup>
        <Button
          variant="primary"
          onPress={() =>
            ToastQueue.add({
              title: "Success message",
              message: "Additional information goes here",
              variant: "success",
            })
          }
        >
          Show success toast
        </Button>
        <Button
          variant="secondary"
          onPress={() =>
            ToastQueue.add(
              {
                message:
                  "Auto-dismiss in 5 seconds. This is a long notification message.",
                variant: "info",
              },
              { timeout: 5000 },
            )
          }
        >
          Show info toast
        </Button>
        <Button
          variant="secondary"
          onPress={() =>
            ToastQueue.add({
              title: "Warning message",
              message: "Additional information goes here",
              variant: "warning",
            })
          }
        >
          Show warning toast
        </Button>
        <Button
          variant="secondary"
          danger
          onPress={() =>
            ToastQueue.add({
              title: "Error message",
              message: "Additional information goes here",
              variant: "danger",
            })
          }
        >
          Show error toast
        </Button>
      </ButtonGroup>
      <Toaster />
    </>
  ),
};

export const TopRightToaster: Story = {
  render: () => (
    <>
      <ButtonGroup>
        <Button
          variant="primary"
          onPress={() =>
            ToastQueue.add({
              title: "Success message",
              message: "Additional information goes here",
              variant: "success",
            })
          }
        >
          Show success toast
        </Button>
      </ButtonGroup>
      <Toaster position="top-right" />
    </>
  ),
};

export const TopLeftToaster: Story = {
  render: () => (
    <>
      <ButtonGroup>
        <Button
          variant="primary"
          onPress={() =>
            ToastQueue.add({
              title: "Success message",
              message: "Additional information goes here",
              variant: "success",
            })
          }
        >
          Show success toast
        </Button>
      </ButtonGroup>
      <Toaster position="top-left" />
    </>
  ),
};

export const BottomLeftToaster: Story = {
  render: () => (
    <>
      <ButtonGroup>
        <Button
          variant="primary"
          onPress={() =>
            ToastQueue.add({
              title: "Success message",
              message: "Additional information goes here",
              variant: "success",
            })
          }
        >
          Show success toast
        </Button>
      </ButtonGroup>
      <Toaster position="bottom-left" />
    </>
  ),
};
