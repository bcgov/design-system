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
  title: "Navigation and structure/Menu/MenuTrigger",
  component: MenuTrigger,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: { type: "object" },
      description: "The trigger element and menu content",
    },
    trigger: {
      options: ["press", "longPress"],
      control: { type: "radio" },
    },
    isOpen: {
      control: { type: "boolean" },
      description: "Whether the overlay is open by default (controlled)",
    },
    defaultOpen: {
      control: { type: "boolean" },
      description: "Whether the overlay is open by default (uncontrolled)",
    },
    onOpenChange: {
      control: { type: "object" },
      description:
        "Handler that is called when the overlay's open state changes",
    },
  },
} satisfies Meta<typeof MenuTrigger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuTriggerTemplate: Story = {
  args: {
    children: [
      <Button variant="secondary">
        Menu <SvgChevronDownIcon />
      </Button>,
      <Menu>
        <MenuItem
          label="Menu item 1"
          description="Menu item description"
          iconLeft={<SvgBcOutlineIcon />}
        />
      </Menu>,
    ],
    trigger: "press",
  },
  render: ({ ...args }) => <MenuTrigger {...args} />,
};

export const LongPress: Story = {
  ...MenuTriggerTemplate,
  args: {
    ...MenuTriggerTemplate.args,
    trigger: "longPress",
  },
};
