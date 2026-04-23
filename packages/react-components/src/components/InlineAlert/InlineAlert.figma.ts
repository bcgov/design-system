// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=5347%3A1946
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/InlineAlert/InlineAlert.tsx
// component=InlineAlert

import figma from "figma"

const variant = figma.selectedInstance.getEnum("Type", {
  Info: "info",
  Warning: "warning",
  Success: "success",
  Error: "danger",
})
const title = figma.selectedInstance.findText("Alert Title").textContent
const description = figma.selectedInstance.getString("Description text")
const isCloseable = figma.selectedInstance.getBoolean("Close")
const isIconHidden = figma.selectedInstance.getBoolean("Icon", {
  true: false,
  false: true,
})

export default {
  id: "InlineAlert",
  imports: [
    "import { InlineAlert } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<InlineAlert${figma.helpers.react.renderProp(
    "variant",
    variant,
  )}${figma.helpers.react.renderProp(
    "title",
    title,
  )}${figma.helpers.react.renderProp(
    "description",
    description,
  )}${figma.helpers.react.renderProp(
    "isCloseable",
    isCloseable,
  )}${figma.helpers.react.renderProp("isIconHidden", isIconHidden)}/>`,
  metadata: { nestable: true },
}
