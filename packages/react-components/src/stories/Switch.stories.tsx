import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "../components";

const meta = {
  title: "Components/Switch/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SwitchTemplate: Story = {
  args: {},
};
