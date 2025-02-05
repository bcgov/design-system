import type { Meta, StoryObj } from "@storybook/react";

import { NumberField } from "../components";
import { NumberFieldProps } from "../components/NumberField";

const meta = {
  title: "Components/NumberField",
  component: NumberField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
},
  args: {},
} satisfies Meta<typeof NumberField>;

export default meta;
type Story = StoryObj<typeof meta>;
