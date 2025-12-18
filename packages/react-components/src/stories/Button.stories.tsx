import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn } from "storybook/test";

import { Button } from "../components";
import { ButtonProps } from "@/components/Button";

const meta = {
  title: "Components/Button/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["large", "medium", "small", "xsmall"],
      control: { type: "radio" },
      description: "Sets the button's size",
    },
    variant: {
      options: ["primary", "secondary", "tertiary", "link"],
      control: { type: "radio" },
      description: "Toggles between different hierarchical variants",
    },
    onPress: {
      description: "Click/press handler",
    },
    danger: {
      control: "boolean",
      description:
        "Applies a red colourway for dangerous/destructive functions",
    },
    isDisabled: {
      control: "boolean",
      description: "Sets the button to its disabled state",
    },
    isIconButton: {
      control: "boolean",
      description: "Sets the button to a square format for icon-only usages",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonTemplate: Story = {
  args: {
    children: "Button text",
    size: "medium",
    variant: "primary",
    onPress: fn(),
    danger: false,
    isDisabled: false,
    isIconButton: false,
  },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onPress).toHaveBeenCalled();
  },
  render: ({ ...args }: ButtonProps) => <Button {...args} />,
};

const iconPlaceholder = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="20px/Icon placeholder" clip-path="url(#clip0_717_6325)">
      <path
        id="Icon"
        d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 9.99996C18.3333 5.39759 14.6023 1.66663 9.99996 1.66663C5.39759 1.66663 1.66663 5.39759 1.66663 9.99996C1.66663 14.6023 5.39759 18.3333 9.99996 18.3333Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_717_6325">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const Icon: Story = {
  ...ButtonTemplate,
  args: {
    "aria-label":
      "Icon-only buttons need discernible text labels for accessibility",
    children: iconPlaceholder,
    isIconButton: true,
    onPress: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onPress).toHaveBeenCalled();
  },
};

export const LeftIcon: Story = {
  ...ButtonTemplate,
  args: {
    children: <>{iconPlaceholder} Left icon</>,
    onPress: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onPress).toHaveBeenCalled();
  },
};

export const RightIcon: Story = {
  ...ButtonTemplate,
  args: {
    children: <>Right icon {iconPlaceholder}</>,
    onPress: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onPress).toHaveBeenCalled();
  },
};

export const BothIcons: Story = {
  ...ButtonTemplate,
  args: {
    children: (
      <>
        {iconPlaceholder} Both icons {iconPlaceholder}
      </>
    ),
    onPress: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onPress).toHaveBeenCalled();
  },
};

export const Primary: Story = {
  ...ButtonTemplate,
  args: {
    children: "Primary",
    variant: "primary",
    onPress: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onPress).toHaveBeenCalled();
  },
};

export const Secondary: Story = {
  ...ButtonTemplate,
  args: {
    children: "Secondary",
    variant: "secondary",
    onPress: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onPress).toHaveBeenCalled();
  },
};

export const Tertiary: Story = {
  ...ButtonTemplate,
  args: {
    children: "Tertiary",
    variant: "tertiary",
    onPress: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onPress).toHaveBeenCalled();
  },
};

export const Link: Story = {
  ...ButtonTemplate,
  args: {
    children: "Link",
    variant: "link",
    onPress: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onPress).toHaveBeenCalled();
  },
};

export const Disabled: Story = {
  ...ButtonTemplate,
  args: {
    children: "Disabled",
    isDisabled: true,
    onPress: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onPress).not.toHaveBeenCalled();
  },
};

export const Danger: Story = {
  ...ButtonTemplate,
  args: {
    children: "Danger",
    danger: true,
    onPress: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onPress).toHaveBeenCalled();
  },
};

export const Large: Story = {
  ...ButtonTemplate,
  args: {
    children: "Large",
    size: "large",
    onPress: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onPress).toHaveBeenCalled();
  },
};

export const Medium: Story = {
  ...ButtonTemplate,
  args: {
    children: "Medium",
    size: "medium",
    onPress: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onPress).toHaveBeenCalled();
  },
};

export const Small: Story = {
  ...ButtonTemplate,
  args: {
    children: "Small",
    size: "small",
    onPress: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onPress).toHaveBeenCalled();
  },
};

export const ExtraSmall: Story = {
  ...ButtonTemplate,
  args: {
    children: "Extra small",
    size: "xsmall",
    onPress: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onPress).toHaveBeenCalled();
  },
};
