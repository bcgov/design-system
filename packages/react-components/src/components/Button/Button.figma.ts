// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=14242%3A1245
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Button/Button.tsx
// component=Button

import figma from "figma"

const size = figma.selectedInstance.getEnum("Size", {
  Xsmall: "xsmall",
  Small: "small",
  Medium: "medium",
  Large: "large",
})
const variant = figma.selectedInstance.getEnum("Hierarchy", {
  Primary: "primary",
  Secondary: "secondary",
  Tertiary: "tertiary",
  Link: "link",
})
const danger = figma.selectedInstance.getBoolean("Danger")
const isDisabled = figma.selectedInstance.getEnum("State", {
  Disabled: true,
})
const children = figma.selectedInstance.findText("Button Label").textContent

export default {
  id: "Button",
  imports: ["import { Button } from '@bcgov/design-system-react-components'"],
  example: figma.code`<Button${figma.helpers.react.renderProp(
    "size",
    size,
  )}${figma.helpers.react.renderProp(
    "variant",
    variant,
  )}${figma.helpers.react.renderProp(
    "danger",
    danger,
  )}${figma.helpers.react.renderProp("isDisabled", isDisabled)}>
        ${figma.helpers.react.renderChildren(children)}
      </Button>`,
  metadata: { nestable: true },
}
