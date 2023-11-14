import type { Meta, StoryObj } from "@storybook/react";

import TagGroup from "../components/TagGroup";
import TagList from "../components/TagList";

const meta = {
  title: "Components/TagGroup/TagGroup",
  component: TagGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TagGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleTag: Story = {
  render: () => {
    return (
      <TagGroup aria-label="Single tag group">
        <TagList
          items={[
            {
              id: "single-tag",
              color: "blue",
              textValue: "Single tag",
            },
          ]}
        />
      </TagGroup>
    );
  },
};

export const MultipleTags: Story = {
  render: () => {
    return (
      <TagGroup aria-label="Group of three tags">
        <TagList
          items={[
            {
              id: "first",
              textValue: "First",
            },
            {
              id: "second",
              textValue: "Second",
            },
            {
              id: "third",
              textValue: "Third",
            },
          ]}
        />
      </TagGroup>
    );
  },
};

export const MultipleTagsInEachColor: Story = {
  render: () => {
    return (
      <TagGroup label="Colored tags">
        <TagList
          items={[
            {
              id: "bc-blue-tag",
              color: "bc-blue",
              textValue: "BC Blue tag",
            },
            {
              id: "bc-gold-tag",
              color: "bc-gold",
              textValue: "BC Gold tag",
            },
            {
              id: "dark",
              color: "dark",
              textValue: "Dark tag",
            },
            {
              id: "blue-tag",
              color: "blue",
              textValue: "Blue tag",
            },
            {
              id: "green-tag",
              color: "green",
              textValue: "Green tag",
            },
            {
              id: "yellow-tag",
              color: "yellow",
              textValue: "Yellow tag",
            },
            {
              id: "red-tag",
              color: "red",
              textValue: "Red tag",
            },
            {
              id: "grey-tag",
              color: "grey",
              textValue: "Grey tag",
            },
          ]}
        />
      </TagGroup>
    );
  },
};

export const EmptyTagGroup: Story = {
  render: () => (
    <TagGroup aria-label="Empty tag group">
      <TagList
        items={[]}
        renderEmptyState={() => <span>No items selected</span>}
      />
    </TagGroup>
  ),
};

export const RemovableTagGroup: Story = {
  args: {
    label: "Removable tag group",
    onRemove: () => alert("onRemove() called"),
  },
  render: ({ ...args }) => {
    return (
      <TagGroup {...args}>
        <TagList
          items={[
            {
              id: "1",
              textValue: "First",
            },
            {
              id: "2",
              textValue: "Second",
            },
            {
              id: "3",
              textValue: "Third",
            },
          ]}
        />
      </TagGroup>
    );
  },
};

export const TagsWithIcons: Story = {
  render: () => {
    return (
      <TagGroup label="Tags with icons">
        <TagList
          items={[
            {
              id: "files",
              textValue: "Files",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                >
                  <path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z" />
                </svg>
              ),
            },
            {
              id: "emails",
              textValue: "Emails",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                </svg>
              ),
            },
            {
              id: "photos",
              textValue: "Photos",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                </svg>
              ),
            },
          ]}
        />
      </TagGroup>
    );
  },
};

export const SelectionTagGroup: Story = {
  args: {
    label: "Tag group in multiple selection mode",
    onRemove: () => alert("onRemove() called"),
    selectionMode: "multiple",
    selectedKeys: ["1", "3"],
    onSelectionChange: () => alert("onSelectionChange() called"),
  },
  render: ({ ...args }) => {
    return (
      <TagGroup {...args}>
        <TagList
          items={[
            {
              id: "1",
              textValue: "First",
            },
            {
              id: "2",
              textValue: "Second",
            },
            {
              id: "3",
              textValue: "Third",
            },
          ]}
        />
      </TagGroup>
    );
  },
};

export const DisabledTagGroup: Story = {
  args: {
    label: "Tag group with a disabled tag",
    disabledKeys: ["3"],
  },
  render: ({ ...args }) => {
    return (
      <TagGroup {...args}>
        <TagList
          items={[
            {
              id: "1",
              textValue: "First",
            },
            {
              id: "2",
              textValue: "Second",
            },
            {
              id: "3",
              textValue: "Third",
            },
            {
              id: "4",
              textValue: "Fourth",
            },
          ]}
        />
      </TagGroup>
    );
  },
};
