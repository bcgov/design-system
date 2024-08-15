import { Checkbox, CheckboxGroup } from "@/components";

export default function CheckboxGroupPage() {
  return (
    <>
      <h2>Checkboxes</h2>
      <CheckboxGroup>
        <Checkbox value="1">Checkbox 1</Checkbox>
        <Checkbox value="2">Checkbox 2</Checkbox>
        <Checkbox value="3" isIndeterminate>
          Checkbox 3 is indeterminate
        </Checkbox>
        <Checkbox value="4" isDisabled>
          Checkbox 4 is disabled
        </Checkbox>
        <Checkbox value="5">Checkbox 5 (same value as 6)</Checkbox>
        <Checkbox value="5">Checkbox 6 (same value as 5)</Checkbox>
      </CheckboxGroup>
      <h2>Horizontal checkboxes</h2>
      <CheckboxGroup orientation="horizontal">
        <Checkbox value="1">Checkbox 1</Checkbox>
        <Checkbox value="2">Checkbox 2</Checkbox>
        <Checkbox value="3">Checkbox 3</Checkbox>
        <Checkbox value="4" isDisabled>
          Checkbox 4
        </Checkbox>
      </CheckboxGroup>
    </>
  );
}
