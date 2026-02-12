import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, ButtonGroup, ToastRegion } from "../components";
import { ToastQueue } from "../components/Toast/ToastQueue";

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
          onPress={() =>
            ToastQueue.add({
              message: "Changes saved",
              variant: "success",
            })
          }
        >
          Show Success Toast
        </Button>
        <Button
          variant="secondary"
          onPress={() =>
            ToastQueue.add({
              message: "Unable to upload document",
              variant: "danger",
            })
          }
        >
          Show Error Toast
        </Button>
      </ButtonGroup>
      <ToastRegion></ToastRegion>
    </>
  ),
};
