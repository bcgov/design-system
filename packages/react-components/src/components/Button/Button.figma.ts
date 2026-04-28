// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=14242%3A1245
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Button/Button.tsx
// component=Button

import figma from "figma";

const size = figma.selectedInstance.getEnum("Size", {
  Xsmall: "xsmall",
  Small: "small",
  Medium: "medium",
  Large: "large",
});
const variant = figma.selectedInstance.getEnum("Hierarchy", {
  Primary: "primary",
  Secondary: "secondary",
  Tertiary: "tertiary",
  Link: "link",
});
const danger = figma.selectedInstance.getBoolean("Danger");
const isDisabled = figma.selectedInstance.getEnum("State", {
  Disabled: true,
});
const buttonLabel = figma.selectedInstance.findText("Button Label");
const children =
  "textContent" in buttonLabel ? buttonLabel.textContent : undefined;

const showLeftIcon = figma.selectedInstance.getBoolean("Show left icon");
const leftIcon = showLeftIcon
  ? figma.selectedInstance.getInstanceSwap("Left side icon")?.executeTemplate()
      .example
  : undefined;

const showRightIcon = figma.selectedInstance.getBoolean("Show right icon");
const rightIcon = showRightIcon
  ? figma.selectedInstance.getInstanceSwap("Right side icon")?.executeTemplate()
      .example
  : undefined;

const { renderProp, renderChildren } = figma.helpers.react;

export default {
  id: "Button",
  imports: ["import { Button } from '@bcgov/design-system-react-components'"],
  example: figma.code`<Button${renderProp("size", size)}${renderProp("variant", variant)}${renderProp("danger", danger)}${renderProp("isDisabled", isDisabled)}>
      ${leftIcon ?? ""}${renderChildren(children)}${rightIcon ?? ""}
    </Button>`,
  metadata: { nestable: true },
};
