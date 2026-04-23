// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=6009%3A2784
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/RadioGroup/RadioGroup.tsx
// component=RadioGroup

import figma from "figma"

const orientation = figma.selectedInstance.getEnum("Orientation", {
  Vertical: "vertical",
  Horizontal: "horizontal",
})
const label = (function () {
  const nestedLayer13 = figma.selectedInstance.findInstance("Label")
  return {
    text:
      nestedLayer13.type !== "ERROR"
        ? nestedLayer13.findText("Label").textContent
        : undefined,
  }
})()
const description = figma.selectedInstance.findText("Description").textContent
const errorMessage = figma.selectedInstance.findText("Error text").textContent
const children = figma.properties.children(["*"])

export default {
  id: "RadioGroup",
  imports: [
    "import { RadioGroup, Radio } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<RadioGroup${figma.helpers.react.renderProp(
    "orientation",
    orientation,
  )}${figma.helpers.react.renderProp(
    "label",
    label.text,
  )}${figma.helpers.react.renderProp(
    "description",
    description,
  )}${figma.helpers.react.renderProp("errorMessage", errorMessage)}>
        ${figma.helpers.react.renderChildren(children)}
      </RadioGroup>`,
  metadata: { nestable: true },
}
