import type { Meta, StoryObj } from "@storybook/react";

import { ToggleButton, ToggleButtonGroup } from "../components";
import { ToggleButtonGroupProps } from "../components/ToggleButtonGroup";

const meta = {
  title: "Components/Toggle buttons/Toggle button group",
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
      <ToggleButton id="1">Button 1</ToggleButton>,
      <ToggleButton id="2">Button 2</ToggleButton>,
      <ToggleButton id="3">Button 3</ToggleButton>,
    ],
    selectionMode: "single",
    size: "medium",
    orientation: "horizontal",
    disallowEmptySelection: false,
    isDisabled: false,
  },
  render: ({ ...args }: ToggleButtonGroupProps) => (
    <ToggleButtonGroup {...args} />
  ),
};

export const HorizontalToggleButtonGroup: Story = {
  ...ToggleButtonGroupTemplate,
  args: {
    orientation: "horizontal",
    children: [
      <ToggleButton id="1">Button 1</ToggleButton>,
      <ToggleButton id="2">Button 2</ToggleButton>,
      <ToggleButton id="3">Button 3</ToggleButton>,
    ],
  },
};

export const VerticalToggleButtonGroup: Story = {
  ...ToggleButtonGroupTemplate,
  args: {
    orientation: "vertical",
    children: [
      <ToggleButton id="1">Button 1</ToggleButton>,
      <ToggleButton id="2">Button 2</ToggleButton>,
      <ToggleButton id="3">Button 3</ToggleButton>,
    ],
  },
};

export const SmallToggleButtonGroup: Story = {
  ...ToggleButtonGroupTemplate,
  args: {
    size: "small",
    defaultSelectedKeys: "1",
    children: [
      <ToggleButton id="1">Button 1</ToggleButton>,
      <ToggleButton id="2">Button 2</ToggleButton>,
      <ToggleButton id="3">Button 3</ToggleButton>,
    ],
  },
};

export const SingleSelect: Story = {
  ...ToggleButtonGroupTemplate,
  args: {
    children: [
      <ToggleButton id="light">Light mode</ToggleButton>,
      <ToggleButton id="dark">Dark mode</ToggleButton>,
    ],
    selectionMode: "single",
    defaultSelectedKeys: ["dark"],
  },
};

export const SingleSelectDisallowEmpty: Story = {
  ...ToggleButtonGroupTemplate,
  args: {
    children: [
      <ToggleButton id="light">Light mode</ToggleButton>,
      <ToggleButton id="dark">Dark mode</ToggleButton>,
    ],
    selectionMode: "single",
    defaultSelectedKeys: ["dark"],
    disallowEmptySelection: true,
  },
};

export const MultipleSelect: Story = {
  ...ToggleButtonGroupTemplate,
  args: {
    children: [
      <ToggleButton id="bold">
        <b>Bold</b>
      </ToggleButton>,
      <ToggleButton id="italic">
        <i>Italic</i>
      </ToggleButton>,
      <ToggleButton id="underline">
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
      <ToggleButton id="1">Button 1</ToggleButton>,
      <ToggleButton id="2">Button 2</ToggleButton>,
      <ToggleButton id="3" isDisabled>
        Button 3 (disabled)
      </ToggleButton>,
    ],
  },
};

export const DisabledToggleButtonGroup: Story = {
  ...ToggleButtonGroupTemplate,
  args: {
    label: "This button group is disabled",
    children: [
      <ToggleButton id="1">Button 1</ToggleButton>,
      <ToggleButton id="2">Button 2</ToggleButton>,
      <ToggleButton id="3">Button 3</ToggleButton>,
    ],
    isDisabled: true,
  },
};
