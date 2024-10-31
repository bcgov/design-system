import { Button, Callout } from "@/components";

export default function CalloutPage() {
  return (
    <>
      <h2>Callout</h2>
      <Callout
        title="This is a standard callout"
        description="This callout uses the default layout, with content populated via the title, description and buttons slots."
        buttons={[
          <Button size="small">Take an action</Button>,
          <Button size="small" variant="secondary">
            Take a different action
          </Button>,
        ]}
      />
      <Callout></Callout>
    </>
  );
}
