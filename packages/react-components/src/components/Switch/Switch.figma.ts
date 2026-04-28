// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=5146%3A248
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Switch/Switch.tsx
// component=Switch

import figma from "figma";

const labelInstance = figma.selectedInstance.findInstance("Label");
const labelTextHandle =
  labelInstance.type !== "ERROR" ? labelInstance.findText("Label") : undefined;
const children =
  labelTextHandle && labelTextHandle.type !== "ERROR"
    ? labelTextHandle.textContent
    : undefined;
const labelPosition = figma.selectedInstance.getEnum("Layout", {
  "Label before": "left",
  "Label after": "right",
});
const isSelected = figma.selectedInstance.getBoolean("Active");
const isDisabled = figma.selectedInstance.getEnum("State", { Disabled: true });

const { renderProp, renderChildren } = figma.helpers.react;

export default {
  id: "Switch",
  imports: ["import { Switch } from '@bcgov/design-system-react-components';"],
  example: figma.code`<Switch${renderProp("isSelected", isSelected)}${renderProp("isDisabled", isDisabled)}${renderProp("labelPosition", labelPosition)}>${renderChildren(children)}</Switch>`,
  metadata: { nestable: true },
};
