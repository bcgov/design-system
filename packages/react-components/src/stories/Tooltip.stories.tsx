import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Tooltip, TooltipTrigger } from "../components";
import { TooltipProps } from "../components/Tooltip";

const meta = {
  title: "Notifications and feedback/Tooltip/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placement: {
      options: ["top", "right", "bottom", "left"],
      control: { type: "radio" },
      description:
        "Where the Tooltip gets placed in relation to the TooltipTrigger",
    },
    children: {
      control: { type: "text" },
      description: "Appears in the body of the Tooltip",
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TooltipTemplate: Story = {
  args: {
    children: "Tooltip text",
  },
  render: ({ ...args }: TooltipProps) => (
    <TooltipTrigger>
      <Button variant="secondary">Focus or hover</Button>
      <Tooltip {...args} />
    </TooltipTrigger>
  ),
};

export const TopPlacement: Story = {
  ...TooltipTemplate,
  args: {
    children: "Top placement example",
    placement: "top",
  },
};

export const RightPlacement: Story = {
  ...TooltipTemplate,
  args: {
    children: "Right placement example",
    placement: "right",
  },
};

export const BottomPlacement: Story = {
  ...TooltipTemplate,
  args: {
    children: "Bottom placement example",
    placement: "bottom",
  },
};

export const LeftPlacement: Story = {
  ...TooltipTemplate,
  args: {
    children: "Left placement example",
    placement: "left",
  },
};

export const Delay: Story = {
  args: {
    children: "Enters immediately, exits after 3 seconds",
  },
  render: ({ ...args }) => (
    <TooltipTrigger delay={0} closeDelay={3000}>
      <Button variant="secondary">Delay example</Button>
      <Tooltip {...args} />
    </TooltipTrigger>
  ),
};
