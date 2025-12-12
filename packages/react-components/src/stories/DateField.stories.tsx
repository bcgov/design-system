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
    isRequired: { control: { type: "boolean" }, description: "TKTK" },
    isInvalid: { control: { type: "boolean" }, description: "TKTK" },
  },
} satisfies Meta<typeof DateField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DateFieldTemplate: Story = {
  args: { label: "Label", description: "Description" },
  render: ({ ...args }: DateFieldProps<DateValue>) => <DateField {...args} />,
};

export const NoPicker: Story = {
  ...DateFieldTemplate,
  args: { label: "Label", description: "Description", isPickerDisabled: true },
};

export const Invalid: Story = {
  ...DateFieldTemplate,
  args: {
    label: "Label",
    description: "Description",
    isInvalid: true,
    errorMessage: "Error message",
  },
};

export const Disabled: Story = {
  ...DateFieldTemplate,
  args: { label: "Label", description: "Description", isDisabled: true },
};

export const ReadOnly: Story = {
  ...DateFieldTemplate,
  args: { label: "Label", description: "Description", isReadOnly: true },
};
