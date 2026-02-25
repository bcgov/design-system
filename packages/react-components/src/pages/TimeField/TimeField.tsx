import { Time } from "@internationalized/date";
import { TimeField } from "@/components";

export default function TimeFieldPage() {
  return (
    <>
      <h2>TimeField</h2>
      <div className="col">
        <div className="row">
          <TimeField label="Default TimeField" description="Description" />
          <TimeField label="With seconds" granularity="second" />
          <TimeField
            label="24hr TimeField, hour only"
            hourCycle={24}
            granularity="hour"
          />
        </div>
        <div className="row">
          <TimeField label="Small" size="small" />
          <TimeField label="With seconds" granularity="second" size="small" />
          <TimeField
            label="24hr TimeField, hour only"
            hourCycle={24}
            granularity="hour"
            size="small"
          />
        </div>
        <div className="row">
          <TimeField label="Disabled" isDisabled />
          <TimeField label="Read-only" value={new Time(11, 45)} isReadOnly />
          <TimeField label="Errored" isInvalid errorMessage={"Error text"} />
        </div>
      </div>
    </>
  );
}
