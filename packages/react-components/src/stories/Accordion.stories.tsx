import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "../components";
import { AccordionProps } from "@/components/Accordion";

const meta = {
  title: "Components/AccordionGroup/Accordion",
  component: Accordion,
  parameters: { layout: "centered" },
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Button text for accordion",
    },
    children: {
      control: { type: "object" },
      description: "Accordion content",
    },
  },
  args: {},
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccordionTemplate: Story = {
  args: {
    label: "Accordion panel title",
    children: "This is some content inside an accordion panel.",
  },
  render: ({ ...args }: AccordionProps) => <Accordion {...args} />,
};
