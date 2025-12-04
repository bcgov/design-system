import { NumberField } from "@/components";

export default function NumberFieldPage() {
  return (
    <>
      <h2>NumberField</h2>
      <div className="col">
        <div className="row">
          <NumberField label="Default number field" />
          <NumberField label="Small number field" size="small" />
        </div>
        <div className="row">
          <NumberField
            label="Error"
            isInvalid
            errorMessage={"This input is invalid"}
            defaultValue={404}
          />
          <NumberField label="Disabled" isDisabled />
          <NumberField label="Read-only" isReadOnly defaultValue={10} />
        </div>
      </div>
    </>
  );
}
