// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=5347%3A1946
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/InlineAlert/InlineAlert.tsx
// component=InlineAlert

import figma from "figma";

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
const showPrimary = figma.selectedInstance.getBoolean("Primary");
const showSecondary = figma.selectedInstance.getBoolean("Secondary");
const primaryBtn =
  figma.code`<Button variant="primary" size="small">Primary action</Button>`
    .sections;
const secondaryBtn =
  figma.code`<Button variant="secondary" size="small">Secondary action</Button>`
    .sections;
const buttons = showActions
  ? showPrimary && showSecondary
    ? figma.code`[${primaryBtn}, ${secondaryBtn}]`.sections
    : showPrimary
      ? figma.code`[${primaryBtn}]`.sections
      : showSecondary
        ? figma.code`[${secondaryBtn}]`.sections
        : undefined
  : undefined;

const { renderProp } = figma.helpers.react;

export default {
  id: "InlineAlert",
  imports: [
    "import { InlineAlert } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<InlineAlert${renderProp("variant", variant)}${renderProp("title", title)}${renderProp("description", description)}${renderProp("isCloseable", isCloseable)}${renderProp("isIconHidden", isIconHidden)}${renderProp("buttons", buttons)}/>`,
  metadata: { nestable: true },
};
