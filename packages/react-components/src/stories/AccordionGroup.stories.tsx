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
        "Whether multiple accordion items can be opened simultaneously",
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
    <AccordionGroup {...args}>
      <Accordion label="Accordion 1" id="1">
        TKTK
      </Accordion>
      <Accordion label="Accordion 2" id="2">
        TKTK
      </Accordion>
      <Accordion label="Accordion 3" id="3">
        TKTK
      </Accordion>
      <Accordion label="Accordion 4" id="4">
        TKTK
      </Accordion>
      <Accordion label="Accordion 5" id="5">
        TKTK
      </Accordion>
    </AccordionGroup>
  ),
};

export const AccordionGroupWithDefaultTitle: Story = {
  args: {
    title: "Default title styling",
  },
  render: ({ ...args }: AccordionGroupProps) => (
    <AccordionGroup {...args}>
      <Accordion label="Accordion 1" id="1">
        TKTK
      </Accordion>
      <Accordion label="Accordion 2" id="2">
        TKTK
      </Accordion>
    </AccordionGroup>
  ),
};

export const AccordionGroupWithHeading: Story = {
  args: {
    title: "This accordion group has an H4 heading",
    titleElement: "h4",
  },
  render: ({ ...args }: AccordionGroupProps) => (
    <AccordionGroup {...args}>
      <Accordion label="Accordion 1" id="1">
        TKTK
      </Accordion>
      <Accordion label="Accordion 2" id="2">
        TKTK
      </Accordion>
    </AccordionGroup>
  ),
};

export const MultipleOpenAccordion: Story = {
  ...AccordionGroupTemplate,
  args: {
    allowsMultipleExpanded: true,
    title: "Multiple items can be open simultaneously",
  },
};

export const AccordionGroupWithDisabledItem: Story = {
  args: {
    title: "This accordion group has a single item disabled",
  },
  render: ({ ...args }: AccordionGroupProps) => (
    <AccordionGroup {...args}>
      <Accordion label="Accordion 1" id="1">
        TKTK
      </Accordion>
      <Accordion label="Accordion 2" id="2" isDisabled>
        TKTK
      </Accordion>
      <Accordion label="Accordion 3" id="3">
        TKTK
      </Accordion>
      <Accordion label="Accordion 4" id="4">
        TKTK
      </Accordion>
      <Accordion label="Accordion 5" id="5">
        TKTK
      </Accordion>
    </AccordionGroup>
  ),
};

export const DisabledAccordionGroup: Story = {
  ...AccordionGroupTemplate,
  args: {
    isDisabled: true,
    title: "This entire accordion group is disabled",
  },
};

export const UncontrolledDefaultExpanded: Story = {
  ...AccordionGroupTemplate,
  args: {
    allowsMultipleExpanded: true,
    defaultExpandedKeys: ["1", "5"],
    title: "This accordion group has two items open by default",
  },
};
