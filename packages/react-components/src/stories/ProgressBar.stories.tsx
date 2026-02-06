import type { Meta, StoryObj } from "@storybook/react-vite";

import { ProgressBar } from "../components";

const meta = {
  title: "Notifications and feedback/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label text displayed above the progress bar",
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "Set the size of the progress bar",
      table: { defaultValue: { summary: "medium" } },
    },
    isIndeterminate: {
      control: "boolean",
      description: "Set the progress bar to indeterminate mode",
      table: { defaultValue: { summary: "false" } },
    },
    value: {
      control: "number",
      description: "Set the current value of the progress bar (0-100)",
    },
    minValue: {
      control: "number",
      description: "Set the minimum value of the progress bar",
      table: { defaultValue: { summary: "0" } },
    },
    maxValue: {
      control: "number",
      description: "Set the maximum value of the progress bar",
      table: { defaultValue: { summary: "100" } },
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProgressBarTemplate: Story = {
  args: {
    label: "Loading...",
    size: "medium",
    isIndeterminate: false,
    value: 50,
    minValue: 0,
    maxValue: 100,
  },
  render: ({ ...args }) => <ProgressBar {...args} />,
};
