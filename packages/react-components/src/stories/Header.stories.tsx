import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Header } from "../components";
import { HeaderProps } from "../components/Header";

const meta = {
  title: "Components/Header/Header",
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
    logoImage: iconPlaceholder,
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
