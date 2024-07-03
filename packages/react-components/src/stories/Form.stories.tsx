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

export const ComposedFormExample: Story = {
  args: {},
  render: ({ ...args }: FormProps) => (
    <Form className={`bcds-react-aria-Form`} {...args}>
      <div className={`.bcds-react-aria-Form--field`}>
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
      <div className={`bcds-react-aria-Form--buttonGroup`}>
        <Button variant="primary" size="small" type="submit">
          Submit
        </Button>
        <Button variant="secondary" size="small" type="reset">
          Reset
        </Button>
      </div>
    </Form>
  ),
};
