// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=3572%3A4229
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Select/Select.tsx
// component=Select

import figma from "figma";

const size = figma.selectedInstance.getEnum("Size", {
  Small: "small",
  Medium: "medium",
});

const titleInstance = figma.selectedInstance.findInstance("Title");
const label =
  titleInstance.type !== "ERROR"
    ? titleInstance.getString("Label text")
    : undefined;
const isRequired =
  titleInstance.type !== "ERROR" &&
  titleInstance.getPropertyValue("Required") === true
    ? true
    : undefined;

const descriptionHandle = figma.selectedInstance.findText("Description Text");
const description =
  descriptionHandle.type !== "ERROR"
    ? descriptionHandle.textContent
    : undefined;

const isOpen = figma.selectedInstance.getBoolean("Menu opened");
const isDisabled = figma.selectedInstance.getEnum("State", { Disabled: true });
const isInvalid = figma.selectedInstance.getEnum("State", { Error: true });

const errorMessageHandle = figma.selectedInstance.findText("Error Message");
const errorMessage =
  errorMessageHandle.type !== "ERROR"
    ? errorMessageHandle.textContent
    : undefined;

const { renderProp } = figma.helpers.react;

export default {
  id: "Select",
  imports: ["import { Select } from '@bcgov/design-system-react-components';"],
  example: figma.code`<Select${renderProp("size", size)}${renderProp("label", label)}${renderProp("description", description)}${renderProp("isOpen", isOpen)}${renderProp("isRequired", isRequired)}${renderProp("isDisabled", isDisabled)}${renderProp("isInvalid", isInvalid)}${renderProp("errorMessage", errorMessage)}/>`,
  metadata: { nestable: true },
};
