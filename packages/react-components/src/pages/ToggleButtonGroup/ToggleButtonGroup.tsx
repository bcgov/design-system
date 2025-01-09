import { ToggleButton, ToggleButtonGroup } from "@/components";

export default function ToggleButtonGroupPage() {
  return (
    <>
      <h2>Toggle Button Group</h2>
      <ToggleButtonGroup>
        <ToggleButton id="1">Button 1</ToggleButton>
        <ToggleButton id="2">Button 2</ToggleButton>
        <ToggleButton id="3">Button 3</ToggleButton>
      </ToggleButtonGroup>
      <h3>Multiple selection</h3>
      <ToggleButtonGroup selectionMode="multiple">
        <ToggleButton id="1">Button 1</ToggleButton>
        <ToggleButton id="2">Button 2</ToggleButton>
        <ToggleButton id="3">Button 3</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
