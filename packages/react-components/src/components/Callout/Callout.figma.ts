// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=7782%3A3976
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Callout/Callout.tsx
// component=Callout

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Color", {
  "Light gray": "lightGrey",
  "Light blue": "lightBlue",
  "Light gold": "lightGold",
  Black: "Black",
  Gray: "Grey",
  Blue: "Blue",
});
const isLeftBorderDisabled = figma.selectedInstance.getBoolean("Stroke", {
  false: true,
  true: false,
});
const headingText = figma.selectedInstance.findText("Heading text");
const title =
  "textContent" in headingText ? headingText.textContent : undefined;
const bodyText = figma.selectedInstance.findText("Body text");
const description =
  "textContent" in bodyText ? bodyText.textContent : undefined;

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
  id: "Callout",
  imports: [
    "import { Callout, Button } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<Callout${renderProp("variant", variant)}${renderProp("title", title)}${renderProp("description", description)}${renderProp("isLeftBorderDisabled", isLeftBorderDisabled)}${renderProp("buttons", buttons)}/>`,
  metadata: { nestable: true },
};
