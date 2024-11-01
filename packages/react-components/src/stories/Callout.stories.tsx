import type { Meta, StoryObj } from "@storybook/react";

import { Button, Callout, Form, TextField, Select } from "../components";
import { CalloutProps } from "@/components/Callout";

const meta = {
  title: "Components/Callout/Callout",
  component: Callout,
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      options: ["default", "lightBlue", "darkBlue", "lightGold"],
      control: { type: "radio" },
      description: "Sets the theme of the alert",
    },
    title: {
      control: { type: "text" },
      description: "Sets the callout title",
    },
    description: {
      control: { type: "text" },
      description: "Sets the callout text",
    },
    buttons: {
      control: { type: "object" },
      description: "Expects an array of button components",
    },
    children: {
      control: { type: "object" },
      description:
        "Pass in your own content and components, overriding default layout",
    },
    role: {
      control: { type: "text" },
      description: "Sets the ARIA role for the callout. Defaults to `note`",
    },
  },
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CalloutTemplate: Story = {
  args: {
    variant: "default",
    title: "Callout title",
    role: "note",
    description:
      "Use the description slot to provide the main content of the callout.",
    buttons: [
      <Button variant="secondary" size="small">
        Button 1
      </Button>,
      <Button variant="primary" size="small">
        Button 2
      </Button>,
    ],
  },
  render: ({ ...args }: CalloutProps) => <Callout {...args} />,
};

export const LightBlueTheme: Story = {
  ...CalloutTemplate,
  args: {
    variant: "lightBlue",
    title: "This callout uses the lightBlue theme",
    description:
      "Use the description slot to provide the main content of the callout.",
    buttons: [
      <Button variant="secondary" size="small">
        Button 1
      </Button>,
      <Button variant="primary" size="small">
        Button 2
      </Button>,
    ],
  },
};

export const DarkBlueTheme: Story = {
  ...CalloutTemplate,
  args: {
    variant: "darkBlue",
    title: "This callout uses the darkBlue theme",
    description:
      "Use the description slot to provide the main content of the callout.",
    buttons: [
      <Button variant="secondary" size="small">
        Button 1
      </Button>,
      <Button variant="primary" size="small">
        Button 2
      </Button>,
    ],
  },
};

export const LightGoldTheme: Story = {
  ...CalloutTemplate,
  args: {
    variant: "lightGold",
    title: "This callout uses the lightGold theme",
    description:
      "Use the description slot to provide the main content of the callout.",
    buttons: [
      <Button variant="secondary" size="small">
        Button 1
      </Button>,
      <Button variant="primary" size="small">
        Button 2
      </Button>,
    ],
  },
};

export const TextOnlyCallout: Story = {
  args: {
    variant: "default",
    description:
      "All of the default content slots are optional. If you don't provide a value, nothing is rendered.",
  },
};

export const CustomCallout: Story = {
  args: {
    variant: "default",
    children: [
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--layout-margin-small)",
        }}
      >
        <div style={{ font: "var(--typography-regular-body" }}>
          You can pass components as children to override the default callout
          layout.
        </div>
        <Form
          style={{
            display: "inline-flex",
            flexDirection: "row",
            gap: "var(--layout-margin-medium)",
            justifyContent: "space-between",
          }}
        >
          <TextField label="Enter something" style={{ flexGrow: "1" }} />
          <Select
            label="Pick one"
            items={[
              { id: "1", label: "Option 1" },
              { id: "2", label: "Option 2" },
            ]}
          ></Select>
          <Button
            type="submit"
            variant="primary"
            style={{ height: "40px", alignSelf: "last baseline" }}
          >
            Submit
          </Button>
        </Form>
      </div>,
    ],
  },
};
