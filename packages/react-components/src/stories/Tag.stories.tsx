import type { Meta, StoryObj } from "@storybook/react";

import TagGroup from "../components/TagGroup";
import TagList from "../components/TagList";
import Tag, { TagProps } from "../components/Tag";

const meta = {
  title: "Components/TagGroup/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    id: { control: "text", description: "Unique ID for the tag" },
    color: { control: "text", description: "Tag color" },
    textValue: { control: "text", description: "The text value of the tag" },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleTag: Story = {
  args: {
    id: "single-tag",
    color: "blue",
    textValue: "Single tag",
  },
  render: (args: TagProps) => (
    <TagGroup aria-label="Single tag group">
      <TagList items={[{ ...args }]} />
    </TagGroup>
  ),
};
