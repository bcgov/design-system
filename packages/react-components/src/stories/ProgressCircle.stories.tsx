import type { Meta, StoryObj } from "@storybook/react-vite";

import { ProgressCircle } from "../components";

const meta = {
  title: "Notifications and feedback/ProgressBar/ProgressCircle",
  component: ProgressCircle,
  parameters: { layout: "centered" },
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
  },
} satisfies Meta<typeof ProgressCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProgressCircleTemplate: Story = {
  args: {
    label: "Loading...",
    size: "medium",
    isIndeterminate: false,
  },
  render: ({ ...args }) => <ProgressCircle {...args} />,
};

export const IndeterminateProgressCircle: Story = {
  ...ProgressCircleTemplate,
  args: {
    ...ProgressCircleTemplate.args,
    label: "Loading...",
    size: "medium",
    isIndeterminate: true,
  },
};
