import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox, CheckboxGroup } from "../components";
import { CheckboxGroupProps } from "../components/CheckboxGroup";

const meta = {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Text label for checkbox group",
    },
    description: {
      control: { type: "text" },
      description: "Additional description or helper text",
    },
    orientation: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
      description: "Sets layout of checkboxes",
    },
    defaultValue: {
      control: { type: "object" },
      description:
        "Array of values which should be selected by default (uncontrolled)",
    },
    errorMessage: {
      control: { type: "object" },
      description: "Error message displayed when input is invalid",
    },
    children: {
      control: { type: "object" },
      description: "Expects an array of `Checkbox` components",
    },
    isRequired: {
      control: { type: "boolean" },
      description: "Whether an input is mandatory or optional",
    },
    isInvalid: {
      control: { type: "boolean" },
      description: "Set when input values are invalid",
    },
    isDisabled: {
      control: { type: "boolean" },
      description: "Disables the entire checkbox group",
    },
    flexWrap: {
      control: { type: "radio" },
      options: ["nowrap", "wrap", "wrap-reverse"],
      description: "Sets `flex-wrap` property on checkbox items",
    },
  },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxGroupTemplate: Story = {
  args: {
    label: "This is a checkbox group",
    orientation: "vertical",
    children: [
      <Checkbox value="1" isRequired>
        Checkbox 1
      </Checkbox>,
      <Checkbox value="2">Checkbox 2</Checkbox>,
      <Checkbox value="3">Checkbox 3</Checkbox>,
      <Checkbox value="4" isDisabled>
        Checkbox 4 is disabled
      </Checkbox>,
      <Checkbox value="5" isIndeterminate>
        Checkbox 5 is indeterminate
      </Checkbox>,
      <Checkbox value="6">Checkboxes 6 and 7 are synced</Checkbox>,
      <Checkbox value="6">Checkboxes 6 and 7 are synced</Checkbox>,
    ],
  },
  render: ({ ...args }: CheckboxGroupProps) => <CheckboxGroup {...args} />,
};

export const CheckboxGroupWithLabelAndDescription: Story = {
  args: {
    label: "This is the primary label",
    description: "This is an additional description field.",
    children: [
      <Checkbox value="1">Option 1</Checkbox>,
      <Checkbox value="2">Option 2</Checkbox>,
      <Checkbox value="3">Option 3</Checkbox>,
    ],
  },
};

export const HorizontalCheckboxGroup: Story = {
  args: {
    orientation: "horizontal",
    label: "This checkbox group is laid out horizontally",
    children: [
      <Checkbox value="1">Option 1</Checkbox>,
      <Checkbox value="2">Option 2</Checkbox>,
      <Checkbox value="3">Option 3</Checkbox>,
      <Checkbox value="4">Option 4</Checkbox>,
    ],
  },
};

export const RequiredCheckboxGroup: Story = {
  args: {
    label: "This checkbox group requires an input",
    isRequired: true,
    children: [
      <Checkbox value="1">Option 1</Checkbox>,
      <Checkbox value="2">Option 2</Checkbox>,
      <Checkbox value="3">Option 3</Checkbox>,
      <Checkbox value="4">Option 4</Checkbox>,
    ],
  },
};

export const DisabledCheckboxGroup: Story = {
  args: {
    label: "This checkbox group has been disabled",
    description: "None of the options can be focused or selected",
    isDisabled: true,
    children: [
      <Checkbox value="1">Option 1</Checkbox>,
      <Checkbox value="2">Option 2</Checkbox>,
      <Checkbox value="3">Option 3</Checkbox>,
      <Checkbox value="4">Option 4</Checkbox>,
    ],
  },
};

export const CheckboxGroupWithErrors: Story = {
  args: {
    orientation: "vertical",
    label: "This checkbox group has errors",
    description: "Description and/or helper text",
    errorMessage: "Error messages can be customised or passed programmatically",
    children: [
      <Checkbox value="1" isRequired>
        Option 1
      </Checkbox>,
      <Checkbox value="2">Option 2</Checkbox>,
      <Checkbox value="3">Option 3</Checkbox>,
      <Checkbox value="4">Option 4</Checkbox>,
    ],
    isInvalid: true,
    isRequired: true,
  },
  render: ({ ...args }: CheckboxGroupProps) => <CheckboxGroup {...args} />,
};
