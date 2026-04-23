// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=14991%3A13581
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/ToggleButtonGroup/ToggleButtonGroup.tsx
// component=ToggleButtonGroup

import figma from "figma"

const size = figma.selectedInstance.getEnum("Size", {
  Small: "small",
  Medium: "medium",
})
const orientation = figma.selectedInstance.getEnum("Orientation", {
  Horizontal: "horizontal",
  Vertical: "vertical",
})
const label = (function () {
  const nestedLayer0 = figma.selectedInstance.findInstance("Label")
  return {
    text:
      nestedLayer0.type !== "ERROR"
        ? nestedLayer0.getString("Label text")
        : undefined,
  }
})()
const children = figma.properties.children(["Toggle button*"])

export default {
  id: "ToggleButtonGroup",
  imports: [
    "import { ToggleButtonGroup, ToggleButton } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<ToggleButtonGroup${figma.helpers.react.renderProp(
    "size",
    size,
  )}${figma.helpers.react.renderProp(
    "orientation",
    orientation,
  )}${figma.helpers.react.renderProp("label", label.text)}>
        ${figma.helpers.react.renderChildren(children)}
      </ToggleButtonGroup>`,
  metadata: { nestable: true },
}
