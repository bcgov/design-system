import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, ButtonGroup, ToastRegion, ToastQueue } from "../components";

const meta = {
  title: "Notifications and feedback/ToastRegion",
  component: ToastRegion,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof ToastRegion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToastRegionTemplate: Story = {
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
      <ToastRegion></ToastRegion>
    </>
  ),
};
