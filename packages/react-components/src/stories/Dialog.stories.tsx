import type { Meta, StoryObj } from "@storybook/react";

import {
  Button,
  ButtonGroup,
  Dialog,
  DialogTrigger,
  Form,
  Modal,
  Select,
  TextField,
} from "../components";
import { DialogProps } from "../components/Dialog";

const meta = {
  title: "Components/Dialogs/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isCloseable: {
      control: { type: "boolean" },
      description: "Toggles display of close icon",
    },
    children: {
      control: { type: "object" },
      description: "Populates dialog content",
    },
  },
  args: {
    isCloseable: true,
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DialogTemplate: Story = {
  args: {
    children: [
      <div>
        <h2 style={{ font: "var(--typography-bold-h2)", textAlign: "center" }}>
          Dialog title
        </h2>
      </div>,
    ],
  },
  render: ({ ...args }: DialogProps) => (
    <DialogTrigger>
      <Button>Open the dialog</Button>
      <Modal>
        <Dialog {...args} />
      </Modal>
    </DialogTrigger>
  ),
};

export const DialogWithForm: Story = {
  args: {
    children: [
      <div style={{ padding: "var(--layout-padding-medium" }}>
        <span
          style={{
            font: "var(--typography-bold-h5)",
          }}
        >
          This dialog contains a form
        </span>
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--layout-margin-small)",
          }}
        >
          <TextField isRequired label="Name" />
          <TextField isRequired type="email" label="Email address" />
          <Select
            items={[
              { id: "chilliwack", label: "Chilliwack" },
              { id: "kelowna", label: "Kelowna" },
              { id: "kamloops", label: "Kamloops" },
              { id: "nanaimo", label: "Nanaimo" },
              { id: "princegeorge", label: "Prince George" },
              { id: "vancouver", label: "Vancouver" },
              { id: "victoria", label: "Victoria" },
            ]}
            label="City"
            isRequired
          />
          <ButtonGroup alignment="start" orientation="horizontal">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="secondary" type="reset">
              Reset
            </Button>
          </ButtonGroup>
        </Form>
      </div>,
    ],
  },
  render: ({ ...args }: DialogProps) => (
    <DialogTrigger>
      <Button>Open the form</Button>
      <Modal>
        <Dialog {...args} />
      </Modal>
    </DialogTrigger>
  ),
};
