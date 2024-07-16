import { useState } from "react";

import { TextArea } from "@/components";

export default function TextAreaPage() {
  const [text, setText] = useState("initial text state");

  function handleTextChange(text: string) {
    console.log("new text value: ", text);

    setText(text);
  }

  return (
    <>
      <h2>TextArea</h2>
      <div>
        <p>
          <code>text</code>: {text}{" "}
        </p>
        <TextArea
          label={"Controlled"}
          value={text}
          onChange={handleTextChange}
          maxLength={500}
        />
      </div>
      <div>
        <TextArea label={"Uncontrolled"} maxLength={500} defaultValue="Hello" />
      </div>
    </>
  );
}
