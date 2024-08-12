import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonGroup } from "../components";
import { ButtonGroupProps } from "@/components/ButtonGroup";

const meta = {
  title: "Utility/Button group",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
      description: "Layout of button group",
    },
    "aria-label": {
      control: { type: "text" },
      description: "Semantic label for the button group",
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonGroupTemplate: Story = {
  args: {
    orientation: "horizontal",
    children: [
      <Button variant="primary">Button 1</Button>,
      <Button variant="secondary">Button 2</Button>,
      <Button variant="secondary">Button 3</Button>,
    ],
  },
  render: ({ ...args }: ButtonGroupProps) => <ButtonGroup {...args} />,
};

export const VerticalButtonGroup: Story = {
  ...ButtonGroupTemplate,
  args: {
    orientation: "vertical",
    children: [
      <Button variant="primary">Button 1</Button>,
      <Button variant="secondary">Button 2</Button>,
      <Button variant="secondary">Button 3</Button>,
    ],
  },
};
