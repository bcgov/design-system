import { Checkbox, CheckboxGroup } from "@/components";

export default function CheckboxGroupPage() {
  return (
    <>
      <h2>Checkboxes</h2>
      <CheckboxGroup>
        <Checkbox>Checkbox 1</Checkbox>
        <Checkbox>Checkbox 2</Checkbox>
        <Checkbox>Checkbox 3</Checkbox>
        <Checkbox>Checkbox 4</Checkbox>
      </CheckboxGroup>
    </>
  );
}
