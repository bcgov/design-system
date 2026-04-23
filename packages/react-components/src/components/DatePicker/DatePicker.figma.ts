// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=15865%3A4285
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/DatePicker/DatePicker.tsx
// component=DatePicker

import figma from "figma"

const size = figma.selectedInstance.getEnum("Size", {
  Small: "small",
  Medium: "medium",
})
const hideTimeZone = figma.selectedInstance.getBoolean("Timezone", {
  false: true,
  true: false,
})
const isDisabled = figma.selectedInstance.getEnum("State", {
  Disabled: true,
})
const isReadOnly = figma.selectedInstance.getEnum("State", {
  "Read only": true,
})
const isCalendarDisabled = figma.selectedInstance.getBoolean("Show calendar", {
  false: true,
  true: false,
})
const showLabel = figma.selectedInstance.getBoolean("Show label")
const label = (function () {
  const nestedLayer18 = figma.selectedInstance.findInstance("Title")
  return {
    text:
      nestedLayer18.type !== "ERROR"
        ? nestedLayer18.getString("Label text")
        : undefined,
  }
})()
const description = (function () {
  const nestedLayer19 = figma.selectedInstance.findInstance("Description")
  return {
    text:
      nestedLayer19.type !== "ERROR"
        ? nestedLayer19.findText("Description").textContent
        : undefined,
  }
})()
const showFormatHelpText = (function () {
  const nestedLayer20 = figma.selectedInstance.findInstance("Description")
  return {
    value:
      nestedLayer20.type !== "ERROR"
        ? nestedLayer20.getEnum("Mode", {
            "Format only": true,
            "Format & description": true,
          })
        : undefined,
  }
})()
const isRequired = (function () {
  const nestedLayer21 = figma.selectedInstance.findInstance("Title")
  return {
    value:
      nestedLayer21.type !== "ERROR"
        ? nestedLayer21.getBoolean("Required")
        : undefined,
  }
})()
const granularity = figma.selectedInstance.getEnum("Time", {
  true: "minute",
  false: "day",
})

export default {
  id: "DatePicker",
  imports: [
    "import { DatePicker } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<DatePicker${figma.helpers.react.renderProp(
    "size",
    size,
  )}${figma.helpers.react.renderProp(
    "granularity",
    granularity,
  )}${figma.helpers.react.renderProp(
    "hideTimeZone",
    hideTimeZone,
  )}${figma.helpers.react.renderProp(
    "isRequired",
    isRequired.value,
  )}${figma.helpers.react.renderProp(
    "isDisabled",
    isDisabled,
  )}${figma.helpers.react.renderProp(
    "isReadOnly",
    isReadOnly,
  )}${figma.helpers.react.renderProp(
    "label",
    label.text,
  )}${figma.helpers.react.renderProp(
    "description",
    description.text,
  )}${figma.helpers.react.renderProp(
    "showFormatHelpText",
    showFormatHelpText.value,
  )}/>`,
  metadata: { nestable: true },
}
