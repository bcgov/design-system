import type { Meta, StoryObj } from "@storybook/react-vite";

import { ToggleButton, ToggleButtonGroup } from "../components";
import { ToggleButtonGroupProps } from "../components/ToggleButtonGroup";

const meta = {
  title: "Inputs and controls/Toggle buttons/Toggle button group",
  component: ToggleButtonGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Provides a text label for a button group",
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium"],
      description: "Sets size of toggle buttons",
    },
    children: {
      control: { type: "object" },
      description: "Expects an array of `ToggleButton` components",
    },
    selectionMode: {
      control: { type: "radio" },
      options: ["single", "multiple"],
      description:
        "Sets whether multiple options can be selected at the same time",
    },
    disallowEmptySelection: {
      control: { type: "boolean" },
      description: "Whether the collection allows empty selection",
    },
    selectedKeys: {
      control: { type: "object" },
      description: "The currently selected keys in the collection (controlled)",
    },
    defaultSelectedKeys: {
      control: { type: "object" },
      description: "The initial selected keys in the collection (uncontrolled)",
    },
    orientation: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
      description: "Sets layout of button group",
    },
    isDisabled: {
      control: { type: "boolean" },
      description: "Whether all options are disabled",
    },
  },
} satisfies Meta<typeof ToggleButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleButtonGroupTemplate: Story = {
  args: {
    children: [
      <ToggleButton key="1" id="1">
        Button 1
      </ToggleButton>,
      <ToggleButton key="2" id="2">
        Button 2
      </ToggleButton>,
      <ToggleButton key="3" id="3">
        Button 3
      </ToggleButton>,
    ],
    selectionMode: "single",
    size: "medium",
    orientation: "horizontal",
    disallowEmptySelection: false,
    isDisabled: false,
    defaultSelectedKeys: "1",
  },
  render: ({ ...args }: ToggleButtonGroupProps) => (
    <ToggleButtonGroup {...args} />
  ),
};

export const VerticalToggleButtonGroup: Story = {
  ...ToggleButtonGroupTemplate,
  args: {
    ...ToggleButtonGroupTemplate.args,
    orientation: "vertical",
  },
};

export const SmallToggleButtonGroup: Story = {
  ...ToggleButtonGroupTemplate,
  args: {
    ...ToggleButtonGroupTemplate.args,
    size: "small",
  },
};

export const SingleSelect: Story = {
  ...ToggleButtonGroupTemplate,
  args: {
    children: [
      <ToggleButton key="light" id="light">
        Light mode
      </ToggleButton>,
      <ToggleButton key="dark" id="dark">
        Dark mode
      </ToggleButton>,
    ],
    selectionMode: "single",
    defaultSelectedKeys: ["dark"],
  },
};

export const SingleSelectDisallowEmpty: Story = {
  ...ToggleButtonGroupTemplate,
  args: {
    children: [
      <ToggleButton key="1" id="1">
        Option 1
      </ToggleButton>,
      <ToggleButton key="2" id="2">
        Option 2
      </ToggleButton>,
      <ToggleButton key="3" id="3">
        Option 3
      </ToggleButton>,
    ],
    selectionMode: "single",
    disallowEmptySelection: true,
  },
};

export const MultipleSelect: Story = {
  ...ToggleButtonGroupTemplate,
  args: {
    children: [
      <ToggleButton key="bold" id="bold">
        <b>Bold</b>
      </ToggleButton>,
      <ToggleButton key="italic" id="italic">
        <i>Italic</i>
      </ToggleButton>,
      <ToggleButton key="underline" id="underline">
        <u>Underline</u>
      </ToggleButton>,
    ],
    selectionMode: "multiple",
    defaultSelectedKeys: ["bold", "underline"],
  },
};

export const GroupWithDisabledOption: Story = {
  ...ToggleButtonGroupTemplate,
  args: {
    children: [
      <ToggleButton key="1" id="1">
        Button 1
      </ToggleButton>,
      <ToggleButton key="2" id="2">
        Button 2
      </ToggleButton>,
      <ToggleButton key="3" id="3" isDisabled>
        Button 3 (disabled)
      </ToggleButton>,
    ],
  },
};

export const DisabledToggleButtonGroup: Story = {
  ...ToggleButtonGroupTemplate,
  args: {
    ...ToggleButtonGroupTemplate.args,
    label: "This button group is disabled",
    isDisabled: true,
  },
};

export const WrappedToggleButtonGroup: Story = {
  args: {},
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <ToggleButtonGroup
        label="This button group is inside a div with a fixed width"
        selectionMode="multiple"
        defaultSelectedKeys={["1", "3"]}
        orientation="horizontal"
      >
        <ToggleButton key="1" id="1">
          Button 1
        </ToggleButton>
        <ToggleButton key="2" id="2">
          Button 2
        </ToggleButton>
        <ToggleButton key="3" id="3">
          Button 3
        </ToggleButton>
        <ToggleButton key="4" id="4">
          Button 4
        </ToggleButton>
        <ToggleButton key="5" id="5">
          Button 5
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  ),
};
