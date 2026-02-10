import { ProgressBar } from "@/components";

export default function ProgressBarPage() {
  return (
    <>
      <h2>ProgressBar</h2>
      <h3>Bar</h3>
      <div className="row">
        <div className="col">
          <ProgressBar format="bar" size="small" label="Small" value={25} />
        </div>
        <div className="col">
          <ProgressBar format="bar" size="medium" label="Medium" value={50} />
        </div>
        <div className="col">
          <ProgressBar format="bar" size="large" label="Large" value={75} />
        </div>
        <div className="col">
          <ProgressBar
            format="bar"
            size="large"
            label="Indeterminate"
            isIndeterminate
          />
        </div>
      </div>
      <h3>Circle</h3>
      <div className="row">
        <div className="col">
          <ProgressBar format="circle" size="small" label="Small" value={25} />
        </div>
        <div className="col">
          <ProgressBar
            format="circle"
            size="medium"
            label="Medium"
            value={50}
          />
        </div>
        <div className="col">
          <ProgressBar format="circle" size="large" label="Large" value={75} />
        </div>
        <div className="col">
          <ProgressBar
            format="circle"
            size="large"
            label="Indeterminate"
            isIndeterminate
          />
        </div>
      </div>
    </>
  );
}
