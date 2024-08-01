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
    hideIcon: {
      control: { type: "boolean" },
      description: "Show or hide the left icon",
    },
    isCloseable: {
      control: { type: "boolean" },
      description: "Whether an alert can be closed",
    },
    alertRole: {
      control: { type: "boolean" },
      description: "Sets the ARIA `alert` role. Use with caution",
    },
  },
} satisfies Meta<typeof InlineAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InlineAlertTemplate: Story = {
  args: {
    variant: "info",
    title: "This is an alert title",
    description:
      "The alert description is used to provide additional explanatory or helper text.",
  },
  render: ({ ...args }: InlineAlertProps) => <InlineAlert {...args} />,
};

export const InfoAlert: Story = {
  args: {
    variant: "info",
    title: "This is an alert with the 'info' theme",
    description:
      "This is the default alert theme. Use it to provide a generic informational alert.",
  },
};

export const SuccessAlert: Story = {
  args: {
    variant: "success",
    title: "This is an alert with the 'success' theme",
    description:
      "Use this alert theme to indicate a positive or success state.",
  },
};

export const WarningAlert: Story = {
  args: {
    variant: "warning",
    title: "This is an alert with the 'warning' theme",
    description:
      "Use this alert theme to indicate a non-urgent problem or notice.",
  },
};

export const DangerAlert: Story = {
  args: {
    variant: "danger",
    title: "This is an alert with the 'danger' theme",
    description:
      "Use this alert theme to communicate an urgent warning or error to the user",
  },
};

export const InlineAlertWithoutIcon: Story = {
  args: {
    title: "This alert has no visible icon",
    hideIcon: true,
  },
};

export const CloseableAlert: Story = {
  args: {
    title: "This alert is closeable",
    isCloseable: true,
  },
};

export const InlineAlertWithActions: Story = {
  args: {
    variant: "success",
    title: "This is a success alert with some additional actions",
    description:
      "This alert uses button components in the children slot to provide additional actions for the user to take.",
    isCloseable: true,
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
