import {
  Button,
  Select,
  TextArea,
  TextField,
  Tooltip,
  TooltipTrigger,
} from "@/components";

import { Form } from "react-aria-components";

export default function FormPage() {
  return (
    <>
      <Form id="bcds-form">
        <h2>Composed form</h2>
        <div>
          <TextField isRequired label="Name" name="name" />
        </div>
        <div>
          <TextField
            isRequired
            type="email"
            name="email"
            label="Email address"
          />
        </div>
        <div>
          <Select
            items={[
              {
                id: "1",
                label: "Victoria",
              },
              {
                id: "2",
                label: "Vancouver",
              },
              {
                id: "3",
                label: "Kelowna",
              },
            ]}
            label="City"
            name="city"
          />
        </div>
        <div>
          <TextField type="url" label="Website" name="url" />
        </div>
        <div>
          <TextArea
            label="Comments"
            name="comments"
            maxLength={500}
            description="Placeholder description"
          />
        </div>
        <div>
          <TooltipTrigger delay={0} closeDelay={1000}>
            <Button variant="primary" size="small" type="submit">
              Submit
            </Button>
            <Tooltip placement="right">
              This is a dummy button, that will show validation errors but
              doesn't submit any data
            </Tooltip>
          </TooltipTrigger>
        </div>
      </Form>
    </>
  );
}
