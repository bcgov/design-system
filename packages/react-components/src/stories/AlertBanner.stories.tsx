import type { Meta, StoryObj } from "@storybook/react-vite";

import { AlertBanner } from "../components";
import { AlertBannerProps } from "@/components/AlertBanner";
import { Button } from "@/components";
import { SvgBcOutlineIcon } from "@/components";

const meta = {
  title: "Components/AlertBanner/AlertBanner",
  component: AlertBanner,
  argTypes: {
    variant: {
      options: ["info", "success", "warning", "danger", "black"],
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
    variant: "info",
    isIconHidden: false,
    isCloseable: true,
    role: "status",
    children: ["This is an alert banner in its default configuration"],
    onClose: () => alert("onClose()"),
  },
  render: ({ ...args }: AlertBannerProps) => <AlertBanner {...args} />,
};

export const SuccessBanner: Story = {
  ...AlertBannerTemplate,
  args: {
    variant: "success",
    children: ["This banner uses the 'success' theme"],
  },
};

export const WarningBanner: Story = {
  ...AlertBannerTemplate,
  args: {
    variant: "warning",
    children: ["This banner uses the 'warning' theme"],
  },
};

export const DangerBanner: Story = {
  ...AlertBannerTemplate,
  args: {
    variant: "danger",
    children: ["This banner uses the 'danger' theme"],
  },
};

export const DarkBanner: Story = {
  ...AlertBannerTemplate,
  args: {
    variant: "black",
    children: ["This banner uses the 'black' theme"],
  },
};

export const BannerWithCustomIcon: Story = {
  ...AlertBannerTemplate,
  args: {
    customIcon: [<SvgBcOutlineIcon />],
    children: ["This alert banner has a custom icon"],
  },
};

export const BannerWithoutIcon: Story = {
  ...AlertBannerTemplate,
  args: {
    isIconHidden: true,
    children: ["This banner has its theme icon disabled"],
  },
};

export const BannerWithButton: Story = {
  ...AlertBannerTemplate,
  args: {
    children: [
      "This alert banner also renders a call to action using a Button component",
      <Button variant="secondary" size="small">
        Take an action
      </Button>,
    ],
  },
};

export const UncloseableBanner: Story = {
  ...AlertBannerTemplate,
  args: {
    isCloseable: false,
    children: ["The close button is disabled on this alert banner"],
  },
};
