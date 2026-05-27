import type { Meta, StoryObj } from "@storybook/react-vite";

import { Separator } from "../components";
import { SeparatorProps } from "@/components/Separator";

const meta = {
  title: "Utility/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
      description: "Sets width or height, depending on orientation",
      table: { defaultValue: { summary: "medium" } },
    },
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
      description: "Sets orientation of the separator",
      table: { defaultValue: { summary: "horizontal" } },
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HorizontalSeparator: Story = {
  args: {
    orientation: "horizontal",
    size: "medium",
  },
  render: ({ ...args }: SeparatorProps) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "200px",
          height: "50px",
          backgroundColor: "var(--theme-blue-20)",
        }}
      />
      <Separator {...args} />
      <div
        style={{
          width: "200px",
          height: "50px",
          backgroundColor: "var(--theme-blue-20)",
        }}
      />
    </div>
  ),
};

export const VerticalSeparator: Story = {
  args: {
    orientation: "vertical",
    size: "medium",
  },
  render: ({ ...args }: SeparatorProps) => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          width: "200px",
          height: "50px",
          backgroundColor: "var(--theme-blue-20)",
        }}
      />
      <Separator {...args} />
      <div
        style={{
          width: "200px",
          height: "50px",
          backgroundColor: "var(--theme-blue-20)",
        }}
      />
    </div>
  ),
};

export const SmallSeparator: Story = {
  args: {
    orientation: "horizontal",
    size: "small",
  },
  render: ({ ...args }: SeparatorProps) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "200px",
          height: "50px",
          backgroundColor: "var(--theme-blue-20)",
        }}
      />
      <Separator {...args} />
      <div
        style={{
          width: "200px",
          height: "50px",
          backgroundColor: "var(--theme-blue-20)",
        }}
      />
    </div>
  ),
};

export const MediumSeparator: Story = {
  args: {
    orientation: "horizontal",
    size: "medium",
  },
  render: ({ ...args }: SeparatorProps) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "200px",
          height: "50px",
          backgroundColor: "var(--theme-blue-20)",
        }}
      />
      <Separator {...args} />
      <div
        style={{
          width: "200px",
          height: "50px",
          backgroundColor: "var(--theme-blue-20)",
        }}
      />
    </div>
  ),
};

export const LargeSeparator: Story = {
  args: {
    orientation: "horizontal",
    size: "large",
  },
  render: ({ ...args }: SeparatorProps) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "200px",
          height: "50px",
          backgroundColor: "var(--theme-blue-20)",
        }}
      />
      <Separator {...args} />
      <div
        style={{
          width: "200px",
          height: "50px",
          backgroundColor: "var(--theme-blue-20)",
        }}
      />
    </div>
  ),
};
