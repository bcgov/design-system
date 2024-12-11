import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "../components";
import { HeadingProps } from "react-aria-components";

const meta = {
  title: "Utility/Headings and text/Headings",
  component: Heading,
  parameters: { layout: "centered" },
  argTypes: {
    level: {
      control: { type: "number" },
      description: "Heading level, expects a number between 1 and 6",
    },
    children: {
      control: { type: "object" },
      description: "Populates heading text",
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeadingTemplate: Story = {
  args: { level: 1, children: ["This is a heading"] },
  render: ({ ...args }: HeadingProps) => <Heading {...args} />,
};
