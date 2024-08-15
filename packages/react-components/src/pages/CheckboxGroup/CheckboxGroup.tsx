import { Checkbox, CheckboxGroup } from "@/components";

export default function CheckboxGroupPage() {
  return (
    <>
      <h2>Checkboxes</h2>
      <CheckboxGroup
        label="Select some items"
        description="This is an additional helper text slot."
      >
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
      <CheckboxGroup
        orientation="horizontal"
        label="Select some items"
        description="This is an additional helper text slot."
      >
        <Checkbox value="1">Checkbox 1</Checkbox>
        <Checkbox value="2">Checkbox 2</Checkbox>
        <Checkbox value="3">Checkbox 3</Checkbox>
        <Checkbox value="4" isDisabled>
          Checkbox 4
        </Checkbox>
      </CheckboxGroup>
      <h2>Checkbox group with errors</h2>
      <CheckboxGroup
        label="Select some items"
        isInvalid
        description="This is an additional helper text slot."
        errorMessage="This is an error message"
      >
        <Checkbox value="1">Checkbox 1</Checkbox>
        <Checkbox value="2" isInvalid>
          Checkbox 2 is invalid
        </Checkbox>
        <Checkbox value="3">Checkbox 3</Checkbox>
        <Checkbox value="4" isDisabled>
          Checkbox 4
        </Checkbox>
      </CheckboxGroup>
    </>
  );
}
