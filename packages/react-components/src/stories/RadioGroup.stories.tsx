import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroup, Radio } from "../components";
import { RadioGroupProps } from "../components/RadioGroup";

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: { type: "radio" },
      optioms: ["vertical", "horizontal"],
      description: "Sets layout of radio buttons",
    },
    label: {
      control: { type: "text" },
      description: "Labels a radio group",
    },
    description: {
      control: { type: "text" },
      description: "Additional description or helper text",
    },
    children: {
      control: { type: "object" },
      description: "Expects an array of Radio components",
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioGroupTemplate: Story = {
  args: {
    label: "Text label",
    description: "Additional description text",
    children: [
      <Radio value="1">Option 1</Radio>,
      <Radio value="2">Option 2</Radio>,
      <Radio value="3" isDisabled>
        Option 3
      </Radio>,
    ],
  },
  render: ({ ...args }: RadioGroupProps) => <RadioGroup {...args} />,
};
