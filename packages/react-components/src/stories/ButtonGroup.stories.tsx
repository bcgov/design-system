import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonGroup } from "../components";
import { ButtonGroupProps } from "@/components/ButtonGroup";

const meta = {
  title: "Utility/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonGroupTemplate: Story = {
  args: {},
  render: ({ ...args }: ButtonGroupProps) => <ButtonGroup {...args} />,
};
