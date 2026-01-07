import type { Meta, StoryObj } from "@storybook/react-vite";

import { TagGroup, TagList } from "../components";

const meta = {
  title: "Inputs and controls/TagGroup/TagList",
  component: TagList,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    items: {
      value: {
        id: { control: "text", description: "Unique ID for the tag" },
        color: { control: "text", description: "Tag color" },
        textValue: {
          control: "text",
          description: "The text value of the tag",
        },
      },
    },
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThreeTagList: Story = {
  args: {
    items: [
      {
        id: "1",
        textValue: "One",
      },
      {
        id: "2",
        textValue: "Two",
      },
      {
        id: "3",
        textValue: "Three",
      },
    ],
  },
  render: (args) => (
    <TagGroup aria-label="Three tag group">
      <TagList {...args} />
    </TagGroup>
  ),
};
