import { Select } from "@/components";
import UseStateExample from "./UseStateExample";

export default function SelectPage() {
  const items = [
    {
      id: "1",
      label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: "2",
      label:
        "Suspendisse mi leo, gravida non consectetur vel, tincidunt eu nisl",
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
  return (
    <>
      <h2>Select</h2>
      <h3>Default</h3>
      <div className="row">
        <Select label="Default" description="Description" items={items} />
        <Select
          label="Default"
          description="Description"
          items={items}
          isDisabled
        />
      </div>
      <h3>Small</h3>
      <div className="row">
        <Select
          size="small"
          label="Default"
          description="Description"
          items={items}
        />
        <Select
          size="small"
          label="Default"
          description="Description"
          items={items}
          isDisabled
        />
      </div>
      <h3>Select with useState</h3>
      <div className="row">
        <UseStateExample />
        <div className="col"></div>
      </div>
    </>
  );
}
