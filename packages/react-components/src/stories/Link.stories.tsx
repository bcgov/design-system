import type { Meta, StoryObj } from "@storybook/react";
import * as tokens from "@bcgov/design-tokens/js";

import { Link, SvgInfoIcon } from "../components";
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
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
      description: "Sets text size",
    },
    isDisabled: {
      control: { type: "boolean" },
      description: "Whether a link is enabled or disabled",
    },
    href: {
      control: { type: "text" },
      description: "Destination URL",
    },
    onPress: {
      control: { type: "object" },
      description: "Callback function run on press. Use instead of `href`",
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

export const DisabledLink: Story = {
  ...LinkTemplate,
  args: {
    isDisabled: true,
    size: "medium",
    children: ["This link is disabled"],
  },
};

export const LinkWithLeftIcon: Story = {
  ...LinkTemplate,
  args: {
    size: "small",
    children: [<SvgInfoIcon />, "This link has an icon"],
    onPress: () => alert("onPress()"),
  },
};

export const LinkWithRightIcon: Story = {
  ...LinkTemplate,
  args: {
    size: "small",
    children: ["This link has an icon", <SvgInfoIcon />],
    onPress: () => alert("onPress()"),
  },
};

export const IconOnlyLink: Story = {
  ...LinkTemplate,
  args: {
    children: [<SvgInfoIcon />],
    ariaLabel: "Information",
    onPress: () => alert("onPress()"),
  },
};

export const LinkInHeading: Story = {
  args: { children: ["This link"], onPress: () => alert("onPress()") },
  render: ({ ...args }: LinkProps) => (
    <h2 style={{ font: tokens.typographyBoldH2 }}>
      <Link {...args} /> is part of an H2 heading
    </h2>
  ),
};
