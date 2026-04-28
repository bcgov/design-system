// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=6009%3A878
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Checkbox/Checkbox.tsx
// component=Checkbox

import figma from "figma";

const isSelected = figma.selectedInstance.getEnum("State", {
  Inactive: false,
  Active: true,
});
const isIndeterminate = figma.selectedInstance.getEnum("Selection", {
  Indeterminate: true,
});
const isDisabled = figma.selectedInstance.getEnum("State", {
  Disabled: true,
});
const showLabel = figma.selectedInstance.getBoolean("Label");
const labelInstance = figma.selectedInstance.findInstance("Label");
const labelText =
  showLabel && labelInstance.type !== "ERROR"
    ? labelInstance.getString("Label text")
    : undefined;
const isRequired =
  showLabel &&
  labelInstance.type !== "ERROR" &&
  labelInstance.getPropertyValue("Required") === true
    ? true
    : undefined;

const { renderProp, renderChildren } = figma.helpers.react;

export default {
  id: "Checkbox",
  imports: [
    "import { Checkbox } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<Checkbox${renderProp("isIndeterminate", isIndeterminate)}${renderProp("isSelected", isSelected)}${renderProp("isDisabled", isDisabled)}${renderProp("isRequired", isRequired)}>
      ${renderChildren(labelText)}
    </Checkbox>`,
  metadata: { nestable: true },
};
