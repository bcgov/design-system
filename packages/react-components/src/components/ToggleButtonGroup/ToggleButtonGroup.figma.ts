// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=14991%3A13581
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/ToggleButtonGroup/ToggleButtonGroup.tsx
// component=ToggleButtonGroup

import figma from "figma";

const size = figma.selectedInstance.getEnum("Size", {
  Small: "small",
  Medium: "medium",
});
const orientation = figma.selectedInstance.getEnum("Orientation", {
  Horizontal: "horizontal",
  Vertical: "vertical",
});
const labelInstance = figma.selectedInstance.findInstance("Label");
const label =
  labelInstance.type !== "ERROR"
    ? labelInstance.getString("Label text")
    : undefined;
const children = figma.properties.children(["Toggle button*"]);

const { renderProp, renderChildren } = figma.helpers.react;

export default {
  id: "ToggleButtonGroup",
  imports: [
    "import { ToggleButtonGroup, ToggleButton } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<ToggleButtonGroup${renderProp("size", size)}${renderProp("orientation", orientation)}${renderProp("label", label)}>${renderChildren(children)}</ToggleButtonGroup>`,
  metadata: { nestable: true },
};
