import { DatePicker } from "@/components";

export default function DatePickerPage() {
  return (
    <>
      <div className="row">
        <h2>Date picker</h2>
      </div>
      <div className="row">
        <div className="col">
          <DatePicker label="Default" />
        </div>
        <div className="col">
          <DatePicker isBrowserLocaleUsed label="Uses browser locale" />
        </div>
        <div className="col">
          <DatePicker showFormatHelpText={false} label="Format label hidden" />
        </div>
      </div>
    </>
  );
}
