// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=6009%3A2784
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/RadioGroup/RadioGroup.tsx
// component=RadioGroup

import figma from "figma";

const orientation = figma.selectedInstance.getEnum("Orientation", {
  Vertical: "vertical",
  Horizontal: "horizontal",
});
const labelInstance = figma.selectedInstance.findInstance("Label");
const labelTextHandle =
  labelInstance.type !== "ERROR" ? labelInstance.findText("Label") : undefined;
const label =
  labelTextHandle && labelTextHandle.type !== "ERROR"
    ? labelTextHandle.textContent
    : undefined;
const descriptionHandle = figma.selectedInstance.findText("Description");
const description =
  descriptionHandle.type !== "ERROR"
    ? descriptionHandle.textContent
    : undefined;
const errorMessageHandle = figma.selectedInstance.findText("Error text");
const errorMessage =
  errorMessageHandle.type !== "ERROR"
    ? errorMessageHandle.textContent
    : undefined;
const children = figma.properties.children(["*"]);

const { renderProp, renderChildren } = figma.helpers.react;

export default {
  id: "RadioGroup",
  imports: [
    "import { RadioGroup, Radio } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<RadioGroup${renderProp("orientation", orientation)}${renderProp("label", label)}${renderProp("description", description)}${renderProp("errorMessage", errorMessage)}>${renderChildren(children)}</RadioGroup>`,
  metadata: { nestable: true },
};
