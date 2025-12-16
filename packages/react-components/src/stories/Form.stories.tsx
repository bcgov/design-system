import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Form, Select, TextField } from "../components";
import { FormProps } from "@/components/Form";

import "./Form.css";

const meta = {
  title: "Utility/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    validationBehavior: {
      options: ["native", "aria"],
      control: { type: "radio" },
      description: "Defaults to 'native'",
    },
    className: {
      control: { type: "text" },
      description: "Apply CSS class to form",
    },
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComposedFormExample: Story = {
  args: {
    validationBehavior: "native",
    className: "bcds-react-aria-Form",
  },
  render: ({ ...args }: FormProps) => (
    <Form {...args}>
      <div className="field">
        <TextField isRequired label="Name" />
      </div>
      <div className="field">
        <TextField label="Email address" type="email" />
      </div>
      <div className="field">
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
      <div className="buttonGroup">
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
