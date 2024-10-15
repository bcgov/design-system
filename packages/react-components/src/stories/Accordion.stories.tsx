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
    id: {
      control: {
        type: "text",
      },
      description: "Unique identifier for the disclosure",
    },
    isDisabled: {
      control: "boolean",
      description: "Disables an accordion item",
    },
    isExpanded: {
      control: "boolean",
      description: "Whether the disclosure is expanded (controlled)",
    },
    defaultExpanded: {
      control: "boolean",
      description:
        "Whether the disclosure is expanded by default (uncontrolled)",
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

export const DisabledAccordion: Story = {
  args: {
    label: "This accordion item is disabled",
    children: "This is some content inside an accordion panel.",
    isDisabled: true,
  },
};
