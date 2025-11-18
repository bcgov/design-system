import { Button, Callout } from "@/components";

export default function CalloutPage() {
  return (
    <>
      <h2>Callout</h2>
      <Callout
        title="This is a standard callout"
        description="This callout uses the default layout, with content populated via the title, description and buttons slots."
        buttons={[
          <Button key="callout-page-button-1" size="small">
            Take an action
          </Button>,
          <Button key="callout-page-button-2" size="small" variant="secondary">
            Take a different action
          </Button>,
        ]}
      />
    </>
  );
}
