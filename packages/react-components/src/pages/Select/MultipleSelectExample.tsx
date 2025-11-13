import { useState } from "react";
import Select, { ListBoxItemProps } from "@/components/Select/Select";
import { Key } from "react-aria-components";

const items: ListBoxItemProps[] = [
  {
    id: "1",
    label: "Item 1",
  },
  {
    id: "2",
    label: "Item 2",
  },
  {
    id: "3",
    label:
      "Item 3",
  },
  {
    id: "4",
    label:
      "Item 4",
  },
];

export default function UseStateExampleWithMultipleSelect() {
  const [selected, setSelected] = useState<Key | null>(null);

  return (
    <>
      <Select
        aria-label="Select example with multiple selection"
        items={items}
        value={selected}
        selectionMode="multiple"
        onChange={(selected) => setSelected(selected)}
      />
      <p>Selected keys: {selected}</p>
    </>
  );
}
