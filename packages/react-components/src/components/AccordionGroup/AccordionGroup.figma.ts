// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=7780%3A2135
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/AccordionGroup/AccordionGroup.tsx
// component=AccordionGroup

import figma from "figma"

const title = figma.selectedInstance.getString("Accordion group label")
const children = figma.properties.children(["*"])
const isDisabled = figma.selectedInstance.getEnum("State", {
  Disabled: true,
})

export default {
  id: "AccordionGroup",
  imports: [
    "import { AccordionGroup } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<AccordionGroup${figma.helpers.react.renderProp(
    "title",
    title,
  )}${figma.helpers.react.renderProp("isDisabled", isDisabled)}>
        ${figma.helpers.react.renderChildren(children)}
      </AccordionGroup>`,
  metadata: { nestable: true },
}
