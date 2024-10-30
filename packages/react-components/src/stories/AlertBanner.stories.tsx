import type { Meta, StoryObj } from "@storybook/react";

import { AlertBanner } from "../components";
import { AlertBannerProps } from "@/components/AlertBanner";
import { Button } from "@/components";
import { SvgBcOutlineIcon } from "@/components";

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
    onClose: {
      control: { type: "object" },
      description: "Function for the close button",
    },
  },
} satisfies Meta<typeof AlertBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AlertBannerTemplate: Story = {
  args: {
    children: ["This is an alert banner in its default configuration"],
  },
  render: ({ ...args }: AlertBannerProps) => <AlertBanner {...args} />,
};

export const AlertBannerWithCustomIcon: Story = {
  ...AlertBannerTemplate,
  args: {
    variant: "dark",
    customIcon: [<SvgBcOutlineIcon />],
    children: ["This alert banner has a custom icon"],
  },
};

export const AlertBannerWithButton: Story = {
  ...AlertBannerTemplate,
  args: {
    variant: "danger",
    children: [
      "This alert banner also renders a call to action using a Button component",
      <Button variant="secondary" size="small">
        Take an action
      </Button>,
    ],
  },
};
