// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=7782%3A3193
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/AlertBanner/AlertBanner.tsx
// component=AlertBanner

import figma from "figma"

const variant = figma.selectedInstance.getEnum("Type", {
  Info: "info",
  Success: "success",
  Warning: "warning",
  Danger: "danger",
  Black: "black",
})
const isIconHidden = figma.selectedInstance.getBoolean("Icon", {
  false: true,
  true: false,
})
const isCloseable = figma.selectedInstance.getBoolean("Close")
const children = figma.selectedInstance.findText("Alert text").textContent

export default {
  id: "AlertBanner",
  imports: [
    "import { AlertBanner } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<AlertBanner${figma.helpers.react.renderProp(
    "variant",
    variant,
  )}${figma.helpers.react.renderProp(
    "isIconHidden",
    isIconHidden,
  )}${figma.helpers.react.renderProp("isCloseable", isCloseable)}>
        ${figma.helpers.react.renderChildren(children)}
      </AlertBanner>`,
  metadata: { nestable: true },
}
