import { Button, InlineAlert } from "@/components";

export default function InlineAlertPage() {
  return (
    <>
      <h2>Inline Alert</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--layout-margin-small",
        }}
      >
        <InlineAlert
          variant="info"
          title="This is a general informational alert"
          description="This is a generic description or additional helper text."
        />
        <InlineAlert
          variant="success"
          title="This is a positive or success alert"
          description="This is a generic description or additional helper text."
        />
        <InlineAlert
          variant="warning"
          title="This is a warning alert"
          description="This is a generic description or additional helper text."
        />
        <InlineAlert
          variant="danger"
          title="This is a danger or error alert"
          description="This is a generic description or additional helper text."
        />
        <InlineAlert
          variant="info"
          title="This is an alert that also has additional actions"
          description="It uses button components to display additional important actions that the user can take."
          buttons={[
            <Button
              variant="secondary"
              size="small"
              key="inline-alert-secondar-button"
            >
              This is a secondary button
            </Button>,
            <Button
              variant="primary"
              size="small"
              key="inline-alert-primary-button"
            >
              This is a primary button
            </Button>,
          ]}
        />
        <InlineAlert
          variant="info"
          isCloseable={true}
          title="This alert is closeable"
        />
        <InlineAlert
          variant="info"
          isIconHidden={true}
          title="This alert has no icon"
        />
      </div>
    </>
  );
}
