import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "../components";
import { TextProps } from "../components/Text";

const meta = {
  title: "Utility/Headings and text/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: { type: "object" },
      description: "Populates the component's content",
    },
    elementType: {
      control: { type: "text" },
      description: "Defines the type of HTML element that Text renders",
    },
    color: {
      control: {
        type: "select",
        options: [
          "primary",
          "primaryInvert",
          "secondary",
          "secondaryInvert",
          "disabled",
          "danger",
        ],
      },
    },
    isUnstyled: {
      control: { type: "boolean" },
      description:
        "Removes CSS class, allowing component to inherit its styles",
    },
    className: {
      control: { type: "text" },
      description: "Overrides CSS class",
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextTemplate: Story = {
  args: { elementType: "span", children: ["This is some text"] },
  render: ({ ...args }: TextProps) => <Text {...args} />,
};

export const SmallText: Story = {
  args: { size: "small", children: ["This text uses the small size"] },
};

export const MediumText: Story = {
  args: { size: "medium", children: ["This text uses the medium size"] },
};

export const LargeText: Story = {
  args: { size: "large", children: ["This text uses the large size"] },
};

export const UnstyledText: Story = {
  ...TextTemplate,
  args: {
    isUnstyled: true,
    children: ["This text is unstyled, and can inherit its styling"],
  },
};

export const DisabledText: Story = {
  ...TextTemplate,
  args: {
    color: "disabled",
    children: ["This text uses the 'disabled' colour"],
  },
};

export const DangerText: Story = {
  ...TextTemplate,
  args: { color: "danger", children: ["This text uses the 'danger' colour"] },
};

export const PrimaryInvert: Story = {
  ...TextTemplate,
  args: {
    color: "primaryInvert",
    children: ["This text uses the inverted primary colour"],
  },
  render: ({ ...args }: TextProps) => (
    <div
      style={{
        backgroundColor: "var(--surface-color-background-dark-blue)",
        padding: "var(--layout-padding-medium)",
      }}
    >
      <Text {...args} />
    </div>
  ),
};
