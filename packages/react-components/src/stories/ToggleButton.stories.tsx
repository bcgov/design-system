import type { Meta, StoryObj } from "@storybook/react";

import { ToggleButton } from "../components";

const meta = {
  title: "Components/Toggle Button/Toggle Button",
  component: ToggleButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleButtonTemplate: Story = {
  args: {},
};
