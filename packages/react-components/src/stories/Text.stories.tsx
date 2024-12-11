import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "../components";
import { TextProps } from "../components/Text";

const meta = {
  title: "Utility/Headings and text/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: { type: "object" },
      description: "Populates the component's content",
    },
    elementType: {
      control: { type: "text" },
      description: "Defines the type of HTML element that Text renders",
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextTemplate: Story = {
  args: { elementType: "span", children: ["This is some text"] },
  render: ({ ...args }: TextProps) => <Text {...args} />,
};