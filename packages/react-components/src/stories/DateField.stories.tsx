import type { Meta, StoryObj } from "@storybook/react-vite";

import { DateField } from "../components";
import { DateFieldProps, DateValue } from "../components/DateField";

const meta = {
  title: "Inputs and controls/DateField",
  component: DateField,
  parameters: { layout: "centered" },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["medium", "small"],
      description: "Sets the size of the input field",
    },
    label: {
      control: { type: "text" },
      description: "Text that appears above the input field",
    },
    description: {
      control: {
        type: "text",
      },
      description: "Additional helper text below the input field",
    },
    granularity: {
      control: {
        type: "radio",
      },
      options: ["day", "minute"],
      description: "Sets smallest selectable unit of time",
    },
    isRequired: {
      control: { type: "boolean" },
      description: "Whether an input is required",
    },
    isDisabled: {
      control: { type: "boolean" },
      description: "Whether the input is active or disabled",
    },
    isInvalid: {
      control: { type: "boolean" },
      description: "Whether the current input is valid",
    },
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

export const DateAndTime: Story = {
  ...DateFieldTemplate,
  args: { label: "Label", description: "Description", granularity: "minute" },
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
