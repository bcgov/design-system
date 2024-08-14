import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox, CheckboxGroup } from "../components";
import { CheckboxProps } from "../components/Checkbox";
import { CheckboxGroupProps } from "../components/CheckboxGroup";

const meta = {
  title: "Components/Checkbox/CheckboxGroup",
  component: CheckboxGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxGroupTemplate: Story = {
  args: {},
  render: ({ ...args }: CheckboxGroupProps) => <CheckboxGroup {...args} />,
};
