import type { Meta, StoryObj } from "@storybook/react";

import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  SvgChevronDownIcon,
} from "../components";

import { MenuItemProps } from "../components/MenuItem";

const meta = {
  title: "Components/Menu/MenuItem",
  component: MenuItem,
  parameters: { layout: "centered" },
  argTypes: {
    children: {
      control: { type: "object" },
      description: "Populates menu item label",
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium"],
      description: "Sets the label text size",
    },
    id: {
      control: { type: "text" },
      description: "Unique identifier for the menu item (required)",
    },
    href: {
      control: { type: "text" },
      description: "A URL to link to",
    },
    hrefLang: {
      control: { type: "text" },
      description: "Hints at the human language of the linked URL",
    },
    rel: {
      control: { type: "text" },
      description:
        "The relationship between the linked resource and the current page",
    },
    target: {
      control: { type: "text" },
      description: "The target window for the link",
    },
    value: {
      control: { type: "object" },
      description: "The object value that this item represents",
    },
    textValue: {
      control: { type: "text" },
      description:
        "	A string representation of the item's contents, used for features like typeahead",
    },
    isDisabled: {
      control: { type: "boolean" },
      description: "Whether the menu item is disabled",
    },
  },
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuItemTemplate: Story = {
  args: {
    size: "medium",
    children: ["Menu item"],
    id: "1",
    isDisabled: false,
  },
  render: ({ ...args }: MenuItemProps) => (
    <MenuTrigger>
      <Button variant="secondary">
        Open the menu <SvgChevronDownIcon />
      </Button>
      <Menu>
        <MenuItem {...args} />
      </Menu>
    </MenuTrigger>
  ),
};

export const DisabledMenuItem: Story = {
  args: {
    size: "medium",
    children: ["Item 2 is disabled"],
    id: "2",
    isDisabled: true,
  },
  render: ({ ...args }: MenuItemProps) => (
    <MenuTrigger>
      <Button variant="secondary">
        Open the menu <SvgChevronDownIcon />
      </Button>
      <Menu>
        <MenuItem id="1" size="medium">
          Item 1
        </MenuItem>
        <MenuItem {...args} />
      </Menu>
    </MenuTrigger>
  ),
};
