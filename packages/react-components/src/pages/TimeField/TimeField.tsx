import { Time } from '@internationalized/date';
import { TimeField } from "@/components";

export default function TimeFieldPage() {
  return(
    <>
      <h2>TimeField</h2>
        <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
          <TimeField label="Default TimeField" description="Description"/>
          <TimeField label="24hr TimeField, hour only" hourCycle={24} granularity="hour"/>
          <TimeField label="With seconds" granularity="second"/>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
          <TimeField label="Small" size="small"/>
          <TimeField label="Disabled" isDisabled/>
          <TimeField label="Read-only" value={new Time(11, 45)} isReadOnly/>
          <TimeField label="Errored" isInvalid errorMessage={"Error text"}/>
        </div>
    </>
  );
}