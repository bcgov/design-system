import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  SvgChevronDownIcon,
  SvgBcOutlineIcon,
} from "../components";

const meta = {
  title: "Navigation and structure/Menu/MenuItem",
  component: MenuItem,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
      description: "Sets the size of the menu item",
    },
  },
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuItemTemplate: Story = {
  args: {
    size: "medium",
    label: "Menu item 1",
    description: "Menu item description",
    iconLeft: <SvgBcOutlineIcon />,
  },
  render: ({ ...args }) => (
    <MenuTrigger defaultOpen>
      <Button variant="secondary">
        Menu <SvgChevronDownIcon />
      </Button>
      <Menu>
        <MenuItem {...args} />
        <MenuItem iconLeft={<SvgBcOutlineIcon />} label="Menu item 2" />
      </Menu>
    </MenuTrigger>
  ),
};
