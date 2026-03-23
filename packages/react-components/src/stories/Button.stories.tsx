import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../components";
import { ButtonProps } from "@/components/Button";
import SvgPlaceholderIcon from "@/components/Icons/SvgPlaceholderIcon";

const meta = {
  title: "Inputs and controls/Button",
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
    onPress: () => alert("onPress()"),
    danger: false,
    isDisabled: false,
    isIconButton: false,
  },
  render: ({ ...args }: ButtonProps) => <Button {...args} />,
};

export const Icon: Story = {
  ...ButtonTemplate,
  args: {
    "aria-label":
      "Icon-only buttons need discernible text labels for accessibility",
    children: <SvgPlaceholderIcon />,
    isIconButton: true,
  },
};

export const LeftIcon: Story = {
  ...ButtonTemplate,
  args: {
    children: (
      <>
        <SvgPlaceholderIcon /> Left icon
      </>
    ),
  },
};

export const RightIcon: Story = {
  ...ButtonTemplate,
  args: {
    children: (
      <>
        Right icon <SvgPlaceholderIcon />
      </>
    ),
  },
};

export const BothIcons: Story = {
  ...ButtonTemplate,
  args: {
    children: (
      <>
        <SvgPlaceholderIcon /> Both icons <SvgPlaceholderIcon />
      </>
    ),
  },
};

export const Primary: Story = {
  ...ButtonTemplate,
  args: {
    children: "Primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  ...ButtonTemplate,
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  ...ButtonTemplate,
  args: {
    children: "Tertiary",
    variant: "tertiary",
  },
};

export const Link: Story = {
  ...ButtonTemplate,
  args: {
    children: "Link",
    variant: "link",
  },
};

export const Disabled: Story = {
  ...ButtonTemplate,
  args: {
    children: "Disabled",
    isDisabled: true,
  },
};

export const Danger: Story = {
  ...ButtonTemplate,
  args: {
    children: "Danger",
    danger: true,
  },
};

export const Large: Story = {
  ...ButtonTemplate,
  args: {
    children: "Large",
    size: "large",
  },
};

export const Medium: Story = {
  ...ButtonTemplate,
  args: {
    children: "Medium",
    size: "medium",
  },
};

export const Small: Story = {
  ...ButtonTemplate,
  args: {
    children: "Small",
    size: "small",
  },
};

export const ExtraSmall: Story = {
  ...ButtonTemplate,
  args: {
    children: "Extra small",
    size: "xsmall",
  },
};
