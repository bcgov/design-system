import type { Meta, StoryObj } from "@storybook/react-vite";

import { Select } from "../components";
import SvgPlaceholderIcon from "@/components/Icons/SvgPlaceholderIcon";

const meta = {
  title: "Inputs and controls/Select",
  component: Select,
  parameters: {
    layout: "centered",
    a11y: {
      config: {
        // overrides automated accessibility testing for aria-hidden-focus to suppress a known false positive
        // see https://react-spectrum.adobe.com/react-aria/Select.html#false-positives for more information
        rules: [{ id: "aria-hidden-focus", enabled: false }],
      },
    },
  },
  argTypes: {
    size: {
      options: ["medium", "small"],
      control: { type: "radio" },
      description: "Defaults to 'medium', also supports 'small'",
    },
    label: {
      control: { type: "text" },
      description: "Text label that appears above the select button",
    },
    description: {
      control: { type: "text" },
      description:
        "Additional description or helper text below the select button",
    },
    placeholder: {
      control: { type: "text" },
      description:
        "Text label that appears inside the select input before an option has been selected",
    },
    errorMessage: {
      control: { type: "text" },
      description: "Text displayed when the input is invalid",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  {
    id: "1",
    label: "Option one",
  },
  {
    id: "2",
    label: "Option two",
  },
  {
    id: "3",
    label: "Option three",
  },
];

export const SelectTemplate: Story = {
  args: {
    label: "Label",
    size: "medium",
    description: "Optional description or helper text",
    isRequired: false,
    isDisabled: false,
    isInvalid: false,
    items: items,
  },
};

export const FlatList: Story = {
  args: {
    ...SelectTemplate.args,
  },
};

export const Small: Story = {
  args: {
    ...SelectTemplate.args,
    label: "Small",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    ...SelectTemplate.args,
    label: "Medium",
    size: "medium",
  },
};

export const Required: Story = {
  args: {
    ...SelectTemplate.args,
    label: "Required example",
    isRequired: true,
  },
};

export const Disabled: Story = {
  args: {
    ...SelectTemplate.args,
    label: "Disabled example",
    isDisabled: true,
  },
};

export const Placeholder: Story = {
  args: {
    ...SelectTemplate.args,
    label: "Placeholder text example",
    placeholder: "Placeholder text to instruct user",
  },
};

export const LongText: Story = {
  args: {
    ...SelectTemplate.args,
    label: "Long text in option descriptions",
    items: [
      {
        id: "1",
        label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        id: "2",
        label:
          "Suspendisse mi leo, gravida non consectetur vel, tincidunt eu nisl",
      },
      {
        id: "3",
        label:
          "Nunc faucibus, magna nec condimentum venenatis, nunc dui euismod metus, et vehicula elit purus in ex",
      },
      {
        id: "4",
        label:
          "Quisque velit tortor, facilisis eu orci vitae, tristique convallis nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      },
    ],
  },
  render: ({ ...args }) => <Select {...args} />,
};

export const Invalid: Story = {
  args: {
    ...SelectTemplate.args,
    label: "Invalid example",
    isInvalid: true,
    errorMessage: "Error messages can be customised or passed programmatically",
  },
};

const sections = [
  {
    header: "Fruit",
    id: "section-fruit",
    items: [
      { id: "apple", label: "Apple" },
      { id: "banana", label: "Banana" },
      { id: "orange", label: "Orange" },
      { id: "honeydew", label: "Honeydew" },
    ],
  },
  {
    header: "Vegetable",
    id: "section-vegetable",
    items: [
      { id: "cabbage", label: "Cabbage" },
      { id: "broccoli", label: "Broccoli" },
      { id: "carrots", label: "Carrots" },
      { id: "lettuce", label: "Lettuce" },
    ],
  },
];

export const Sections: Story = {
  args: {
    ...SelectTemplate.args,
    label: "Sectioned options",
    items: undefined,
    sections: sections,
  },
};

export const FlatWithDestructionOption: Story = {
  args: {
    ...SelectTemplate.args,
    label: "Destruction option",
    items: [
      ...items,
      {
        id: "4",
        isDestructive: true,
        label: "Destruction option",
      },
    ],
  },
};

export const SectionsWithDestructionOption: Story = {
  args: {
    label: "Sectioned with destruction option",
    sections: [
      ...sections,
      {
        id: "destruction-section",
        items: [
          {
            id: "destruction",
            label: "Destruction option",
            isDestructive: true,
          },
        ],
      },
    ],
  },
};

const itemsWithDescriptions = [
  {
    id: 1,
    label: "Option one label",
    description: "Description of option one",
  },
  {
    id: 2,
    label: "Option two label",
    description: "Description of option two",
  },
  {
    id: 3,
    label: "Option three label",
    description: "Description of option three",
  },
];

export const OptionDescriptions: Story = {
  args: {
    ...SelectTemplate.args,
    label: "Options with descriptions",
    items: itemsWithDescriptions,
  },
};

export const LeftIcon: Story = {
  args: {
    ...SelectTemplate.args,
    label: "Options with left icons",
    items: [
      {
        ...items[0],
        iconLeft: <SvgPlaceholderIcon />,
      },
      {
        ...items[1],
        iconLeft: <SvgPlaceholderIcon />,
      },
      {
        ...items[2],
        iconLeft: <SvgPlaceholderIcon />,
      },
    ],
  },
};

export const RightIcon: Story = {
  args: {
    ...SelectTemplate.args,
    label: "Options with right icons",
    items: [
      {
        ...items[0],
        iconRight: <SvgPlaceholderIcon />,
      },
      {
        ...items[1],
        iconRight: <SvgPlaceholderIcon />,
      },
      {
        ...items[2],
        iconRight: <SvgPlaceholderIcon />,
      },
    ],
  },
};

export const BothIcons: Story = {
  args: {
    ...SelectTemplate.args,
    label: "Options with both icons",
    items: [
      {
        ...items[0],
        iconLeft: <SvgPlaceholderIcon />,
        iconRight: <SvgPlaceholderIcon />,
      },
      {
        ...items[1],
        iconLeft: <SvgPlaceholderIcon />,
        iconRight: <SvgPlaceholderIcon />,
      },
      {
        ...items[2],
        iconLeft: <SvgPlaceholderIcon />,
        iconRight: <SvgPlaceholderIcon />,
      },
    ],
  },
};

export const DescriptionAndLeftIcon: Story = {
  args: {
    ...SelectTemplate.args,
    label: "Options with descriptions and left icons",
    items: [
      {
        ...itemsWithDescriptions[0],
        iconLeft: <SvgPlaceholderIcon />,
      },
      {
        ...itemsWithDescriptions[1],
        iconLeft: <SvgPlaceholderIcon />,
      },
      {
        ...itemsWithDescriptions[2],
        iconLeft: <SvgPlaceholderIcon />,
      },
    ],
  },
};

export const DescriptionAndRightIcon: Story = {
  args: {
    ...SelectTemplate.args,
    label: "Options with descriptions and right icons",
    items: [
      {
        ...itemsWithDescriptions[0],
        iconRight: <SvgPlaceholderIcon />,
      },
      {
        ...itemsWithDescriptions[1],
        iconRight: <SvgPlaceholderIcon />,
      },
      {
        ...itemsWithDescriptions[2],
        iconRight: <SvgPlaceholderIcon />,
      },
    ],
  },
};

export const DescriptionAndBothIcons: Story = {
  args: {
    ...SelectTemplate.args,
    label: "Options with descriptions and both icons",
    items: [
      {
        ...itemsWithDescriptions[0],
        iconLeft: <SvgPlaceholderIcon />,
        iconRight: <SvgPlaceholderIcon />,
      },
      {
        ...itemsWithDescriptions[1],
        iconLeft: <SvgPlaceholderIcon />,
        iconRight: <SvgPlaceholderIcon />,
      },
      {
        ...itemsWithDescriptions[2],
        iconLeft: <SvgPlaceholderIcon />,
        iconRight: <SvgPlaceholderIcon />,
      },
    ],
  },
};

export const DescriptionBothIconsAndDestruction: Story = {
  args: {
    ...SelectTemplate.args,
    label: "Options with descriptions, icons, destruction",
    items: [
      {
        ...itemsWithDescriptions[0],
        iconLeft: <SvgPlaceholderIcon />,
        iconRight: <SvgPlaceholderIcon />,
      },
      {
        ...itemsWithDescriptions[1],
        iconLeft: <SvgPlaceholderIcon />,
        iconRight: <SvgPlaceholderIcon />,
      },
      {
        ...itemsWithDescriptions[2],
        iconLeft: <SvgPlaceholderIcon />,
        iconRight: <SvgPlaceholderIcon />,
        isDestructive: true,
      },
    ],
  },
};
