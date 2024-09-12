import { RadioGroup, Radio } from "@/components";

export default function RadioGroupPage() {
  return (
    <>
      <h2>RadioGroup</h2>
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
      <h3>RadioGroup with default value</h3>
      <RadioGroup label="This radio group has a default value" defaultValue="3">
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
        <Radio value="3">Option 3</Radio>
        <Radio value="4">Option 4</Radio>
      </RadioGroup>
      <h3>Horizontal RadioGroup</h3>
      <RadioGroup
        label="This is a horizontal radio group"
        orientation="horizontal"
        flexWrap="wrap"
      >
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
        <Radio value="3">Option 3</Radio>
        <Radio value="4">Option 4</Radio>
        <Radio value="5">Option 5</Radio>
      </RadioGroup>
    </>
  );
}
