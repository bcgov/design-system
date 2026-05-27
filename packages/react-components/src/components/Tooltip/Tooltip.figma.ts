// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=3572%3A1939
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Tooltip/Tooltip.tsx
// component=Tooltip

import figma from "figma";

const placement = figma.selectedInstance.getEnum("Direction", {
  "← Left": "left",
  "→ Right": "right",
  "↑ Up": "top",
  "↓ Down": "bottom",
});
const childrenHandle = figma.selectedInstance.findText("Text");
const children =
  childrenHandle.type !== "ERROR" ? childrenHandle.textContent : undefined;

const { renderProp, renderChildren } = figma.helpers.react;

export default {
  id: "Tooltip",
  imports: ['import Tooltip from "./Tooltip";'],
  example: figma.code`<Tooltip${renderProp("placement", placement)}>${renderChildren(children)}</Tooltip>`,
  metadata: { nestable: true },
};
