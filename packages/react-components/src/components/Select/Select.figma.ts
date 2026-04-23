// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=3572%3A4229
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Select/Select.tsx
// component=Select

import figma from "figma"

const size = figma.selectedInstance.getEnum("Size", {
  Small: "small",
  Medium: "medium",
})
const label = (function () {
  const nestedLayer11 = figma.selectedInstance.findInstance("Title")
  return {
    text:
      nestedLayer11.type !== "ERROR"
        ? nestedLayer11.getString("Label text")
        : undefined,
  }
})()
const description =
  figma.selectedInstance.findText("Description Text").textContent
const isOpen = figma.selectedInstance.getBoolean("Menu opened")
const isRequired = (function () {
  const nestedLayer12 = figma.selectedInstance.findInstance("Title")
  return {
    value:
      nestedLayer12.type !== "ERROR"
        ? nestedLayer12.getBoolean("Required")
        : undefined,
  }
})()
const isDisabled = figma.selectedInstance.getEnum("State", {
  Disabled: true,
})
const isInvalid = figma.selectedInstance.getEnum("State", {
  Error: true,
})
const errorMessage =
  figma.selectedInstance.findText("Error Message").textContent

export default {
  id: "Select",
  imports: ["import { Select } from '@bcgov/design-system-react-components';"],
  example: figma.code`<Select${figma.helpers.react.renderProp(
    "size",
    size,
  )}${figma.helpers.react.renderProp(
    "label",
    label.text,
  )}${figma.helpers.react.renderProp(
    "description",
    description,
  )}${figma.helpers.react.renderProp(
    "isOpen",
    isOpen,
  )}${figma.helpers.react.renderProp(
    "isRequired",
    isRequired.value,
  )}${figma.helpers.react.renderProp(
    "isDisabled",
    isDisabled,
  )}${figma.helpers.react.renderProp(
    "isInvalid",
    isInvalid,
  )}${figma.helpers.react.renderProp("errorMessage", errorMessage)}/>`,
  metadata: { nestable: true },
}
