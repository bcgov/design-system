import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "../components";
import { HeadingProps } from "../components/Heading";

const meta = {
  title: "Utility/Headings and text/Headings",
  component: Heading,
  parameters: { layout: "centered" },
  argTypes: {
    level: {
      control: { type: "number" },
      description: "Heading level, expects a number between 1 and 6",
    },
    children: {
      control: { type: "object" },
      description: "Populates heading text",
    },
    color: {
      control: {
        type: "select",
        options: [
          "primary",
          "primaryInvert",
          "secondary",
          "secondaryInvert",
          "disabled",
          "danger",
        ],
      },
    },
    isUnstyled: {
      control: { type: "boolean" },
      description:
        "Removes CSS class, allowing component to inherit its styles",
    },
    className: {
      control: { type: "text" },
      description: "Overrides CSS class",
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeadingTemplate: Story = {
  args: { level: 1, children: ["This is a heading"] },
  render: ({ ...args }: HeadingProps) => <Heading {...args} />,
};

export const PrimaryInvert: Story = {
  args: {
    level: 2,
    color: "primaryInvert",
    children: ["Heading with inverted primary colour"],
  },
  render: ({ ...args }: HeadingProps) => (
    <div
      style={{
        backgroundColor: "var(--surface-color-background-dark-blue)",
        padding: "var(--layout-padding-small) var(--layout-padding-large)",
      }}
    >
      <Heading {...args} />
    </div>
  ),
};

export const UnstyledHeading: Story = {
  ...HeadingTemplate,
  args: {
    isUnstyled: true,
    level: 1,
    children: ["This heading is unstyled, and can inherit its styling"],
  },
};

export const Heading1: Story = {
  ...HeadingTemplate,
  args: { level: 1, children: ["Heading 1"] },
};

export const Heading2: Story = {
  ...HeadingTemplate,
  args: { level: 2, children: ["Heading 2"] },
};

export const Heading3: Story = {
  ...HeadingTemplate,
  args: { level: 3, children: ["Heading 3"] },
};

export const Heading4: Story = {
  ...HeadingTemplate,
  args: { level: 4, children: ["Heading 4"] },
};

export const Heading5: Story = {
  ...HeadingTemplate,
  args: { level: 5, children: ["Heading 5"] },
};

export const Heading6: Story = {
  ...HeadingTemplate,
  args: { level: 6, children: ["Heading 6"] },
};
