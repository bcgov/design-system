import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  SubmenuTrigger,
  SvgChevronDownIcon,
  SvgCheckCircleIcon,
  MenuSection,
  MenuSectionHeader,
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
      {
        id: 3,
        href: "#",
        children: "Link 3",
        iconLeft: <SvgCheckCircleIcon />,
      },
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

export const SectionedMenu: Story = {
  args: {
    sections: [
      {
        id: "section1",
        header: "Section 1",
        items: [
          { id: 1, href: "#", children: "Link 1" },
          { id: 2, href: "#", children: "Link 2" },
        ],
      },
      {
        id: "section2",
        header: "Section 2",
        items: [
          { id: 3, href: "#", children: "Link 3" },
          { id: 4, href: "#", children: "Link 4" },
        ],
      },
    ],
  },
  render: ({ ...args }) => (
    <MenuTrigger>
      <Button variant="secondary" size="small">
        Menu with sections <SvgChevronDownIcon />
      </Button>
      <Menu {...args} />
    </MenuTrigger>
  ),
};

export const SubMenu: Story = {
  args: {
    size: "medium",
    children: [
      <MenuSection key="section1">
        <MenuSectionHeader>Section 1</MenuSectionHeader>
        <MenuItem href="#">Link 1</MenuItem>
        <MenuItem href="#">Link 2</MenuItem>
        <SubmenuTrigger>
          <MenuItem href="#">Submenu</MenuItem>
          <Menu>
            <MenuItem href="#">Sublink 1</MenuItem>
            <MenuItem href="#">Sublink 2</MenuItem>
          </Menu>
        </SubmenuTrigger>
      </MenuSection>,
      <MenuSection key="section2">
        <MenuSectionHeader>Section 2</MenuSectionHeader>
        <MenuItem href="#">Link 1</MenuItem>
        <MenuItem href="#">Link 2</MenuItem>
        <SubmenuTrigger>
          <MenuItem href="#">Submenu</MenuItem>
          <Menu>
            <MenuItem href="#">Sublink 1</MenuItem>
            <MenuItem href="#">Sublink 2</MenuItem>
          </Menu>
        </SubmenuTrigger>
      </MenuSection>,
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
