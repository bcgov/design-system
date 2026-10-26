// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=5347%3A1946
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/InlineAlert/InlineAlert.tsx
// component=InlineAlert

import figma from "figma";

type InstanceHandle = Extract<
  ReturnType<typeof figma.selectedInstance.findInstance>,
  { type: "INSTANCE" }
>;

const { renderProp } = figma.helpers.react;

// The action buttons are "Button base" instances with no Code Connect mapping,
// so build each <Button> from its own properties
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
  Warning: "warning",
  Success: "success",
  Error: "danger",
});
const titleHandle = figma.selectedInstance.findText("Alert Title");
const title =
  titleHandle.type !== "ERROR" ? titleHandle.textContent : undefined;
const description = figma.selectedInstance.getString("Description text");
const isCloseable = figma.selectedInstance.getBoolean("Close");
const isIconHidden = figma.selectedInstance.getBoolean("Icon", {
  true: false,
  false: true,
});

const showActions = figma.selectedInstance.getBoolean("Actions");
const primaryInstance = figma.selectedInstance.findInstance(
  "Primary Action Button"
);
const secondaryInstance = figma.selectedInstance.findInstance(
  "Secondary Action Button"
);
const primaryBtn =
  showActions && primaryInstance.type === "INSTANCE"
    ? buttonFromInstance(primaryInstance)
    : undefined;
const secondaryBtn =
  showActions && secondaryInstance.type === "INSTANCE"
    ? buttonFromInstance(secondaryInstance)
    : undefined;
const buttons =
  primaryBtn && secondaryBtn
    ? figma.code`[${primaryBtn}, ${secondaryBtn}]`.sections
    : primaryBtn
      ? figma.code`[${primaryBtn}]`.sections
      : secondaryBtn
        ? figma.code`[${secondaryBtn}]`.sections
        : undefined;

export default {
  id: "InlineAlert",
  imports: [
    "import { InlineAlert, Button } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<InlineAlert${renderProp("variant", variant)}${renderProp("title", title)}${renderProp("description", description)}${renderProp("isCloseable", isCloseable)}${renderProp("isIconHidden", isIconHidden)}${renderProp("buttons", buttons)}/>`,
  metadata: { nestable: true },
};
