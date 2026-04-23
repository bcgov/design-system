// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=3982%3A10968
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Footer/Footer.tsx
// component=Footer

import figma from "figma"

const hideAcknowledgement = figma.selectedInstance.getBoolean(
  "Land acknowledgement",
  {
    false: true,
    true: false,
  },
)
const hideLogoAndLinks = figma.selectedInstance.getBoolean("Content", {
  false: true,
  true: false,
})
const hideCopyright = figma.selectedInstance.getBoolean("Copyright", {
  false: true,
  true: false,
})
const acknowledgement = figma.properties.slot(
  "Territorial acknowledgement content",
)
const children = figma.properties.slot("Slot")

export default {
  id: "Footer",
  imports: ["import { Footer } from '@bcgov/design-system-react-components';"],
  example: figma.code`<Footer${figma.helpers.react.renderProp(
    "hideLogoAndLinks",
    hideLogoAndLinks,
  )}${figma.helpers.react.renderProp(
    "hideCopyright",
    hideCopyright,
  )}${figma.helpers.react.renderProp(
    "hideAcknowledgement",
    hideAcknowledgement,
  )}${figma.helpers.react.renderProp("acknowledgement", acknowledgement)}>
        ${figma.helpers.react.renderChildren(children)}
      </Footer>`,
  metadata: { nestable: true },
}
