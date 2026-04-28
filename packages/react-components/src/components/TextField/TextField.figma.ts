// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=3649%3A14334
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/TextField/TextField.tsx
// component=TextField

import figma from "figma";

const size = figma.selectedInstance.getEnum("Size", {
  Medium: "medium",
  Small: "small",
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

const description = figma.selectedInstance.getString("Description text");

const errorMessageHandle = figma.selectedInstance.findText("Error Message");
const errorText =
  errorMessageHandle.type !== "ERROR"
    ? errorMessageHandle.textContent
    : undefined;
const errorMessage = figma.selectedInstance.getEnum("State", {
  Error: errorText,
});

const iconLeft = figma.selectedInstance.getBoolean("Show left Icon", {
  true: figma.selectedInstance
    .getInstanceSwap("Left icon placeholder")
    ?.executeTemplate().example,
  false: undefined,
});
const iconRight = figma.selectedInstance.getBoolean("Show right icon", {
  true: figma.selectedInstance
    .getInstanceSwap("Right icon placeholder")
    ?.executeTemplate().example,
  false: undefined,
});

const isDisabled = figma.selectedInstance.getEnum("State", { Disabled: true });

const { renderProp } = figma.helpers.react;

export default {
  id: "TextField",
  imports: [
    "import { TextField } from '@bcgov/design-system-react-components'",
  ],
  example: figma.code`<TextField${renderProp("size", size)}${renderProp("label", label)}${renderProp("description", description)}${renderProp("iconLeft", iconLeft)}${renderProp("iconRight", iconRight)}${renderProp("isRequired", isRequired)}${renderProp("isDisabled", isDisabled)}${renderProp("errorMessage", errorMessage)}/>`,
  metadata: { nestable: true },
};
