import { RadioGroup, Radio } from "@/components";

import { Container, Col, Row } from "react-grid-system";

export default function RadioGroupPage() {
  return (
    <>
      <Container>
        <Row>
          <h2>RadioGroup</h2>
        </Row>
        <Row>
          <Col>
            <h3>Required RadioGroup</h3>
            <RadioGroup
              label="Text label"
              description="Additional description or helper text"
              isRequired
            >
              <Radio value="1">Option 1</Radio>
              <Radio value="2">Option 2</Radio>
              <Radio value="3">Option 3</Radio>
              <Radio value="4">Option 4</Radio>
            </RadioGroup>
          </Col>
          <Col>
            <h3>RadioGroup with default value</h3>
            <RadioGroup
              label="This radio group has a default value"
              defaultValue="3"
            >
              <Radio value="1">Option 1</Radio>
              <Radio value="2">Option 2</Radio>
              <Radio value="3">Option 3</Radio>
              <Radio value="4">Option 4</Radio>
            </RadioGroup>
          </Col>
          <Col>
            <h3>Horizontal RadioGroup</h3>
            <RadioGroup
              label="This is a horizontal radio group"
              orientation="horizontal"
            >
              <Radio value="1">Option 1</Radio>
              <Radio value="2">Option 2</Radio>
              <Radio value="3">Option 3</Radio>
              <Radio value="4">Option 4</Radio>
            </RadioGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}
