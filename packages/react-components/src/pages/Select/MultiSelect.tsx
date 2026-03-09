import Select from "@/components/Select/Select";
import { SvgCalendarIcon } from "@/components";
import { TagProps } from "@/components/Tag";

export default function MultiSelectExample() {
  const items = [
    {
      id: "1",
      label: "Option 1",
      color: "bc-blue" as TagProps["color"],
    },
    {
      id: "2",
      label: "Option 2",
      tagStyle: "circular" as TagProps["tagStyle"],
    },
    {
      id: "3",
      label: "Option 3",
      iconLeft: <SvgCalendarIcon />,
    },
    {
      id: "4",
      label: "Option 4",
    },
    {
      id: "5",
      label: "Option 5",
    },
    {
      id: "6",
      label: "Option 6",
    },
    {
      id: "7",
      label: "Option 7",
    },
    {
      id: "8",
      label: "Option 8",
    },
  ];
  return (
    <div className="col" style={{ gap: "var(--layout-margin-medium)" }}>
      <Select
        label="Pick some options"
        description="Allows multiple options to be selected"
        selectionMode="multiple"
        items={items}
      />
      <Select
        label="Pick some options"
        description="Allows multiple options to be selected"
        selectionMode="multiple"
        items={items}
        overflow="scroll"
      />
    </div>
  );
}
