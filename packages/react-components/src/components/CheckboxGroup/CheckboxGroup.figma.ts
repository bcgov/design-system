// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=6009%3A993
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/CheckboxGroup/CheckboxGroup.tsx
// component=CheckboxGroup

import figma from "figma";

const orientation = figma.selectedInstance.getEnum("Orientation", {
  Horizontal: "horizontal",
  Vertical: "vertical",
});
const labelHandle = figma.selectedInstance.findText("Label");
const label =
  labelHandle.type !== "ERROR" ? labelHandle.textContent : undefined;
const descriptionHandle = figma.selectedInstance.findText("Description");
const description =
  descriptionHandle.type !== "ERROR"
    ? descriptionHandle.textContent
    : undefined;
const children = figma.properties.children(["Checkbox*"]);
const isInvalid = figma.selectedInstance.getBoolean("Error text");
const errorHandle = figma.selectedInstance.findText("Error text");
const errorMessage =
  errorHandle.type !== "ERROR" ? errorHandle.textContent : undefined;

const { renderProp, renderChildren } = figma.helpers.react;

export default {
  id: "CheckboxGroup",
  imports: [
    "import { CheckboxGroup, Checkbox } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<CheckboxGroup${renderProp("label", label)}${renderProp("description", description)}${renderProp("orientation", orientation)}${renderProp("isInvalid", isInvalid)}${renderProp("errorMessage", errorMessage)}>
      ${renderChildren(children)}
    </CheckboxGroup>`,
  metadata: { nestable: true },
};
