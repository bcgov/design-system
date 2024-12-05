import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "react-aria-components";
import { Button, DialogTrigger, Popover } from "../components";
import { PopoverProps } from "../components/Popover";

const meta = {
  title: "Components/Popover",
  component: Popover,
  parameters: { layout: "centered" },
  argTypes: {
    placement: {
      control: { type: "radio" },
      options: ["top", "bottom", "left", "right"],
      description: "Position of the popover relative to its anchor element",
    },
    children: {
      control: { type: "object" },
      description: "Populate the content of the popover",
    },
    shouldFlip: {
      control: { type: "boolean" },
      description:
        "Controls whether a popover can flip its orientation if there's not enough space for it to render fully",
    },
    offset: {
      control: { type: "number" },
      description:
        "Adjust offset along the main axis from the popvoer's anchor element",
    },
    crossOffset: {
      control: { type: "number" },
      description:
        "Adjust offset along the cross-axis, relative to the popover's anchor element",
    },
    containerPadding: {
      control: { type: "number" },
      description:
        "Apply additional padding between the popover and its surrounding container",
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PopoverTemplate: Story = {
  args: {
    children: [
      <Text style={{ font: "var(--typography-regular-body)" }}>
        Pass some content or components as children to populate a popover's
        content.
      </Text>,
    ],
    placement: "bottom",
    shouldFlip: true,
  },
  render: ({ ...args }: PopoverProps) => (
    <DialogTrigger>
      <Button variant="secondary">Open the popover</Button>
      <Popover {...args} />
    </DialogTrigger>
  ),
};
