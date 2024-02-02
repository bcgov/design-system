import { useState } from "react";
import Select, { ListBoxItemProps } from "@/components/Select/Select";
import { Key } from "react-aria-components";

const items: ListBoxItemProps[] = [
  {
    id: "1",
    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: "2",
    label: "Suspendisse mi leo, gravida non consectetur vel, tincidunt eu nisl",
  },
  {
    id: "3",
    label:
      "Nunc faucibus, magna nec condimentum venenatis, nunc dui euismod metus, et vehicula elit purus in ex",
  },
  {
    id: "4",
    label:
      "Quisque velit tortor, facilisis eu orci vitae, tristique convallis nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
  },
];

export default function UseStateExample() {
  const [selected, setSelected] = useState<Key>();

  return (
    <>
      <Select
        aria-label="Select example"
        items={items}
        onSelectionChange={(selected: Key) => setSelected(selected)}
      />
      <p>Selected Key: {selected}</p>
    </>
  );
}
