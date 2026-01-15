import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  ToggleButton,
  ToggleButtonGroup,
  SvgCheckCircleIcon,
  SvgBcOutlineIcon,
} from "../components";
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

export const LongToggleButtonGroup: Story = {
  globals: {
    viewport: { value: "mobile2", isRotated: false },
  },
  args: {
    orientation: "horizontal",
    selectionMode: "multiple",
    defaultSelectedKeys: ["1", "3", "4", "5", "7"],
    label: "Show wrapping behaviour at smaller viewport sizes",
    children: [
      <ToggleButton key="1" id="1">
        Button 1
      </ToggleButton>,
      <ToggleButton key="2" id="2">
        Button 2 medium
      </ToggleButton>,
      <ToggleButton key="3" id="3" isIconButton>
        <SvgCheckCircleIcon />
      </ToggleButton>,
      <ToggleButton key="4" id="4" isIconButton>
        <SvgBcOutlineIcon />
      </ToggleButton>,
      <ToggleButton key="5" id="5">
        Button 5 quite long
      </ToggleButton>,
      <ToggleButton key="6" id="6">
        Button 5 is extremely long
      </ToggleButton>,
      <ToggleButton key="7" id="7">
        Button 7 is just outlandishly long
      </ToggleButton>,
    ],
  },
};
