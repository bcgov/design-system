import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, DialogTrigger, Popover, Text } from "../components";

const meta = {
  title: "Utility/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isNonModal: {
      control: "boolean",
      description:
        "Whether elements outside the popover may be interacted with by assistive technologies",
      table: { defaultValue: { summary: "false" } },
    },
    isKeyboardDismissDisabled: {
      control: "boolean",
      description:
        "Whether pressing the escape key to close the popover should be disabled",
      table: { defaultValue: { summary: "false" } },
    },
    children: {
      control: "object",
      description:
        "The content of the popover, usually a combination of text and interactive elements",
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PopoverTemplate: Story = {
  args: {
    isNonModal: false,
    isKeyboardDismissDisabled: false,
    children: [<Text>This is some content inside a popover</Text>],
  },
  render: ({ ...args }) => (
    <DialogTrigger>
      <Button>Open popover</Button>
      <Popover {...args} />
    </DialogTrigger>
  ),
};
