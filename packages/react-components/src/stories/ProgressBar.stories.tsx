import type { Meta, StoryObj } from "@storybook/react-vite";

import { ProgressBar } from "../components";

const meta = {
  title: "Notifications and feedback/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    format: {
      control: "radio",
      options: ["bar", "circle"],
      description: "Progress bar format",
      table: { defaultValue: { summary: "bar" } },
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "Set the size of the progress bar",
      table: { defaultValue: { summary: "medium" } },
    },
    valueLabel: {
      control: "text",
      description: "Label text displayed above the progress bar",
    },
    value: {
      control: "number",
      description: "The current value (controlled)",
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
    formatOptions: {
      control: "object",
      description: "Custom format (`Intl.NumberFormatOptions`)",
    },
    isIndeterminate: {
      control: "boolean",
      description: "Set the progress bar to indeterminate mode",
      table: { defaultValue: { summary: "false" } },
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProgressBarTemplate: Story = {
  args: {
    format: "bar",
    valueLabel: "Loading...",
    size: "medium",
    isIndeterminate: false,
    value: 50,
    minValue: 0,
    maxValue: 100,
  },
  render: ({ ...args }) => <ProgressBar {...args} />,
};

export const SmallProgressBar: Story = {
  args: {
    ...ProgressBarTemplate.args,
    size: "small",
  },
};

export const SmallProgressCircle: Story = {
  args: {
    ...ProgressBarTemplate.args,
    format: "circle",
    size: "small",
  },
};

export const LargeProgressBar: Story = {
  args: {
    ...ProgressBarTemplate.args,
    size: "large",
  },
};

export const LargeProgressCircle: Story = {
  args: {
    ...ProgressBarTemplate.args,
    size: "large",
    format: "circle",
  },
};

export const ProgressCircle: Story = {
  args: {
    ...ProgressBarTemplate.args,
    format: "circle",
    valueLabel: "Loading...",
  },
};

export const IndeterminateProgressBar: Story = {
  args: {
    ...ProgressBarTemplate.args,
    isIndeterminate: true,
    valueLabel: "Loading...",
  },
};

export const IndeterminateProgressCircle: Story = {
  args: {
    ...ProgressBarTemplate.args,
    format: "circle",
    isIndeterminate: true,
    valueLabel: "Loading...",
  },
};

export const CustomLabel: Story = {
  args: {
    ...ProgressBarTemplate.args,
    valueLabel: "Custom label",
  },
};

export const CustomFormat: Story = {
  args: {
    ...ProgressBarTemplate.args,
    value: 75.25,
    valueLabel: "Custom label",
    formatOptions: {
      style: "decimal",
      minimumSignificantDigits: 4,
    },
  },
};
