import type { Meta, StoryObj } from "@storybook/react-vite";

import { DateField } from "../components";
import { DateFieldProps, DateValue } from "../components/DateField";

const meta = {
  title: "Components/DateField",
  component: DateField,
  parameters: { layout: "centered" },
  argTypes: {
    label: { control: { type: "text" }, description: "TKTK" },
    description: { control: { type: "text", description: "TKTK" } },
  },
} satisfies Meta<typeof DateField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DateFieldTemplate: Story = {
  args: { label: "Label", description: "Description" },
  render: ({ ...args }: DateFieldProps<DateValue>) => <DateField {...args} />,
};
