// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=14991%3A13794
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/ToggleButton/ToggleButton.tsx
// component=ToggleButton

import figma from "figma"

const size = figma.selectedInstance.getEnum("Size", {
  Small: "small",
  Medium: "medium",
})
const isIconButton = figma.selectedInstance.getBoolean("Icon button?")
const isSelected = figma.selectedInstance.getBoolean("Selected")
const isDisabled = figma.selectedInstance.getEnum("State", {
  Disabled: true,
})
const children = figma.selectedInstance.findText("Button Text").textContent
const iconRight = figma.selectedInstance.getBoolean("Icon right", {
  true: figma.selectedInstance
    .getInstanceSwap("Icon right placeholder")
    ?.executeTemplate().example,
  false: undefined,
})
const iconLeft = figma.selectedInstance.getBoolean("Icon left", {
  true: figma.selectedInstance
    .getInstanceSwap("Icon left placeholder")
    ?.executeTemplate().example,
  false: undefined,
})
const iconButtonPlaceholder = figma.selectedInstance
  .getInstanceSwap("Icon button placeholder")
  ?.executeTemplate().example

export default {
  id: "ToggleButton",
  imports: [
    "import { ToggleButton } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<ToggleButton${figma.helpers.react.renderProp(
    "size",
    size,
  )}${figma.helpers.react.renderProp(
    "isIconButton",
    isIconButton,
  )}${figma.helpers.react.renderProp(
    "isSelected",
    isSelected,
  )}${figma.helpers.react.renderProp("isDisabled", isDisabled)}>
        ${figma.helpers.react.renderChildren(iconLeft)}
        ${figma.helpers.react.renderChildren(children)}
        ${figma.helpers.react.renderChildren(iconRight)}
      </ToggleButton>`,
  metadata: { nestable: true },
}
