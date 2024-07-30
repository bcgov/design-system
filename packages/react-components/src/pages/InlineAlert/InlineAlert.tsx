import { InlineAlert } from "@/components";

export default function InlineAlertPage() {
  return (
    <>
      <h2>Inline Alert</h2>
      <div className="alertGroup">
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
          title="This is a general informational alert"
        />
        <InlineAlert
          variant="info"
          isCloseable={true}
          title="This alert is closeable"
        />
        <InlineAlert
          variant="info"
          showIcon={false}
          title="This alert has no icon"
        />
      </div>
    </>
  );
}
