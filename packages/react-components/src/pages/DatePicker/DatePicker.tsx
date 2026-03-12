import { DatePicker } from "@/components";

export default function DatePickerPage() {
  return (
    <>
      <div className="row">
        <h2>Date picker</h2>
      </div>
      <div className="row">
        <DatePicker label="Default" />
        <DatePicker isBrowserLocaleUsed label="Uses browser locale" />
        <DatePicker showFormatHelpText={false} label="Format label hidden" />
      </div>
    </>
  );
}
