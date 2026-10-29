// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=7782%3A3976
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Callout/Callout.tsx
// component=Callout

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
// The "Primary" and "Secondary" toggles control these two layers
const primaryInstance = figma.selectedInstance.findInstance(
  "Hierarchy=Secondary, State=Default, Size=Small, Danger=False"
);
const secondaryInstance = figma.selectedInstance.findInstance(
  "Hierarchy=Tertiary, State=Default, Size=Small, Danger=False"
);
const primaryBtn =
  showActions && showPrimary && primaryInstance.type === "INSTANCE"
    ? buttonFromInstance(primaryInstance)
    : undefined;
const secondaryBtn =
  showActions && showSecondary && secondaryInstance.type === "INSTANCE"
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
  id: "Callout",
  imports: [
    "import { Callout, Button } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<Callout${renderProp("variant", variant)}${renderProp("title", title)}${renderProp("description", description)}${renderProp("isLeftBorderDisabled", isLeftBorderDisabled)}${renderProp("buttons", buttons)}/>`,
  metadata: { nestable: true },
};
