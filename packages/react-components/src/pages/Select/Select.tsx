import { ListBoxItem, Select } from "@/components";
import UseStateExample from "./UseStateExample";

export default function SelectPage() {
  return (
    <>
      <h2>Select</h2>

      <hr />

      <h3>Select with useState</h3>
      <UseStateExample />

      <hr />

      <Select label="Children example">
        <ListBoxItem id="1" label="Item 1" href="https://example.org" />
        <ListBoxItem id="2" label="Item 2" />
      </Select>
    </>
  );
}
