import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "../components";
import { CheckboxProps } from "../components/Checkbox";

const meta = {
  title: "Components/CheckboxGroup/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxTemplate: Story = {
  args: { children: "This is a checkbox label" },
  render: ({ ...args }: CheckboxProps) => <Checkbox {...args} />,
};
