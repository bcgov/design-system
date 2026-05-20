// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=16649%3A4759
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/ProgressBar/ProgressBar.tsx
// component=ProgressBar

import figma from "figma";

const size = figma.selectedInstance.getEnum("Track Size", {
  Small: "small",
  Medium: "medium",
  Large: "large",
});
const valueLabel = figma.selectedInstance.getBoolean("Show label & value", {
  true: figma.selectedInstance.getString("Label"),
  false: undefined,
});
const value = figma.selectedInstance.getString("Value");
const numericValue =
  value !== undefined && value !== "" ? Number(value) : undefined;
const isIndeterminate = figma.selectedInstance.getEnum("Style", {
  Indeterminate: true,
});

const { renderProp } = figma.helpers.react;

export default {
  id: "ProgressBar",
  imports: [
    "import { ProgressBar } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<ProgressBar${renderProp("size", size)}${renderProp("valueLabel", valueLabel)}${renderProp("value", numericValue)}${renderProp("isIndeterminate", isIndeterminate)}/>`,
  metadata: { nestable: true },
};
