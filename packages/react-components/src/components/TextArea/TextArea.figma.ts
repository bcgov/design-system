// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=4157%3A2531
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/TextArea/TextArea.tsx
// component=TextArea

import figma from "figma";

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
  descriptionHandle.type !== "ERROR"
    ? descriptionHandle.textContent
    : undefined;

const errorTextHandle = figma.selectedInstance.findText("Error text");
const errorText =
  errorTextHandle.type !== "ERROR" ? errorTextHandle.textContent : undefined;
const errorMessage = figma.selectedInstance.getEnum("State", {
  Error: errorText,
});

const isDisabled = figma.selectedInstance.getEnum("State", { Disabled: true });

const { renderProp } = figma.helpers.react;

export default {
  id: "TextArea",
  imports: [
    "import { TextArea } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<TextArea${renderProp("label", label)}${renderProp("description", description)}${renderProp("isRequired", isRequired)}${renderProp("isDisabled", isDisabled)}${renderProp("errorMessage", errorMessage)}/>`,
  metadata: { nestable: true },
};
