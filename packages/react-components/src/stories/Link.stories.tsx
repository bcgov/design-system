import type { Meta, StoryObj } from "@storybook/react";
import * as tokens from "@bcgov/design-tokens/js";

import { Link } from "../components";
import { LinkProps } from "@/components/Link";

const meta = {
  title: "Utility/Link",
  component: Link,
  parameters: { layout: "centered" },
  argTypes: {
    children: {
      control: { type: "object" },
      description: "Populates link text",
    },
    href: {
      control: { type: "text" },
      description: "Destination URL",
    },
    onPress: {
      control: { type: "object" },
      description: "Callback function run on press. Use instead of `href`",
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
      description: "Sets text size",
    },
    isButton: {
      control: { type: "boolean" },
      description: "Applies button styling",
    },
    buttonVariant: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "radio" },
      description:
        "Selects which button style is used. Requires `isButton` to be `true`",
    },
    isDisabled: {
      control: { type: "boolean" },
      description: "Whether a link is enabled or disabled",
    },
    isUnstyled: {
      control: { type: "boolean" },
      description:
        "Overrides all styling, allowing link to inherit styling from its parent",
    },
    ariaLabel: {
      control: { type: "text" },
      description:
        "Sets aria-label attribute, use if not providing a visible text label",
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LinkTemplate: Story = {
  args: {
    size: "medium",
    children: ["Link text"],
    onPress: () => alert("onPress()"),
    isDisabled: false,
  },
  render: ({ ...args }: LinkProps) => <Link {...args} />,
};

export const SmallLink: Story = {
  ...LinkTemplate,
  args: {
    size: "small",
    children: ["This link uses the default small text size"],
    onPress: () => alert("onPress()"),
  },
};

export const MediumLink: Story = {
  ...LinkTemplate,
  args: {
    size: "medium",
    children: ["This link uses the medium text size"],
    onPress: () => alert("onPress()"),
  },
};

export const LargeLink: Story = {
  ...LinkTemplate,
  args: {
    size: "large",
    children: ["This link uses the large text size"],
    onPress: () => alert("onPress()"),
  },
};

export const DangerLink: Story = {
  ...LinkTemplate,
  args: {
    danger: true,
    children: ["This link is destructive"],
    onPress: () => alert("onPress()"),
  },
};

export const DisabledLink: Story = {
  ...LinkTemplate,
  args: {
    isDisabled: true,
    size: "medium",
    children: ["This link is disabled"],
  },
};

export const LinkInHeading: Story = {
  args: {
    children: ["This link"],
    href: "#",
    isUnstyled: true,
  },
  render: ({ ...args }: LinkProps) => (
    <h2 style={{ font: tokens.typographyBoldH2 }}>
      <Link {...args} /> is part of an H2 heading
    </h2>
  ),
};

export const PrimaryLinkButton: Story = {
  args: {
    children: ["This is a link button"],
    isButton: true,
    buttonVariant: "primary",
    onPress: () => alert("onPress()"),
  },
};

export const SecondaryLinkButton: Story = {
  args: {
    children: ["This is a link button"],
    isButton: true,
    buttonVariant: "secondary",
    onPress: () => alert("onPress()"),
  },
};

export const TertiaryLinkButton: Story = {
  args: {
    children: ["This is a link button"],
    isButton: true,
    buttonVariant: "tertiary",
    onPress: () => alert("onPress()"),
  },
};

export const DisabledLinkButton: Story = {
  args: {
    children: ["This link button is disabled"],
    isButton: true,
    buttonVariant: "primary",
    isDisabled: true,
    onPress: () => alert("onPress()"),
  },
};

export const DangerLinkButton: Story = {
  args: {
    children: ["This is a destructive link button"],
    isButton: true,
    buttonVariant: "primary",
    danger: true,
    onPress: () => alert("onPress()"),
  },
};

export const SmallLinkButton: Story = {
  args: {
    children: ["This is a small link button"],
    isButton: true,
    buttonVariant: "primary",
    size: "small",
    onPress: () => alert("onPress()"),
  },
};
