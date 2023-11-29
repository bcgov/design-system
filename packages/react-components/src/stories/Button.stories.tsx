import type { Meta, StoryObj } from "@storybook/react";

import Button, { ButtonProps } from "../components/Button";

const meta = {
  title: "Components/Button/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["medium", "small"],
      control: { type: "radio" },
      description: "Defaults to 'medium', also supports 'small",
    },
    variant: {
      options: ["primary", "secondary", "tertiary", "link"],
      control: { type: "radio" },
      description:
        "Defaults to 'primary', also 'secondary', 'tertiary', 'link'",
    },
    onPress: {
      control: "function",
      description: "Click/press handler",
    },
    danger: {
      control: "boolean",
      description: "Is the button's function dangerous/destructive",
    },
    isDisabled: {
      control: "boolean",
      description: "Is the button disabled",
    },
    isIconButton: {
      control: "boolean",
      description: "Is the button a square button with only an icon inside",
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
    children: iconPlaceholder,
    isIconButton: true,
  },
};

export const LeftIcon: Story = {
  ...ButtonTemplate,
  args: {
    children: <>{iconPlaceholder} Left icon</>,
  },
};

export const RightIcon: Story = {
  ...ButtonTemplate,
  args: {
    children: <>Right icon {iconPlaceholder}</>,
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

export const PlaceholderIconButton: Story = {
  ...ButtonTemplate,
  ...Icon,
  args: {
    isIconButton: true,
    children: <>{iconPlaceholder}</>,
    size: "medium",
  },
};
