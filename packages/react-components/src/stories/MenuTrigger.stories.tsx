import type { Meta, StoryObj } from "@storybook/react";

import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  SvgChevronDownIcon,
} from "../components";
import { MenuTriggerProps } from "react-aria-components";

const meta = {
  title: "Components/Menu/MenuTrigger",
  component: MenuTrigger,
  parameters: { layout: "centered" },
  argTypes: {
    children: {
      control: { type: "object" },
      description:
        "Expects a trigger element (like a `Button`) and a `Menu` component",
    },
    trigger: {
      control: { type: "text" },
      description: "How the menu is triggered",
    },
    isOpen: {
      control: { type: "boolean" },
      description: "Whether the overlay is open by default (controlled)",
    },
    defaultOpen: {
      control: { type: "boolean" },
      description: "Whether the overlay is open by default (uncontrolled)",
    },
  },
} satisfies Meta<typeof MenuTrigger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuTriggerTemplate: Story = {
  args: {
    children: [
      <Button variant="secondary">
        Open the menu <SvgChevronDownIcon />
      </Button>,
      <Menu>
        <MenuItem id="1">Item 1</MenuItem>
        <MenuItem id="2">Item 2</MenuItem>
        <MenuItem id="3">Item 3</MenuItem>
      </Menu>,
    ],
    trigger: "press",
    defaultOpen: false,
  },
  render: ({ ...args }: MenuTriggerProps) => <MenuTrigger {...args} />,
};
