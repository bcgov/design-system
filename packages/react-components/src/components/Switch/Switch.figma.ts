// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=5146%3A248
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Switch/Switch.tsx
// component=Switch

import figma from "figma"

const children = (function () {
  const nestedLayer10 = figma.selectedInstance.findInstance("Label")
  return {
    text:
      nestedLayer10.type !== "ERROR"
        ? nestedLayer10.findText("Label").textContent
        : undefined,
  }
})()
const labelPosition = figma.selectedInstance.getEnum("Layout", {
  "Label before": "left",
  "Label after": "right",
})
const isSelected = figma.selectedInstance.getBoolean("Active")
const isDisabled = figma.selectedInstance.getEnum("State", {
  Disabled: true,
})

export default {
  id: "Switch",
  imports: ["import { Switch } from '@bcgov/design-system-react-components';"],
  example: figma.code`<Switch${figma.helpers.react.renderProp(
    "isSelected",
    isSelected,
  )}${figma.helpers.react.renderProp(
    "isDisabled",
    isDisabled,
  )}${figma.helpers.react.renderProp("labelPosition", labelPosition)}>
        ${figma.helpers.react.renderChildren(children.text)}
      </Switch>`,
  metadata: { nestable: true },
}
