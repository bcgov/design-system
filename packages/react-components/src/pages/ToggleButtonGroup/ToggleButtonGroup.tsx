import {
  ToggleButton,
  ToggleButtonGroup,
  SvgCheckCircleIcon,
  SvgCloseIcon,
  SvgExclamationCircleIcon,
} from "@/components";

export default function ToggleButtonGroupPage() {
  return (
    <>
      <h2>Toggle Button Group</h2>
      <ToggleButtonGroup label="This is a text label">
        <ToggleButton id="1">
          <SvgCheckCircleIcon />
          Button 1
        </ToggleButton>
        <ToggleButton id="2">Button 2</ToggleButton>
        <ToggleButton id="3">Button 3</ToggleButton>
      </ToggleButtonGroup>
      <h3>Multiple selection</h3>
      <ToggleButtonGroup selectionMode="multiple">
        <ToggleButton id="1">Button 1</ToggleButton>
        <ToggleButton id="2">Button 2</ToggleButton>
        <ToggleButton id="3">Button 3</ToggleButton>
        <ToggleButton id="4" isDisabled>
          Button 4 (disabled)
        </ToggleButton>
      </ToggleButtonGroup>
      <h3>Vertical orientation</h3>
      <ToggleButtonGroup orientation="vertical" label="This is a text label">
        <ToggleButton id="1">Button 1</ToggleButton>
        <ToggleButton id="2">Button 2</ToggleButton>
        <ToggleButton id="3">Button 3</ToggleButton>
      </ToggleButtonGroup>
      <h3>Icon buttons</h3>
      <ToggleButtonGroup selectionMode="multiple" label="This is a text label">
        <ToggleButton id="1">
          <SvgCheckCircleIcon />
        </ToggleButton>
        <ToggleButton id="2">
          <SvgExclamationCircleIcon />
        </ToggleButton>
        <ToggleButton id="3">
          <SvgCloseIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
