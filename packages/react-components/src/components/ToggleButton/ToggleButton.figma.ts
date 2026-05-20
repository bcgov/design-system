// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=14991%3A13794
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/ToggleButton/ToggleButton.tsx
// component=ToggleButton

import figma from "figma";

const size = figma.selectedInstance.getEnum("Size", {
  Small: "small",
  Medium: "medium",
});
const isIconButton = figma.selectedInstance.getBoolean("Icon button?");
const isSelected = figma.selectedInstance.getBoolean("Selected");
const isDisabled = figma.selectedInstance.getEnum("State", { Disabled: true });
const buttonTextHandle = figma.selectedInstance.findText("Button Text");
const children =
  buttonTextHandle.type !== "ERROR" ? buttonTextHandle.textContent : undefined;
const iconLeft = figma.selectedInstance.getBoolean("Icon left", {
  true: figma.selectedInstance
    .getInstanceSwap("Icon left placeholder")
    ?.executeTemplate().example,
  false: undefined,
});
const iconRight = figma.selectedInstance.getBoolean("Icon right", {
  true: figma.selectedInstance
    .getInstanceSwap("Icon right placeholder")
    ?.executeTemplate().example,
  false: undefined,
});

const { renderProp, renderChildren } = figma.helpers.react;

export default {
  id: "ToggleButton",
  imports: [
    "import { ToggleButton } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<ToggleButton${renderProp("size", size)}${renderProp("isIconButton", isIconButton)}${renderProp("isSelected", isSelected)}${renderProp("isDisabled", isDisabled)}>${iconLeft ?? ""}${renderChildren(children)}${iconRight ?? ""}</ToggleButton>`,
  metadata: { nestable: true },
};
