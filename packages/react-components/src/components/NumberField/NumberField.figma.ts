// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=14421%3A4311
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/NumberField/NumberField.tsx
// component=NumberField

import figma from "figma";

const size = figma.selectedInstance.getEnum("Size", {
  Small: "small",
  Medium: "medium",
});

const labelInstance = figma.selectedInstance.findInstance("Label");
const label =
  labelInstance.type !== "ERROR"
    ? labelInstance.getString("Label text")
    : undefined;
const isRequired =
  labelInstance.type !== "ERROR" &&
  labelInstance.getPropertyValue("Required") === true
    ? true
    : undefined;
const descriptionHandle = figma.selectedInstance.findText("Description");
const description =
  descriptionHandle.type !== "ERROR" ? descriptionHandle.textContent : undefined;

const isDisabled = figma.selectedInstance.getEnum("State", { Disabled: true });
const isReadOnly = figma.selectedInstance.getEnum("State", {
  "Read only": true,
});

const { renderProp } = figma.helpers.react;

export default {
  id: "NumberField",
  imports: [
    "import { NumberField } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<NumberField${renderProp("size", size)}${renderProp("label", label)}${renderProp("description", description)}${renderProp("isRequired", isRequired)}${renderProp("isDisabled", isDisabled)}${renderProp("isReadOnly", isReadOnly)}/>`,
  metadata: { nestable: true },
};
