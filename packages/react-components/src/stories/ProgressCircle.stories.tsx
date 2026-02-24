import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useState } from "react";

import { ProgressCircle } from "../components";

const meta = {
  title: "Notifications and feedback/Progress indicators/ProgressCircle",
  component: ProgressCircle,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "Set the size of the progress circle",
      table: { defaultValue: { summary: "medium" } },
    },
    valueLabel: {
      control: "text",
      description: "Label text displayed above the progress circle",
    },
    value: {
      control: "number",
      description: "The current value (controlled)",
    },
    minValue: {
      control: "number",
      description: "Set the minimum value of the progress circle",
      table: { defaultValue: { summary: "0" } },
    },
    maxValue: {
      control: "number",
      description: "Set the maximum value of the progress circle",
      table: { defaultValue: { summary: "100" } },
    },
    formatOptions: {
      control: "object",
      description: "Custom format (`Intl.NumberFormatOptions`)",
    },
    isIndeterminate: {
      control: "boolean",
      description: "Set the progress circle to indeterminate mode",
      table: { defaultValue: { summary: "false" } },
    },
  },
} satisfies Meta<typeof ProgressCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProgressCircleTemplate: Story = {
  args: {
    valueLabel: "Loading...",
    size: "medium",
    isIndeterminate: false,
    value: 50,
    minValue: 0,
    maxValue: 100,
  },
  render: ({ ...args }) => <ProgressCircle {...args} />,
};

export const SmallProgressCircle: Story = {
  args: {
    ...ProgressCircleTemplate.args,
    size: "small",
  },
};

export const LargeProgressCircle: Story = {
  args: {
    ...ProgressCircleTemplate.args,
    size: "large",
  },
};

export const IndeterminateProgressCircle: Story = {
  args: {
    ...ProgressCircleTemplate.args,
    isIndeterminate: true,
    valueLabel: "Loading...",
  },
};

export const CustomLabel: Story = {
  args: {
    ...ProgressCircleTemplate.args,
    valueLabel: "Custom label",
  },
};

export const CustomFormat: Story = {
  args: {
    ...ProgressCircleTemplate.args,
    value: 75.25,
    valueLabel: "Custom label",
    formatOptions: {
      style: "decimal",
      minimumSignificantDigits: 4,
    },
  },
};

export const AnimatedFill: Story = {
  args: {
    ...ProgressCircleTemplate.args,
    valueLabel: "Uploading...",
    minValue: 0,
    maxValue: 100,
  },
  render: (args) => {
    const [value, setValue] = useState(args.minValue ?? 0);

    useEffect(() => {
      const min = args.minValue ?? 0;
      const max = args.maxValue ?? 100;
      const step = Math.max((max - min) / 40, 1);
      const id = setInterval(() => {
        setValue((v) => (v >= max ? min : Math.min(v + step, max)));
      }, 120);
      return () => clearInterval(id);
    }, [args.minValue, args.maxValue]);

    return <ProgressCircle {...args} value={value} />;
  },
};
