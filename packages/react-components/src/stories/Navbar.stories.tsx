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
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
      description: "Sets the orientation of the navbar",
    },
    children: {
      control: { type: "object" },
      description: "Array of navigation items",
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavbarTemplate: Story = {
  args: {
    orientation: "horizontal",
    children: [
      <Link href="#">Link 1</Link>,
      <Link href="#">Link 2</Link>,
      <Link href="#">Link 3</Link>,
      <Button variant="primary">Log in</Button>,
    ],
  },
  render: ({ ...args }: NavbarProps) => <Navbar {...args} />,
};

export const HeaderWithNavbar: Story = {
  args: {
    size: "small",
    orientation: "horizontal",
    children: [
      <Link href="#" id="1">
        Link 1
      </Link>,
      <Link href="#" id="2">
        Link 2
      </Link>,
      <Link href="#" id="3">
        Link 3
      </Link>,
      <Link href="#" id="4">
        Link 4
      </Link>,
      <Link href="#" id="5">
        Link 5
      </Link>,
      <Link href="#" id="6">
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
      <Link href="#">Link 1</Link>,
      <Link href="#">Link 2</Link>,
      <Link href="#">Link 3</Link>,
      <Button variant="primary">Log in</Button>,
    ],
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    children: [
      <Link href="#">Link 1</Link>,
      <Link href="#">Link 2</Link>,
      <Link href="#">Link 3</Link>,
      <Button variant="primary">Log in</Button>,
    ],
  },
  render: ({ ...args }: NavbarProps) => <Navbar {...args} />,
};
