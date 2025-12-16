import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, ButtonGroup } from "../components";
import { ButtonGroupProps } from "@/components/ButtonGroup";

const meta = {
  title: "Inputs and controls/Button/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
      description: "Layout of button group as a whole",
    },
    alignment: {
      options: ["start", "center", "end"],
      control: { type: "radio" },
      description: "Alignment of buttons within group",
    },
    ariaLabel: {
      control: { type: "text" },
      description: "Semantic label for the button group",
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonGroupTemplate: Story = {
  args: {
    alignment: "start",
    orientation: "horizontal",
    ariaLabel: "A group of buttons",
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

export const CenteredButtonGroup: Story = {
  ...ButtonGroupTemplate,
  args: {
    orientation: "horizontal",
    alignment: "center",
    children: [
      <Button variant="primary">Button 1</Button>,
      <Button variant="secondary">Button 2</Button>,
      <Button variant="secondary">Button 3</Button>,
    ],
  },
};
