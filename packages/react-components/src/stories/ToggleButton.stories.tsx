import type { Meta, StoryObj } from "@storybook/react";

import { ToggleButton } from "../components";
import { ToggleButtonProps } from "../components/ToggleButton";

const meta = {
  title: "Components/Toggle Button Group/Toggle Button",
  component: ToggleButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    id: {
      control: { type: "text" },
      description: "Unique identifier for the button",
    },
    children: {
      control: { type: "object" },
      description: "Populates button text",
    },
  },
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleButtonTemplate: Story = {
  args: { children: ["Button text"], id: "1" },
  render: ({ ...args }: ToggleButtonProps) => <ToggleButton {...args} />,
};
