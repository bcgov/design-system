import Select from "@/components/Select/Select";

export default function MultiSelectExample() {
  const items = [
    {
      id: "1",
      label: "Option 1",
    },
    {
      id: "2",
      label: "Option 2",
    },
    {
      id: "3",
      label: "Option 3",
    },
    {
      id: "4",
      label: "Option 4",
    },
  ];
  return (
    <>
      <Select
        label="Pick some options"
        description="Allows multiple options to be selected"
        selectionMode="multiple"
        items={items}
      />
    </>
  );
}
