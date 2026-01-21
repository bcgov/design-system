import type { Meta, StoryObj } from "@storybook/react-vite";

import { TimeField } from "@/components";

const meta = {
  title: "Inputs and controls/TimeField",
  component: TimeField,
    parameters: {
      layout: "centered",
    },
  argTypes: {
  },
} satisfies Meta<typeof TimeField>;

export default meta;
