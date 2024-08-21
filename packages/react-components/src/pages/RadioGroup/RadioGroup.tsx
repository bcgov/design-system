import { RadioGroup, Radio } from "@/components";

export default function RadioGroupPage() {
  return (
    <>
      <h2>RadioGroup</h2>
      <RadioGroup label="Text label" isRequired>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup>
    </>
  );
}
