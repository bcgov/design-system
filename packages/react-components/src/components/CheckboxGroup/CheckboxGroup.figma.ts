// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=6009%3A993
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/CheckboxGroup/CheckboxGroup.tsx
// component=CheckboxGroup

import figma from "figma"

const orientation = figma.selectedInstance.getEnum("Orientation", {
  Horizontal: "horizontal",
  Vertical: "vertical",
})
const label = figma.selectedInstance.findText("Label").textContent
const description = figma.selectedInstance.findText("Description").textContent
const children = figma.properties.children(["Checkbox*"])
const isInvalid = figma.selectedInstance.getBoolean("Error text")
const errorMessage = figma.selectedInstance.findText("Error text").textContent

export default {
  id: "CheckboxGroup",
  imports: [
    "import { CheckboxGroup, Checkbox } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<CheckboxGroup${figma.helpers.react.renderProp(
    "label",
    label,
  )}${figma.helpers.react.renderProp(
    "description",
    description,
  )}${figma.helpers.react.renderProp(
    "orientation",
    orientation,
  )}${figma.helpers.react.renderProp(
    "isInvalid",
    isInvalid,
  )}${figma.helpers.react.renderProp("errorMessage", errorMessage)}>
        ${figma.helpers.react.renderChildren(children)}
      </CheckboxGroup>`,
  metadata: { nestable: true },
}
