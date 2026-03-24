import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Header } from "../components";
import { HeaderProps } from "../components/Header";
import SvgPlaceholderIcon from "@/components/Icons/SvgPlaceholderIcon";

const meta = {
  title: "Navigation and structure/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderTemplate: Story = {
  args: {},
  render: ({ ...args }: HeaderProps) => <Header {...args} />,
};

const skipLinks = [
  <a href="#main">Skip to main content</a>,
  <a href="#navigation">Skip to main navigation</a>,
  <a href="#accessibility">Accessibility Statement</a>,
];

const LoginButton = () => {
  return (
    <Button variant="secondary" size="small">
      Log in
    </Button>
  );
};

export const HeaderWithTitleElement: Story = {
  args: {
    title: "Title appears in H1 tag",
    titleElement: "h1",
  },
};

export const HeaderWithCustomLogoAndLink: Story = {
  args: {
    logoImage: <SvgPlaceholderIcon />,
    logoLinkElement: <a href="/custom-link" title="Custom logo link title" />,
    title: "Header with custom logo and link element",
  },
};

export const HeaderWithTitleAndSkipLinks: Story = {
  args: {
    title: "Skip links example",
    skipLinks: skipLinks,
  },
};

export const HeaderWithChildren: Story = {
  args: {
    title: "Header example with children",
    children: <LoginButton />,
  },
};

export const HeaderWithTheWorks: Story = {
  args: {
    title: "Government of B.C.",
    logoLinkElement: <a href="/home" title="Home" />,
    skipLinks: skipLinks,
    children: <LoginButton />,
  },
};
