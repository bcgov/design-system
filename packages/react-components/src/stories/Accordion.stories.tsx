import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn } from "storybook/test";

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
      description: "Unique identifier for the accordion item",
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
    onExpandedChange: {
      description:
        "Handler that is called when the disclosure's expanded state changes.",
      type: "function",
    },
    children: {
      control: { type: "object" },
      description: "Accordion content",
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccordionTemplate: Story = {
  args: {
    label: "Accordion panel title",
    children: "This is some content inside an accordion panel.",
    onExpandedChange: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    await expect(canvas.getByRole("button")).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onExpandedChange).toHaveBeenCalled();
    await expect(canvas.getByRole("button")).toHaveAttribute(
      "aria-expanded",
      "true"
    );
  },
  render: ({ ...args }: AccordionProps) => <Accordion {...args} />,
};

export const DisabledAccordion: Story = {
  args: {
    label: "This accordion item is disabled",
    children: "This is some content inside an accordion panel.",
    isDisabled: true,
    onExpandedChange: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    await expect(canvas.getByRole("button")).toBeInTheDocument();
    await expect(canvas.getByRole("button")).toBeDisabled();
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onExpandedChange).not.toHaveBeenCalled();
  },
};
