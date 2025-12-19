import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn } from "storybook/test";

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
    onExpandedChange: {
      description:
        "Handler that is called when an accordion's expanded state changes",
      type: "function",
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
} satisfies Meta<typeof AccordionGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccordionGroupTemplate: Story = {
  args: {
    title: "Accordion group",
    titleElement: "h3",
    onExpandedChange: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    await expect(
      canvas.getByRole("heading", { level: 3, name: args.title! })
    ).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", { name: "Accordion 2" }));
    await expect(args.onExpandedChange).toHaveBeenCalled();
    await expect(
      canvas.getByRole("button", { name: "Accordion 2" })
    ).toHaveAttribute("aria-expanded", "true");
    await userEvent.click(canvas.getByRole("button", { name: "Accordion 3" }));
    await expect(args.onExpandedChange).toHaveBeenCalled();
    await expect(
      canvas.getByRole("button", { name: "Accordion 3" })
    ).toHaveAttribute("aria-expanded", "true");
    await expect(
      canvas.getByRole("button", { name: "Accordion 2" })
    ).toHaveAttribute("aria-expanded", "false");
  },
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
    onExpandedChange: fn(),
  },
  play: async ({ args, canvas }) => {
    await expect(canvas.getByText(args.title!)).toBeInTheDocument();
    await expect(canvas.queryByRole("heading")).not.toBeInTheDocument();
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
    onExpandedChange: fn(),
  },
  play: async ({ args, canvas }) => {
    await expect(
      canvas.getByRole("heading", { level: 4, name: args.title! })
    ).toBeInTheDocument();
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
    onExpandedChange: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Accordion 2" }));
    await expect(args.onExpandedChange).toHaveBeenCalled();
    await expect(
      canvas.getByRole("button", { name: "Accordion 2" })
    ).toHaveAttribute("aria-expanded", "true");
    await userEvent.click(canvas.getByRole("button", { name: "Accordion 4" }));
    await expect(args.onExpandedChange).toHaveBeenCalled();
    await expect(
      canvas.getByRole("button", { name: "Accordion 4" })
    ).toHaveAttribute("aria-expanded", "true");
  },
};

export const AccordionGroupWithDisabledItem: Story = {
  args: {
    title: "This accordion group has a single item disabled",
    onExpandedChange: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    await expect(
      canvas.getByRole("button", { name: "Accordion 2" })
    ).toBeDisabled();
    await userEvent.click(canvas.getByRole("button", { name: "Accordion 2" }));
    await expect(args.onExpandedChange).not.toHaveBeenCalled();
    await expect(
      canvas.getByRole("button", { name: "Accordion 2" })
    ).toHaveAttribute("aria-expanded", "false");
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
    onExpandedChange: fn(),
  },
  play: async ({ canvas }) => {
    const buttons = canvas.getAllByRole("button");
    buttons.forEach((button) => {
      expect(button).toBeDisabled();
    });
  },
};

export const UncontrolledDefaultExpanded: Story = {
  ...AccordionGroupTemplate,
  args: {
    allowsMultipleExpanded: true,
    defaultExpandedKeys: ["1", "5"],
    title: "This accordion group has two items open by default",
    onExpandedChange: fn(),
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("button", { name: "Accordion 1" })
    ).toHaveAttribute("aria-expanded", "true");
    await expect(
      canvas.getByRole("button", { name: "Accordion 5" })
    ).toHaveAttribute("aria-expanded", "true");
  },
};
