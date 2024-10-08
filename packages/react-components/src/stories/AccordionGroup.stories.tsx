import type { Meta, StoryObj } from "@storybook/react";

import { Accordion, AccordionGroup } from "../components";
import { AccordionGroupProps } from "@/components/AccordionGroup";

const meta = {
  title: "Components/AccordionGroup/AccordionGroup",
  component: AccordionGroup,
  parameters: { layout: "centered" },
  argTypes: {},
  args: {},
} satisfies Meta<typeof AccordionGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccordionGroupTemplate: Story = {
  args: {},
  render: ({ ...args }: AccordionGroupProps) => (
    <AccordionGroup {...args} title="TKTK" titleElement="h2">
      <Accordion>TKTK</Accordion>
    </AccordionGroup>
  ),
};
