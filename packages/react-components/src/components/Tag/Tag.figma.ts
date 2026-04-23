// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=3426%3A4647
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Tag/Tag.tsx
// component=Tag

import figma from "figma"

const icon = figma.selectedInstance
  .getInstanceSwap("Icon placeholder")
  ?.executeTemplate().example
const color = figma.selectedInstance.getEnum("Color", {
  "Theme blue": "blue",
  "Theme gold": "bc-gold",
  Dark: "dark",
  Gray: "grey",
  Green: "green",
  Red: "red",
  Yellow: "yellow",
})
const tagStyle = figma.selectedInstance.getEnum("Style", {
  Rectangular: "rectangular",
  Circular: "circular",
})
const size = figma.selectedInstance.getEnum("Size", {
  Small: "small",
  Medium: "medium",
})
const children = figma.selectedInstance.getString("Tag text")
const isDisabled = figma.selectedInstance.getEnum("State", {
  Disabled: true,
})

export default {
  id: "Tag",
  imports: ["import { Tag } from '@bcgov/design-system-react-components';"],
  example: figma.code`<Tag${figma.helpers.react.renderProp(
    "icon",
    icon,
  )}${figma.helpers.react.renderProp(
    "color",
    color,
  )}${figma.helpers.react.renderProp(
    "tagStyle",
    tagStyle,
  )}${figma.helpers.react.renderProp(
    "size",
    size,
  )}${figma.helpers.react.renderProp("isDisabled", isDisabled)}>
        ${figma.helpers.react.renderChildren(children)}
      </Tag>`,
  metadata: { nestable: true },
}
