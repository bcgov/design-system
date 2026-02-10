import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../components";
import { ToasterProvider, useToastQueue } from "../components/Toast/Toaster";

const meta = {
  title: "Feedback and status/Toast",
  parameters: {
    layout: "centered",
  },

  decorators: [
    (Story) => (
      <ToasterProvider>
        <div style={{ minHeight: "240px" }}>
          <Story />
        </div>
      </ToasterProvider>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Playground / Primary
function ToastPlayground() {
  const toast = useToastQueue();

  return (
    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
      <Button
        onPress={() =>
          toast.add({
            message: "Changes saved",
            variant: "success",
          })
        }
      >
        Success
      </Button>

      <Button
        variant="secondary"
        onPress={() =>
          toast.add({
            message: "Unable to upload document",
            variant: "danger",
          })
        }
      >
        Error
      </Button>

      <Button
        variant="secondary"
        onPress={() =>
          toast.add({
            title: "Saving",
            message: "Your changes are being saved",
            variant: "progress",
          })
        }
      >
        Progress
      </Button>

      <Button
        variant="secondary"
        onPress={() =>
          toast.add({
            title: "Information",
            message: "This change will take effect shortly",
            variant: "info",
          })
        }
      >
        Info
      </Button>
    </div>
  );
}

export const ToastTemplate: Story = {
  render: () => <ToastPlayground />,
};

// sUCCESS
function SuccessToastDemo() {
  const toast = useToastQueue();

  return (
    <Button
      onPress={() =>
        toast.add({
          message: "Application submitted successfully",
          variant: "success",
        })
      }
    >
      Show success toast
    </Button>
  );
}

export const SuccessToast: Story = {
  render: () => <SuccessToastDemo />,
};

// ERROR
function ErrorToastDemo() {
  const toast = useToastQueue();

  return (
    <Button
      onPress={() =>
        toast.add({
          message: "Something went wrong. Please try again.",
          variant: "danger",
        })
      }
    >
      Show error toast
    </Button>
  );
}

export const ErrorToast: Story = {
  render: () => <ErrorToastDemo />,
};

// pROGRESS
function ProgressToastDemo() {
  const toast = useToastQueue();

  return (
    <Button
      onPress={() =>
        toast.add({
          title: "Uploading",
          message: "Uploading document…",
          variant: "progress",
        })
      }
    >
      Show progress toast
    </Button>
  );
}

export const ProgressToast: Story = {
  render: () => <ProgressToastDemo />,
};
