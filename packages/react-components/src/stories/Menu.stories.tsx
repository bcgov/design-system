import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  MenuSection,
  MenuSectionHeader,
  Separator,
  SubmenuTrigger,
  SvgChevronDownIcon,
  SvgCheckCircleIcon,
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
      description:
        "Sets the size of the menu items. Does not affect the `MenuTrigger` element",
    },
    items: {
      control: { type: "object" },
      description:
        "Use for a simple list of menu items. Expects an array of objects with `MenuItem` props",
    },
    sections: {
      control: { type: "object" },
      description:
        "Use for a sectioned menu. Expects an array of objects with `MenuSection` props, each containing an `items` array",
    },
    children: {
      control: { type: "object" },
      description:
        "Use instead of `items` or `sections` to manually compose a menu",
    },
    selectionMode: {
      options: ["none", "single", "multiple"],
      control: { type: "radio" },
      description: "The type of selection that is allowed",
    },
    disallowEmptySelection: {
      control: { type: "boolean" },
      description: "Whether the menu allows empty selection",
    },
    selectedKeys: {
      control: { type: "object" },
      description: "The currently-selected keys in the menu (controlled)",
    },
    defaultSelectedKeys: {
      control: { type: "object" },
      description: "The initial selected keys in the menu (uncontrolled)",
    },
    disabledKeys: {
      control: { type: "object" },
      description: "The keys of the items that are disabled",
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

export const Items: Story = {
  args: {
    items: [
      { id: 1, href: "#", label: "Link 1", description: "Link 1 description" },
      { id: 2, href: "#", label: "Link 2", description: "Link 2 description" },
      {
        id: 3,
        href: "#",
        label: "Link 3",
        description: "Link 3 description",
        iconLeft: <SvgCheckCircleIcon />,
      },
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
          <Menu placement="right">
            <MenuItem href="#">Sublink 1</MenuItem>
            <MenuItem href="#">Sublink 2</MenuItem>
          </Menu>
        </SubmenuTrigger>
      </MenuSection>,
      <Separator size="small" />,
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
