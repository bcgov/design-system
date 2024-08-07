import { Switch } from "@/components";

export default function SwitchPage() {
  return (
    <>
      <h2>Switch</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--layout-margin-medium",
        }}
      >
        <Switch>Label</Switch>
        <Switch labelPosition="left">Reversed label position</Switch>
        <Switch isDisabled>Disabled switch</Switch>
        <Switch labelPosition="left" defaultSelected>
          Switch on by default
        </Switch>
      </div>
    </>
  );
}
