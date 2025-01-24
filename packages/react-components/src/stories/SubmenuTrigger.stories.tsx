import type { Meta, StoryObj } from "@storybook/react";

import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  SubmenuTrigger,
  SvgChevronDownIcon,
} from "../components";
import { SubmenuTriggerProps } from "react-aria-components";

const meta = {
  title: "Components/Menu/SubmenuTrigger",
  component: SubmenuTrigger,
  parameters: { layout: "centered" },
  argTypes: {
    children: {
      control: { type: "object" },
      description:
        "Expects a trigger element (`MenuItem`) and a submenu (`Menu`)",
    },
    delay: {
      control: { type: "number" },
      description:
        "Delay time in miliseconds before submenu appears when hovered",
    },
  },
} satisfies Meta<typeof SubmenuTrigger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SubmenuTriggerTemplate: Story = {
  args: {
    children: [
      <MenuItem id="submenu">Item 2</MenuItem>,
      <Menu>
        <MenuItem id="sub-1">Submenu item 1</MenuItem>
        <MenuItem id="sub-2">Submenu item 2</MenuItem>
        <MenuItem id="sub-3">Submenu item 3</MenuItem>
      </Menu>,
    ],
    delay: 200,
  },
  render: ({ ...args }: SubmenuTriggerProps) => (
    <MenuTrigger>
      <Button variant="secondary">
        Open the menu <SvgChevronDownIcon />
      </Button>
      <Menu>
        <MenuItem id="1">Item 1</MenuItem>
        <SubmenuTrigger {...args} />
      </Menu>
    </MenuTrigger>
  ),
};
