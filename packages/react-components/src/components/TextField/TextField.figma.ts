// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=3649%3A14334
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/TextField/TextField.tsx
// component=TextField

import figma from "figma"

const size = figma.selectedInstance.getEnum("Size", {
  Medium: "medium",
  Small: "small",
})
const label = (function () {
  const nestedLayer5 = figma.selectedInstance.findInstance("Title")
  return {
    text:
      nestedLayer5.type !== "ERROR"
        ? nestedLayer5.getString("Label text")
        : undefined,
  }
})()
const description = figma.selectedInstance.getString("Description text")
const errorMessage = figma.selectedInstance.getEnum("State", {
  Error: figma.selectedInstance.findText("Error Message").textContent,
})
const iconLeft = figma.selectedInstance.getBoolean("Show left Icon", {
  true: figma.selectedInstance
    .getInstanceSwap("Left icon placeholder")
    ?.executeTemplate().example,
  false: undefined,
})
const iconRight = figma.selectedInstance.getBoolean("Show right icon", {
  true: figma.selectedInstance
    .getInstanceSwap("Right icon placeholder")
    ?.executeTemplate().example,
  false: undefined,
})
const isRequired = (function () {
  const nestedLayer6 = figma.selectedInstance.findInstance("Title")
  return {
    value:
      nestedLayer6.type !== "ERROR"
        ? nestedLayer6.getBoolean("Required")
        : undefined,
  }
})()
const isDisabled = figma.selectedInstance.getEnum("State", {
  Disabled: true,
})

export default {
  id: "TextField",
  imports: [
    "import { TextField } from '@bcgov/design-system-react-components'",
  ],
  example: figma.code`<TextField${figma.helpers.react.renderProp(
    "size",
    size,
  )}${figma.helpers.react.renderProp(
    "label",
    label.text,
  )}${figma.helpers.react.renderProp(
    "description",
    description,
  )}${figma.helpers.react.renderProp(
    "iconLeft",
    iconLeft,
  )}${figma.helpers.react.renderProp(
    "iconRight",
    iconRight,
  )}${figma.helpers.react.renderProp(
    "isRequired",
    isRequired.value,
  )}${figma.helpers.react.renderProp(
    "isDisabled",
    isDisabled,
  )}${figma.helpers.react.renderProp("errorMessage", errorMessage)}/>`,
  metadata: { nestable: true },
}
