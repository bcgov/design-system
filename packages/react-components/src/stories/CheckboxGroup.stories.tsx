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
    errorMessage: {
      control: { type: "text" },
      description: "Error message displayed when input is invalid",
    },
    children: {
      control: { type: "object" },
      description: "Expects an array of checkbox components",
    },
  },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxGroupTemplate: Story = {
  args: {
    label: "This is a checkbox group",
    description: "This is some additional description text",
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

export const CheckboxGroupWithErrors: Story = {
  args: {
    orientation: "vertical",
    label: "This checkbox group has errors",
    description: "Description and/or helper text",
    errorMessage: "Error messages can be customised or passed programmatically",
    children: [
      <Checkbox value="1" isRequired>
        Checkbox 1
      </Checkbox>,
      <Checkbox value="2" isIndeterminate>
        Checkbox 2
      </Checkbox>,
      <Checkbox value="3">Checkbox 3</Checkbox>,
      <Checkbox value="4">Checkbox 4</Checkbox>,
    ],
    isInvalid: true,
    isRequired: true,
  },
  render: ({ ...args }: CheckboxGroupProps) => <CheckboxGroup {...args} />,
};
