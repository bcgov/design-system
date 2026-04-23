// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=19285%3A4805
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/TimeField/TimeField.tsx
// component=TimeField

import figma from "figma"

const size = figma.selectedInstance.getEnum("Size", {
  Medium: "medium",
  Small: "small",
})
const hideTimeZone = figma.selectedInstance.getBoolean("Timezone", {
  false: true,
  true: false,
})
const hourCycle = (function () {
  const nestedLayer1 = figma.selectedInstance.findInstance(
    "Time field/time value group",
  )
  return {
    value:
      nestedLayer1.type !== "ERROR"
        ? nestedLayer1.getBoolean("12 Hour cycle?", {
            true: 12,
            false: 24,
          })
        : undefined,
  }
})()
const granularity = (function () {
  const nestedLayer2 = figma.selectedInstance.findInstance(
    "Time field/time value group",
  )
  return {
    value:
      nestedLayer2.type !== "ERROR"
        ? nestedLayer2.getEnum("Granularity", {
            Hour: "hour",
            Minute: "minute",
            Second: "second",
          })
        : undefined,
  }
})()
const label = (function () {
  const nestedLayer3 = figma.selectedInstance.findInstance("Label")
  return {
    text:
      nestedLayer3.type !== "ERROR"
        ? nestedLayer3.getString("Label text")
        : undefined,
  }
})()
const description = figma.selectedInstance.getBoolean("Description", {
  true: figma.selectedInstance.findText("Description").textContent,
  false: undefined,
})
const isRequired = (function () {
  const nestedLayer4 = figma.selectedInstance.findInstance("Label")
  return {
    value:
      nestedLayer4.type !== "ERROR"
        ? nestedLayer4.getBoolean("Required")
        : undefined,
  }
})()
const isDisabled = figma.selectedInstance.getEnum("State", {
  Disabled: true,
})
const errorMessage = figma.selectedInstance.getEnum("State", {
  Error: figma.selectedInstance.findText("Error Message").textContent,
})

export default {
  id: "TimeField",
  imports: [
    "import { TimeField } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<TimeField${figma.helpers.react.renderProp(
    "size",
    size,
  )}${figma.helpers.react.renderProp(
    "label",
    label.text,
  )}${figma.helpers.react.renderProp(
    "description",
    description,
  )}${figma.helpers.react.renderProp(
    "granularity",
    granularity.value,
  )}${figma.helpers.react.renderProp(
    "hourCycle",
    hourCycle.value,
  )}${figma.helpers.react.renderProp(
    "hideTimeZone",
    hideTimeZone,
  )}${figma.helpers.react.renderProp(
    "isRequired",
    isRequired.value,
  )}${figma.helpers.react.renderProp(
    "isDisabled",
    isDisabled,
  )}${figma.helpers.react.renderProp("errorMessage", errorMessage)}/>`,
  metadata: { nestable: true },
}
