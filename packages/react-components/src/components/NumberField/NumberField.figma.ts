// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=14421%3A4311
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/NumberField/NumberField.tsx
// component=NumberField

import figma from "figma"

const size = figma.selectedInstance.getEnum("Size", {
  Small: "small",
  Medium: "medium",
})
const label = (function () {
  const nestedLayer15 = figma.selectedInstance.findInstance("Label")
  return {
    text:
      nestedLayer15.type !== "ERROR"
        ? nestedLayer15.getString("Label text")
        : undefined,
  }
})()
const description = (function () {
  const nestedLayer16 = figma.selectedInstance.findInstance("Description")
  return {
    text:
      nestedLayer16.type !== "ERROR"
        ? nestedLayer16.findText("Description").textContent
        : undefined,
  }
})()
const isRequired = (function () {
  const nestedLayer17 = figma.selectedInstance.findInstance("Label")
  return {
    value:
      nestedLayer17.type !== "ERROR"
        ? nestedLayer17.getBoolean("Required")
        : undefined,
  }
})()
const isDisabled = figma.selectedInstance.getEnum("State", {
  Disabled: true,
})
const isReadOnly = figma.selectedInstance.getEnum("State", {
  "Read only": true,
})

export default {
  id: "NumberField",
  imports: [
    "import { NumberField } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<NumberField${figma.helpers.react.renderProp(
    "size",
    size,
  )}${figma.helpers.react.renderProp(
    "label",
    label.text,
  )}${figma.helpers.react.renderProp(
    "description",
    description.text,
  )}${figma.helpers.react.renderProp(
    "isRequired",
    isRequired.value,
  )}${figma.helpers.react.renderProp(
    "isDisabled",
    isDisabled,
  )}${figma.helpers.react.renderProp("isReadOnly", isReadOnly)}/>`,
  metadata: { nestable: true },
}
