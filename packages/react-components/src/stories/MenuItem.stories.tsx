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
    label: {
      control: { type: "text" },
      description: "Primary text label for the menu item",
    },
    description: {
      control: { type: "text" },
      description: "Secondary text description for the menu item",
    },
    iconLeft: {
      control: { type: "object" },
      description: "Adds an icon to the left of the menu item",
    },
    children: {
      control: { type: "object" },
      description:
        "Content of the menu item, for use in place of `label` and `description`",
    },
    id: {
      control: { type: "text" },
      description: "Unique identifier for the menu item",
    },
    textValue: {
      control: { type: "text" },
      description:
        "Used for typeahead and accessibility. Defaults to `children` if not set",
    },
    isDisabled: {
      control: { type: "boolean" },
      description: "Disables the menu item",
    },
    href: {
      control: { type: "text" },
      description: "A URL to link to",
    },
    target: {
      control: { type: "text" },
      description: "Target window for `href`",
    },
    download: {
      control: { type: "text" },
      description:
        "Causes browser to download the linked URL instead of opening it",
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
        <MenuItem
          iconLeft={<SvgBcOutlineIcon />}
          label="Menu item 2"
          isDisabled
        />
      </Menu>
    </MenuTrigger>
  ),
};
