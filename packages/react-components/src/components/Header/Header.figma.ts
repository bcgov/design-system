// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=4017%3A17444
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Header/Header.tsx
// component=Header

import figma from "figma"

const logoImage = figma.selectedInstance
  .getInstanceSwap("Logo")
  ?.executeTemplate().example
const children = figma.properties.children(["Header content"])

export default {
  id: "Header",
  imports: ["import { Header } from '@bcgov/design-system-react-components';"],
  example: figma.code`<Header${figma.helpers.react.renderProp(
    "logoImage",
    logoImage,
  )}>${figma.helpers.react.renderChildren(children)}</Header>`,
  metadata: { nestable: true },
}
