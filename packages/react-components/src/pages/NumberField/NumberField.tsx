import { NumberField } from "@/components";
import {useState} from "react";

export default function NumberFieldPage() {
  const [value, setValue] = useState(1);

  function handleChange(num: number) {
      setValue(num);
  }

  return (
    <>
      <h2>NumberField</h2>
      <NumberField value={value} label={"Normal mode"} onChange={handleChange}/>
      <NumberField value={value} label={"Error mode"}/>
      <NumberField value={value} label={"Disable mode"} onChange={(num) => handleChange(num)} isDisabled/>
      <NumberField value={value} label={"Read only mode"} onChange={(num) => handleChange(num)} isReadOnly/>
    </>
  );
}
