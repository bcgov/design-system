import type { Meta, StoryObj } from "@storybook/react";

import {
  Button,
  Menu,
  MenuItem,
  MenuSection,
  MenuTrigger,
  SubmenuTrigger,
  SvgChevronDownIcon,
} from "../components";
import { MenuProps, MenuSectionHeader } from "../components/Menu";

const meta = {
  title: "Components/Menu/Menu",
  component: Menu,
  parameters: { layout: "centered" },
  argTypes: {
    children: {
      control: { type: "object" },
      description: "Expects an array of `MenuItem` components",
    },
    items: {
      control: { type: "object" },
      description: "Array of objects to be rendered as Menu items",
    },
    disabledKeys: {
      control: { type: "object" },
      description: "Selectively disables individual menu items",
    },
    selectedKeys: {
      control: { type: "object" },
      description: "The currently selected keys in the collection (controlled)",
    },
    defaultSelectedKeys: {
      control: { type: "object" },
      description: "The initial selected keys in the collection (uncontrolled)",
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

const MenuItems = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
];

export const MenuTemplate: Story = {
  args: {
    children: [<MenuItem>Item 1</MenuItem>],
  },
  render: ({ ...args }: MenuProps<object>) => (
    <MenuTrigger>
      <Button variant="secondary">
        Open the menu <SvgChevronDownIcon />
      </Button>
      <Menu {...args} />
    </MenuTrigger>
  ),
};

export const MenuWithSubmenu: Story = {
  args: {
    children: [
      <MenuItem id="1">Item 1</MenuItem>,
      <MenuItem id="2">Item 2</MenuItem>,
      [
        <SubmenuTrigger>
          <MenuItem>Submenu</MenuItem>
          <Menu>
            <MenuItem id="sub-1">Submenu item 1</MenuItem>
            <MenuItem id="sub-2">Submenu item 2</MenuItem>
          </Menu>
        </SubmenuTrigger>,
      ],
    ],
  },
  render: ({ ...args }: MenuProps<object>) => (
    <MenuTrigger>
      <Button variant="secondary">
        Open the menu <SvgChevronDownIcon />
      </Button>
      <Menu {...args} />
    </MenuTrigger>
  ),
};

export const MenuWithDynamicItems: Story = {
  ...MenuTemplate.args,
  args: { items: MenuItems },
  render: () => (
    <MenuTrigger>
      <Button>Open the menu</Button>
      <Menu items={MenuItems}>
        {(item) => <MenuItem>{item.name}</MenuItem>}
      </Menu>
    </MenuTrigger>
  ),
};

export const MenuWithSections: Story = {
  args: {
    children: [
      <MenuSection id="section-1">
        <MenuSectionHeader>Section 1</MenuSectionHeader>
        <MenuItem id="1">Item 1</MenuItem>
        <MenuItem id="2">Item 2</MenuItem>
      </MenuSection>,
      <MenuSection id="section-2">
        <MenuSectionHeader>Section 2</MenuSectionHeader>
        <MenuItem id="3">Item 3</MenuItem>
        <MenuItem id="4">Item 4</MenuItem>
      </MenuSection>,
    ],
  },
  render: ({ ...args }: MenuProps<object>) => (
    <MenuTrigger>
      <Button variant="secondary">Open the menu</Button>
      <Menu {...args} />
    </MenuTrigger>
  ),
};
