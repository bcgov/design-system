// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=7782%3A3193
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/AlertBanner/AlertBanner.tsx
// component=AlertBanner

import figma from "figma";

type InstanceHandle = Extract<
  ReturnType<typeof figma.selectedInstance.findInstance>,
  { type: "INSTANCE" }
>;

const { renderProp, renderChildren } = figma.helpers.react;

// The nested button is a "Button base" instance with no Code Connect mapping,
// so build the <Button> from its own properties
function buttonFromInstance(instance: InstanceHandle) {
  const variant = instance.getEnum("Hierarchy", {
    Primary: "primary",
    Secondary: "secondary",
    Tertiary: "tertiary",
    Link: "link",
  });
  const size = instance.getEnum("Size", {
    Xsmall: "xsmall",
    Small: "small",
    Medium: "medium",
    Large: "large",
  });
  const danger = instance.getBoolean("Danger");
  const labelHandle = instance.findText("Action");
  const label =
    labelHandle.type !== "ERROR" ? labelHandle.textContent : undefined;
  return figma.code`<Button${renderProp("variant", variant)}${renderProp("size", size)}${renderProp("danger", danger)}>${label}</Button>`
    .sections;
}

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
const message = "textContent" in alertText ? alertText.textContent : undefined;
const actionInstance = figma.selectedInstance.findInstance("Button");
// AlertBanner has no action prop: the button is passed as a child
const action =
  figma.selectedInstance.getBoolean("Action") &&
  actionInstance.type === "INSTANCE"
    ? buttonFromInstance(actionInstance)
    : undefined;

export default {
  id: "AlertBanner",
  imports: [
    "import { AlertBanner, Button } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<AlertBanner${renderProp("variant", variant)}${renderProp("isIconHidden", isIconHidden)}${renderProp("isCloseable", isCloseable)}>
      ${renderChildren(message)}
      ${action ?? ""}
    </AlertBanner>`,
  metadata: { nestable: true },
};
