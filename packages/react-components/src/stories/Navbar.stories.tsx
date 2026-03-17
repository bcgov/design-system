import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Button,
  Link,
  Menu,
  MenuItem,
  MenuTrigger,
  Navbar,
  SvgChevronDownIcon,
} from "../components";

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
      <MenuTrigger>
        <Button variant="secondary">
          Menu <SvgChevronDownIcon />
        </Button>
        <Menu>
          <MenuItem href="#">Link</MenuItem>
          <MenuItem href="#">Link</MenuItem>
          <MenuItem href="#">Link</MenuItem>
        </Menu>
      </MenuTrigger>,
    ],
  },
  render: ({ ...args }: NavbarProps) => <Navbar {...args} />,
};

export const VerticalNavbarTemplate: Story = {
  args: {
    orientation: "vertical",
    children: [
      <Link href="#">Link 1</Link>,
      <Link href="#">Link 2</Link>,
      <Link href="#">Link 3</Link>,
      <MenuTrigger>
        <Button variant="secondary">
          Menu <SvgChevronDownIcon />
        </Button>
        <Menu>
          <MenuItem href="#">Link</MenuItem>
          <MenuItem href="#">Link</MenuItem>
          <MenuItem href="#">Link</MenuItem>
        </Menu>
      </MenuTrigger>,
    ],
  },
  render: ({ ...args }: NavbarProps) => <Navbar {...args} />,
};
