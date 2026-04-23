// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=6009%3A878
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Checkbox/Checkbox.tsx
// component=Checkbox

import figma from "figma"

const isSelected = figma.selectedInstance.getEnum("State", {
  Inactive: false,
  Active: true,
})
const isIndeterminate = figma.selectedInstance.getEnum("Selection", {
  Indeterminate: true,
})
const isDisabled = figma.selectedInstance.getEnum("State", {
  Disabled: true,
})
const label = (function () {
  const nestedLayer22 = figma.selectedInstance.findInstance("Label")
  return {
    text:
      nestedLayer22.type !== "ERROR"
        ? nestedLayer22.getString("Label text")
        : undefined,
    required:
      nestedLayer22.type !== "ERROR"
        ? nestedLayer22.getBoolean("Required")
        : undefined,
  }
})()

export default {
  id: "Checkbox",
  imports: [
    "import { Checkbox } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<Checkbox${figma.helpers.react.renderProp(
    "isIndeterminate",
    isIndeterminate,
  )}${figma.helpers.react.renderProp(
    "isSelected",
    isSelected,
  )}${figma.helpers.react.renderProp(
    "isDisabled",
    isDisabled,
  )}${figma.helpers.react.renderProp(
    "isRequired",
    label.required,
  )} // TODO: this is not working as expected
>
        ${figma.helpers.react.renderChildren(label.text)}
      </Checkbox>`,
  metadata: { nestable: true },
}
