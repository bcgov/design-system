import type { Meta, StoryObj } from "@storybook/react";

import { Radio } from "../components";
import { RadioProps } from "../components/Radio";

const meta = {
  title: "Components/RadioGroup/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: {
      control: { type: "text" },
      description: "Unique identifier used for validation and data submission",
    },
    children: {
      control: { type: "object" },
      description: "Text label",
    },
    isDisabled: {
      control: "boolean",
      description: "Disables a radio button",
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioTemplate: Story = {
  args: {
    value: "example",
    children: "Text label",
  },
  render: ({ ...args }: RadioProps) => <Radio {...args} />,
};
