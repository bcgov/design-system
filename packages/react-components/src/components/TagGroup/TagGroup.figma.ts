// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=3970%3A2221
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/TagGroup/TagGroup.tsx
// component=TagGroup

import figma from "figma"

const label = (function () {
  const nestedLayer9 = figma.selectedInstance.findInstance("Label")
  return {
    text:
      nestedLayer9.type !== "ERROR"
        ? nestedLayer9.findText("Label").textContent
        : undefined,
  }
})()
const description = figma.selectedInstance.findText("Description").textContent
const errorMessage = figma.selectedInstance.findText("Error text").textContent
const children = figma.properties.children(["*"])

export default {
  id: "TagGroup",
  imports: [
    "import { TagGroup, TagList, Tag } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<TagGroup${figma.helpers.react.renderProp(
    "label",
    label.text,
  )}${figma.helpers.react.renderProp(
    "description",
    description,
  )}${figma.helpers.react.renderProp("errorMessage", errorMessage)}>
        ${figma.helpers.react.renderChildren(children)}
      </TagGroup>`,
  metadata: { nestable: true },
}
