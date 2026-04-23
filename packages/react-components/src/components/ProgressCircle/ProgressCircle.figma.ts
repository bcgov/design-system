// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=16696%3A837
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/ProgressCircle/ProgressCircle.tsx
// component=ProgressCircle

import figma from "figma"

const size = figma.selectedInstance.getEnum("Track Size", {
  Small: "small",
  Medium: "medium",
  Large: "large",
})
const valueLabel = figma.selectedInstance.getBoolean("Description", {
  true: figma.selectedInstance.findText("Progress message").textContent,
  false: undefined,
})
const isIndeterminate = figma.selectedInstance.getEnum("Style", {
  Indeterminate: true,
})

export default {
  id: "ProgressCircle",
  imports: [
    "import { ProgressCircle } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<ProgressCircle${figma.helpers.react.renderProp(
    "size",
    size,
  )}${figma.helpers.react.renderProp(
    "valueLabel",
    valueLabel,
  )}${figma.helpers.react.renderProp("isIndeterminate", isIndeterminate)}/>`,
  metadata: { nestable: true },
}
