import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  SvgChevronDownIcon,
  SvgCheckCircleIcon,
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
    iconLeft: <SvgCheckCircleIcon />,
  },
  render: ({ ...args }) => (
    <MenuTrigger>
      <Button variant="secondary">
        Menu <SvgChevronDownIcon />
      </Button>
      <Menu>
        <MenuItem {...args} />
      </Menu>
    </MenuTrigger>
  ),
};

export const SmallMenuItem: Story = {
  ...MenuItemTemplate,
  args: { ...MenuItemTemplate.args, size: "small" },
};

export const LinkedMenuItem: Story = {
  ...MenuItemTemplate,
  args: {
    ...MenuItemTemplate.args,
    label: "Linked menu item",
    href: "https://www.example.org",
    hrefLang: "en-US",
    target: "_blank",
  },
};

export const DisabledMenuItem: Story = {
  ...MenuItemTemplate,
  args: { ...MenuItemTemplate.args, isDisabled: true },
};
