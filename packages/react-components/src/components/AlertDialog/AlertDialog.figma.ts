// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=6433%3A1885
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/AlertDialog/AlertDialog.tsx
// component=AlertDialog

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Type", {
  Information: "info",
  Confirmation: "confirmation",
  Warning: "warning",
  Error: "error",
  Destructive: "destructive",
});
const title = figma.selectedInstance.getString("Title");
const children = figma.selectedInstance.getString("Text");
const buttons = figma.selectedInstance.getSlot("Slot");

const { renderProp, renderChildren } = figma.helpers.react;

export default {
  id: "AlertDialog",
  imports: [
    "import { AlertDialog } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<AlertDialog${renderProp("variant", variant)}${renderProp("title", title)}${renderProp("buttons", buttons)}>
      ${renderChildren(children)}
    </AlertDialog>`,
  metadata: { nestable: true },
};
