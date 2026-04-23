// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=16649%3A4759
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/ProgressBar/ProgressBar.tsx
// component=ProgressBar

import figma from "figma"

const size = figma.selectedInstance.getEnum("Track Size", {
  Small: "small",
  Medium: "medium",
  Large: "large",
})
const valueLabel = figma.selectedInstance.getBoolean("Show label & value", {
  true: figma.selectedInstance.getString("Label"),
  false: undefined,
})
const value = figma.selectedInstance.getString("Value")
const isIndeterminate = figma.selectedInstance.getEnum("Style", {
  Indeterminate: true,
})

export default {
  id: "ProgressBar",
  imports: [
    "import { ProgressBar } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<ProgressBar${figma.helpers.react.renderProp(
    "size",
    size,
  )}${figma.helpers.react.renderProp(
    "valueLabel",
    valueLabel,
  )} value={Number(${figma.helpers.react.renderPropValue(
    value,
  )})}${figma.helpers.react.renderProp("isIndeterminate", isIndeterminate)}/>`,
  metadata: { nestable: true },
}
