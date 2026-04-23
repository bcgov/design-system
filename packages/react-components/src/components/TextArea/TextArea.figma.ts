// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=4157%3A2531
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/TextArea/TextArea.tsx
// component=TextArea

import figma from "figma"

const label = (function () {
  const nestedLayer7 = figma.selectedInstance.findInstance("Label")
  return {
    text:
      nestedLayer7.type !== "ERROR"
        ? nestedLayer7.getString("Label text")
        : undefined,
  }
})()
const description = figma.selectedInstance.findText("Description").textContent
const errorMessage = figma.selectedInstance.getEnum("State", {
  Error: figma.selectedInstance.findText("Error text").textContent,
})
const isRequired = (function () {
  const nestedLayer8 = figma.selectedInstance.findInstance("Label")
  return {
    value:
      nestedLayer8.type !== "ERROR"
        ? nestedLayer8.getBoolean("Required")
        : undefined,
  }
})()
const isDisabled = figma.selectedInstance.getEnum("State", {
  Disabled: true,
})

export default {
  id: "TextArea",
  imports: [
    "import { TextArea } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<TextArea${figma.helpers.react.renderProp(
    "label",
    label.text,
  )}${figma.helpers.react.renderProp(
    "description",
    description,
  )}${figma.helpers.react.renderProp(
    "isRequired",
    isRequired.value,
  )}${figma.helpers.react.renderProp(
    "isDisabled",
    isDisabled,
  )}${figma.helpers.react.renderProp("errorMessage", errorMessage)}/>`,
  metadata: { nestable: true },
}
