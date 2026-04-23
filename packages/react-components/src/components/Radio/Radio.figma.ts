// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=6009%3A2633
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Radio/Radio.tsx
// component=Radio

import figma from "figma"

const children = figma.properties.children(["*"])
const label = (function () {
  const nestedLayer14 = figma.selectedInstance.findInstance("Label")
  return {
    text:
      nestedLayer14.type !== "ERROR"
        ? nestedLayer14.findText("Label").textContent
        : undefined,
  }
})()
const isDisabled = figma.selectedInstance.getEnum("State", {
  Disabled: true,
})

export default {
  id: "Radio",
  imports: ["import { Radio } from '@bcgov/design-system-react-components';"],
  example: figma.code`<Radio${figma.helpers.react.renderProp(
    "value",
    label.text,
  )}${figma.helpers.react.renderProp("isDisabled", isDisabled)}>
        ${figma.helpers.react.renderChildren(children)}
      </Radio>`,
  metadata: { nestable: true },
}
