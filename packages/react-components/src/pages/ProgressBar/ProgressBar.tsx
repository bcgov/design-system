import { ProgressBar } from "@/components";

export default function ProgressBarPage() {
  return (
    <>
      <h2>ProgressBar</h2>
      <h3>Bar</h3>
      <div className="row">
        <div className="col">
          <ProgressBar
            format="bar"
            size="small"
            valueLabel="Small"
            value={25}
          />
        </div>
        <div className="col">
          <ProgressBar
            format="bar"
            size="medium"
            valueLabel="Medium"
            value={50}
          />
        </div>
        <div className="col">
          <ProgressBar
            format="bar"
            size="large"
            valueLabel="Large"
            value={75}
          />
        </div>
        <div className="col">
          <ProgressBar
            format="bar"
            size="large"
            valueLabel="Indeterminate"
            isIndeterminate
          />
        </div>
      </div>
      <h3>Circle</h3>
      <div className="row">
        <div className="col">
          <ProgressBar
            format="circle"
            size="small"
            valueLabel="Small"
            value={25}
          />
        </div>
        <div className="col">
          <ProgressBar
            format="circle"
            size="medium"
            valueLabel="Medium"
            value={50}
          />
        </div>
        <div className="col">
          <ProgressBar
            format="circle"
            size="large"
            valueLabel="Large"
            value={75}
          />
        </div>
        <div className="col">
          <ProgressBar
            format="circle"
            size="large"
            valueLabel="Indeterminate"
            isIndeterminate
          />
        </div>
      </div>
    </>
  );
}
