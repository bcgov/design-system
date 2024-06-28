import type { Meta, StoryObj } from "@storybook/react";

import { Form, Select, Button } from "../components";
import { FormProps } from "@/components/Form";

const meta = {
  title: "Components/Form/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormTemplate: Story = {
  args: {},
  render: ({ ...args }: FormProps) => <Form {...args} />,
};

export const ComposedFormExample: Story = {
  args: {},
  render: ({ ...args }: FormProps) => (
    <Form {...args}>
      <div>
        <Select
          items={[
            {
              id: "1",
              label: "Agnetha",
            },
            {
              id: "2",
              label: "Björn",
            },
            {
              id: "3",
              label: "Benny",
            },
            {
              id: "4",
              label: "Anni-Frid",
            },
          ]}
          label="Favourite member of Abba"
          isRequired
        />
      </div>
      <div>
        <Button variant="primary" size="small" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  ),
};
