import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  SvgChevronDownIcon,
} from "../components";

const meta = {
  title: "Navigation and structure/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
      description: "Sets the size of the menu items",
    },
    children: {
      control: { type: "object" },
      description: "Array of menu items",
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuTemplate: Story = {
  args: {
    size: "medium",
    children: [
      <MenuItem href="#">Link</MenuItem>,
      <MenuItem href="#">Link</MenuItem>,
      <MenuItem href="#">Link</MenuItem>,
    ],
  },
  render: ({ ...args }) => (
    <MenuTrigger>
      <Button variant="secondary">
        Menu <SvgChevronDownIcon />
      </Button>
      <Menu {...args} />
    </MenuTrigger>
  ),
};

export const SmallMenu: Story = {
  args: {
    size: "small",
    items: [
      { id: 1, href: "#", children: "Link 1" },
      { id: 2, href: "#", children: "Link 2" },
      { id: 3, href: "#", children: "Link 3" },
    ],
  },
  render: ({ ...args }) => (
    <MenuTrigger>
      <Button variant="secondary" size="small">
        Menu <SvgChevronDownIcon />
      </Button>
      <Menu {...args} />
    </MenuTrigger>
  ),
};
