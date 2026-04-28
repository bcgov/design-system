// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=7782%3A3193
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/AlertBanner/AlertBanner.tsx
// component=AlertBanner

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Type", {
  Info: "info",
  Success: "success",
  Warning: "warning",
  Danger: "danger",
  Black: "black",
});
const isIconHidden = figma.selectedInstance.getBoolean("Icon", {
  false: true,
  true: false,
});
const isCloseable = figma.selectedInstance.getBoolean("Close");
const alertText = figma.selectedInstance.findText("Alert text");
const children = "textContent" in alertText ? alertText.textContent : undefined;
const actionInstance = figma.selectedInstance.findInstance("Button");
const action = figma.selectedInstance.getBoolean("Action")
  ? actionInstance.executeTemplate().example
  : undefined;

const { renderProp, renderChildren } = figma.helpers.react;

export default {
  id: "AlertBanner",
  imports: [
    "import { AlertBanner } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<AlertBanner${renderProp("variant", variant)}${renderProp("isIconHidden", isIconHidden)}${renderProp("isCloseable", isCloseable)}>
      ${renderChildren(children)}
      ${renderProp("action", action)}
    </AlertBanner>`,
  metadata: { nestable: true },
};
