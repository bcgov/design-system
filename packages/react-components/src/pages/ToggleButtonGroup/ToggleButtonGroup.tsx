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
      <h3>Icon buttons</h3>
      <ToggleButtonGroup selectionMode="multiple">
        <ToggleButton id="1" isIconButton aria-label="Yes">
          <SvgCheckCircleIcon />
        </ToggleButton>
        <ToggleButton id="2" isIconButton aria-label="Maybe">
          <SvgExclamationCircleIcon />
        </ToggleButton>
        <ToggleButton id="3" isIconButton aria-label="No">
          <SvgCloseIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <h4>Small icon buttons</h4>
      <ToggleButtonGroup selectionMode="multiple">
        <ToggleButton id="1" size="small" isIconButton aria-label="Yes">
          <SvgCheckCircleIcon />
        </ToggleButton>
        <ToggleButton id="2" size="small" isIconButton aria-label="Maybe">
          <SvgExclamationCircleIcon />
        </ToggleButton>
        <ToggleButton id="3" size="small" isIconButton aria-label="No">
          <SvgCloseIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "30%" }}>
          <h3>Vertical orientation</h3>
          <ToggleButtonGroup
            orientation="vertical"
            label="This is a text label"
          >
            <ToggleButton id="1">Button 1</ToggleButton>
            <ToggleButton id="2">Button 2</ToggleButton>
            <ToggleButton id="3">Button 3</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "30%" }}>
          <h3>Multiple selection</h3>
          <ToggleButtonGroup
            selectionMode="multiple"
            label="This group allows multiple items to be toggled"
          >
            <ToggleButton id="1">Button 1</ToggleButton>
            <ToggleButton id="2">Button 2</ToggleButton>
            <ToggleButton id="3">Button 3</ToggleButton>
            <ToggleButton id="4">Button 4</ToggleButton>
            <ToggleButton id="5" isDisabled>
              Button 5 (disabled)
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "30%" }}
        ></div>
      </div>
    </>
  );
}
