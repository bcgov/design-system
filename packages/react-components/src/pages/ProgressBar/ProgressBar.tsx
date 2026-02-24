import { ProgressBar, ProgressCircle } from "@/components";

export default function ProgressBarPage() {
  return (
    <>
      <h2>ProgressBar</h2>
      <h3>Bar</h3>
      <div className="row">
        <div className="col">
          <ProgressBar size="small" valueLabel="Small" value={25} />
        </div>
        <div className="col">
          <ProgressBar size="medium" valueLabel="Medium" value={50} />
        </div>
        <div className="col">
          <ProgressBar size="large" valueLabel="Large" value={75} />
        </div>
        <div className="col">
          <ProgressBar
            size="large"
            valueLabel="Indeterminate"
            isIndeterminate
          />
        </div>
      </div>
      <h3>Circle</h3>
      <div className="row">
        <div className="col">
          <ProgressCircle size="small" valueLabel="Small" value={25} />
        </div>
        <div className="col">
          <ProgressCircle size="medium" valueLabel="Medium" value={50} />
        </div>
        <div className="col">
          <ProgressCircle size="large" valueLabel="Large" value={75} />
        </div>
        <div className="col">
          <ProgressCircle
            size="large"
            valueLabel="Indeterminate"
            isIndeterminate
          />
        </div>
      </div>
    </>
  );
}
