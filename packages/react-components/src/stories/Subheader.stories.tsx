import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Header, Link, Subheader } from "../components";

import { SubheaderProps } from "@/components/Subheader";

const meta = {
  title: "Navigation and structure/Subheader",
  component: Subheader,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: { type: "object" },
      description: "Array of navigation items",
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium"],
      description:
        "Subheader padding and spacing. Also sets the size of child components like `Button` and `Link`",
    },
    ariaLabel: {
      control: { type: "text" },
      description: "ARIA label for the navigation region",
    },
  },
} satisfies Meta<typeof Subheader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SubheaderTemplate: Story = {
  args: {
    children: [
      <Link href="#" key="1">
        Link 1
      </Link>,
      <Link href="#" key="2">
        Link 2
      </Link>,
      <Link href="#" key="3">
        Link 3
      </Link>,
      <Button variant="primary" key="4">
        Log in
      </Button>,
    ],
  },
  render: ({ ...args }: SubheaderProps) => <Subheader {...args} />,
};

export const HeaderWithSubheader: Story = {
  args: {
    size: "small",
    ariaLabel: "Secondary navigation",
    children: [
      <Link href="#" key="1">
        Link 1
      </Link>,
      <Link href="#" key="2">
        Link 2
      </Link>,
      <Link href="#" key="3">
        Link 3
      </Link>,
      <Link href="#" key="4">
        Link 4
      </Link>,
      <Link href="#" key="5">
        Link 5
      </Link>,
      <Link href="#" key="6">
        Link 6
      </Link>,
    ],
  },
  render: ({ ...args }: SubheaderProps) => (
    <>
      <Header title="Example header with navbar">
        <Button size="small">Log in</Button>
      </Header>
      <Subheader {...args} />
    </>
  ),
};

export const Small: Story = {
  ...SubheaderTemplate,
  args: {
    size: "small",
    children: [
      <Link href="#" key="1">
        Link 1
      </Link>,
      <Link href="#" key="2">
        Link 2
      </Link>,
      <Link href="#" key="3">
        Link 3
      </Link>,
      <Button variant="primary" key="4">
        Log in
      </Button>,
    ],
  },
};
