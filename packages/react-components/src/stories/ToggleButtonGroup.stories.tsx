import type { Meta, StoryObj } from "@storybook/react";

import { ToggleButtonGroup } from "../components";
import { ToggleButtonGroupProps } from "../components/ToggleButtonGroup";

const meta = {
  title: "Components/Toggle Button Group/Toggle Button Group",
  component: ToggleButtonGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: { type: "object" },
      description: "Expects an array of Toggle Button components",
    },
  },
} satisfies Meta<typeof ToggleButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleButtonGroupTemplate: Story = {
  args: {},
  render: ({ ...args }: ToggleButtonGroupProps) => (
    <ToggleButtonGroup {...args} />
  ),
};
