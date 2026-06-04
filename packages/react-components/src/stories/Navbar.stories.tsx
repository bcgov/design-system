import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Header, Link, Navbar } from "../components";

import { NavbarProps } from "@/components/Navbar";

const meta = {
  title: "Navigation and structure/Navbar",
  component: Navbar,
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
        "Navbar padding and spacing. Also sets the size of child components like `Button` and `Link`",
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavbarTemplate: Story = {
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
  render: ({ ...args }: NavbarProps) => <Navbar {...args} />,
};

export const HeaderWithNavbar: Story = {
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
  render: ({ ...args }: NavbarProps) => (
    <>
      <Header title="Example header with navbar">
        <Button size="small">Log in</Button>
      </Header>
      <Navbar {...args} />
    </>
  ),
};

export const Small: Story = {
  ...NavbarTemplate,
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
