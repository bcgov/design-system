// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=6009%3A2633
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Radio/Radio.tsx
// component=Radio

import figma from "figma";

const children = figma.properties.children(["*"]);
const labelInstance = figma.selectedInstance.findInstance("Label");
const labelTextHandle =
  labelInstance.type !== "ERROR" ? labelInstance.findText("Label") : undefined;
const label =
  labelTextHandle && labelTextHandle.type !== "ERROR"
    ? labelTextHandle.textContent
    : undefined;
const isDisabled = figma.selectedInstance.getEnum("State", { Disabled: true });
const isSelected = figma.selectedInstance.getBoolean("Active");

const { renderProp, renderChildren } = figma.helpers.react;

export default {
  id: "Radio",
  imports: ["import { Radio } from '@bcgov/design-system-react-components';"],
  example: figma.code`<Radio${renderProp("value", label)}${renderProp("isSelected", isSelected)}${renderProp("isDisabled", isDisabled)}>${renderChildren(children)}</Radio>`,
  metadata: { nestable: true },
};
