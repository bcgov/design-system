import type { Meta, StoryObj } from "@storybook/react";

import { AlertBanner } from "../components";
import { AlertBannerProps } from "@/components/AlertBanner";

const meta = {
  title: "Components/AlertBanner/AlertBanner",
  component: AlertBanner,
  argTypes: {
    variant: {
      options: ["info", "success", "warning", "danger", "dark"],
      control: { type: "radio" },
      description: "Sets the theme and icon for the alert",
    },
    children: {
      control: { type: "object" },
      description: "Populates the content of the alert",
    },
    customIcon: {
      control: { type: "object" },
      description: "Overrides default icon",
    },
    isIconHidden: {
      control: { type: "boolean" },
      description: "Toggles display of alert icon",
    },
    isCloseable: {
      control: { type: "boolean" },
      description: "Toggles display of close button",
    },
    role: {
      control: { type: "text" },
      description: "Sets ARIA role for the alert",
    },
  },
} satisfies Meta<typeof AlertBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AlertBannerTemplate: Story = {
  args: {},
  render: ({ ...args }: AlertBannerProps) => <AlertBanner {...args} />,
};
