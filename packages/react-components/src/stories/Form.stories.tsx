import type { Meta, StoryObj } from "@storybook/react";

import { Form } from "../components";
import { FormProps } from "@/components/Form";

const meta = {
  title: "Components/Form",
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
