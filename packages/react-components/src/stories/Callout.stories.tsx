import type { Meta, StoryObj } from "@storybook/react";

import { Button, Callout } from "../components";
import { CalloutProps } from "@/components/Callout";

const meta = {
  title: "Components/Callout/Callout",
  component: Callout,
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      options: ["default", "dark"],
      control: { type: "radio" },
      description: "Sets the theme of the alert",
    },
    title: {
      control: { type: "text" },
      description: "Sets the callout title",
    },
    description: {
      control: { type: "text" },
      description: "Sets the callout text",
    },
    buttons: {
      control: { type: "object" },
      description: "Expects an array of button components",
    },
  },
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CalloutTemplate: Story = {
  args: {
    title: "TKTK",
    description: "TKTK",
    buttons: [
      <Button variant="secondary" size="small">
        Button 1
      </Button>,
      <Button variant="primary" size="small">
        Button 2
      </Button>,
    ],
  },
  render: ({ ...args }: CalloutProps) => <Callout {...args} />,
};
