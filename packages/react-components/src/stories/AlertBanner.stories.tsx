import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn } from "storybook/test";

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
      type: "function",
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
    onClose: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: /close/i }));
    expect(args.onClose).toHaveBeenCalled();
  },
  render: ({ ...args }: AlertBannerProps) => (
    <AlertBanner {...args} data-testid="alert-banner" />
  ),
};

export const SuccessBanner: Story = {
  ...AlertBannerTemplate,
  args: {
    variant: "success",
    children: ["This banner uses the 'success' theme"],
    onClose: fn(),
  },
  play: async ({ canvas }) => {
    expect(
      canvas.getByText("This banner uses the 'success' theme")
    ).toBeInTheDocument();
    expect(canvas.getByTestId("alert-banner")).toHaveStyle({
      backgroundColor: "rgb(66,129,74)",
    });
  },
};

export const WarningBanner: Story = {
  ...AlertBannerTemplate,
  args: {
    variant: "warning",
    children: ["This banner uses the 'warning' theme"],
    onClose: fn(),
  },
  play: async ({ canvas }) => {
    expect(
      canvas.getByText("This banner uses the 'warning' theme")
    ).toBeInTheDocument();
    expect(canvas.getByTestId("alert-banner")).toHaveStyle({
      backgroundColor: "rgb(248, 187, 71)",
    });
  },
};

export const DangerBanner: Story = {
  ...AlertBannerTemplate,
  args: {
    variant: "danger",
    children: ["This banner uses the 'danger' theme"],
    onClose: fn(),
  },
  play: async ({ canvas }) => {
    expect(
      canvas.getByText("This banner uses the 'danger' theme")
    ).toBeInTheDocument();
    expect(canvas.getByTestId("alert-banner")).toHaveStyle({
      backgroundColor: "rgb(206, 62, 57)",
    });
  },
};

export const DarkBanner: Story = {
  ...AlertBannerTemplate,
  args: {
    variant: "black",
    children: ["This banner uses the 'black' theme"],
    onClose: fn(),
  },
  play: async ({ canvas }) => {
    expect(
      canvas.getByText("This banner uses the 'black' theme")
    ).toBeInTheDocument();
    expect(canvas.getByTestId("alert-banner")).toHaveStyle({
      backgroundColor: "rgb(37, 36, 35)",
    });
  },
};

export const BannerWithCustomIcon: Story = {
  ...AlertBannerTemplate,
  args: {
    customIcon: [<SvgBcOutlineIcon />],
    children: ["This alert banner has a custom icon"],
    onClose: fn(),
  },
  play: async ({ canvas }) => {
    expect(
      canvas
        .getByTestId("alert-banner")
        .querySelector('svg[id="bc-outline-icon"]')
    ).toBeInTheDocument();
  },
};

export const BannerWithoutIcon: Story = {
  ...AlertBannerTemplate,
  args: {
    isIconHidden: true,
    children: ["This banner has its theme icon disabled"],
    onClose: fn(),
  },
  play: async ({ canvas }) => {
    expect(
      canvas
        .getByTestId("alert-banner")
        .querySelector(".bcds-Alert-Banner--Icon")
    ).not.toBeInTheDocument();
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
    onClose: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    expect(
      canvas.getByRole("button", { name: "Take an action" })
    ).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", { name: /close/i }));
    expect(args.onClose).toHaveBeenCalled();
  },
};

export const UncloseableBanner: Story = {
  ...AlertBannerTemplate,
  args: {
    isCloseable: false,
    children: ["The close button is disabled on this alert banner"],
  },
  play: async ({ canvas }) => {
    expect(canvas.queryByRole("button")).not.toBeInTheDocument();
  },
};
