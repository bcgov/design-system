// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=3982%3A10968
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Footer/Footer.tsx
// component=Footer

import figma from "figma";

const hideAcknowledgement = figma.selectedInstance.getBoolean(
  "Land acknowledgement",
  { false: true, true: false }
);
const hideLogoAndLinks = figma.selectedInstance.getBoolean("Content", {
  false: true,
  true: false,
});
const hideCopyright = figma.selectedInstance.getBoolean("Copyright", {
  false: true,
  true: false,
});
const acknowledgement = figma.selectedInstance.getSlot(
  "Territorial acknowledgement content"
);
const children = figma.selectedInstance.getSlot("Slot");

const { renderProp, renderChildren } = figma.helpers.react;

export default {
  id: "Footer",
  imports: ["import { Footer } from '@bcgov/design-system-react-components';"],
  example: figma.code`<Footer${renderProp("hideLogoAndLinks", hideLogoAndLinks)}${renderProp("hideCopyright", hideCopyright)}${renderProp("hideAcknowledgement", hideAcknowledgement)}${renderProp("acknowledgement", acknowledgement)}>${renderChildren(children)}</Footer>`,
  metadata: { nestable: true },
};
