// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=7782%3A3976
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Callout/Callout.tsx
// component=Callout

import figma from "figma"

const variant = figma.selectedInstance.getEnum("Color", {
  "Light gray": "lightGrey",
  "Light blue": "lightBlue",
  "Light gold": "lightGold",
  Black: "Black",
  Gray: "Grey",
  Blue: "Blue",
})
const isLeftBorderDisabled = figma.selectedInstance.getBoolean("Stroke", {
  false: true,
  true: false,
})
const title = figma.selectedInstance.findText("Heading text").textContent
const description = figma.selectedInstance.findText("Body text").textContent

export default {
  id: "Callout",
  imports: ["import { Callout } from '@bcgov/design-system-react-components';"],
  example: figma.code`<Callout${figma.helpers.react.renderProp(
    "variant",
    variant,
  )}${figma.helpers.react.renderProp(
    "title",
    title,
  )}${figma.helpers.react.renderProp(
    "description",
    description,
  )}${figma.helpers.react.renderProp(
    "isLeftBorderDisabled",
    isLeftBorderDisabled,
  )}/>`,
  metadata: { nestable: true },
}
