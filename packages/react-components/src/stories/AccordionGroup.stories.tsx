import type { Meta, StoryObj } from "@storybook/react";

import { Accordion, AccordionGroup } from "../components";
import { AccordionGroupProps } from "@/components/AccordionGroup";

const meta = {
  title: "Components/AccordionGroup/AccordionGroup",
  component: AccordionGroup,
  parameters: { layout: "centered" },
  argTypes: {
    title: {
      control: { type: "text" },
      description: "Sets the title for the accordion group",
    },
    titleElement: {
      control: { type: "radio" },
      description: "Sets the heading style for the title field",
    },
    allowsMultipleExpanded: {
      control: "boolean",
      description:
        "Whether multiple accordiom items can be opened simultaneously",
    },
    expandedKeys: {
      control: "object",
      description:
        "Expands multiple items, using their unique IDs (controlled)",
    },
    defaultExpandedKeys: {
      control: "object",
      description:
        "Sets multiple items to expanded by default, using their unique IDs (uncontrolled)",
    },
    isDisabled: {
      control: "boolean",
      description: "Disables an entire group of accordion items",
    },
    children: {
      control: "object",
      description: "Expects an array of accordion components",
    },
  },
  args: {},
} satisfies Meta<typeof AccordionGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccordionGroupTemplate: Story = {
  args: { title: "Accordion title", titleElement: "h3" },
  render: ({ ...args }: AccordionGroupProps) => (
    <AccordionGroup {...args} allowsMultipleExpanded>
      <Accordion label="Accordion 1">TKTK</Accordion>
      <Accordion label="Accordion 2">TKTK</Accordion>
      <Accordion label="Accordion 3">TKTK</Accordion>
      <Accordion label="Accordion 4">TKTK</Accordion>
      <Accordion label="Accordion 5">TKTK</Accordion>
    </AccordionGroup>
  ),
};

export const MultipleOpenAccordion: Story = {
  args: {
    allowsMultipleExpanded: true,
    title: "This accordion allows multiple slides to be opened simultaneously",
    titleElement: "h3",
  },
  render: ({ ...args }: AccordionGroupProps) => (
    <AccordionGroup {...args}>
      <Accordion label="Accordion 1">TKTK</Accordion>
      <Accordion label="Accordion 2">TKTK</Accordion>
      <Accordion label="Accordion 3">TKTK</Accordion>
      <Accordion label="Accordion 4">TKTK</Accordion>
      <Accordion label="Accordion 5">TKTK</Accordion>
    </AccordionGroup>
  ),
};
