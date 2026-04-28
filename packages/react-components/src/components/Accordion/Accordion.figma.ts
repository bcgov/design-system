// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=7780%3A1928
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Accordion/Accordion.tsx
// component=Accordion

import figma from "figma";

const label = figma.selectedInstance.getString("Text");
const isDisabled = figma.selectedInstance.getEnum("State", { Disabled: true });
const isExpanded = figma.selectedInstance.getBoolean("Opened");
const children = figma.selectedInstance.getSlot("Accordion content");

const { renderProp, renderChildren } = figma.helpers.react;

export default {
  id: "Accordion",
  imports: [
    "import { Accordion } from '@bcgov/design-system-react-components'",
  ],
  example: figma.code`<Accordion${renderProp("label", label)}${renderProp("isDisabled", isDisabled)}${renderProp("isExpanded", isExpanded)}>
      ${renderChildren(children)}
    </Accordion>`,
  metadata: { nestable: true },
};
