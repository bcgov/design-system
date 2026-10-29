// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=3982%3A10968
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Footer/Footer.tsx
// component=Footer

import figma from "figma";

const hideAcknowledgement = figma.selectedInstance.getBoolean(
  "Land acknowledgement",
  { false: true, true: false }
);
const hideLogoAndLinks = figma.selectedInstance.getBoolean("Content", {
  false: true,
  true: false,
});
const hideCopyright = figma.selectedInstance.getBoolean("Copyright", {
  false: true,
  true: false,
});
const { renderProp, jsxElement } = figma.helpers.react;

// Footer renders this text by default, so only pass it when it has been changed
const DEFAULT_ACKNOWLEDGEMENT =
  "The B.C. Public Service acknowledges the territories of First Nations around B.C. and is grateful to carry out our work on these lands. We acknowledge the rights, interests, priorities, and concerns of all Indigenous Peoples - First Nations, Métis, and Inuit - respecting and acknowledging their distinct cultures, histories, rights, laws, and governments.";
const normalise = (text: string) =>
  text.replace(/[—–]/g, "-").replace(/\s+/g, " ").trim();
const acknowledgementText = figma.selectedInstance.getString(
  "Territorial acknowledgement content"
);
const acknowledgement =
  acknowledgementText &&
  normalise(acknowledgementText) !== normalise(DEFAULT_ACKNOWLEDGEMENT)
    ? jsxElement(`<p>${acknowledgementText}</p>`)
    : undefined;

export default {
  id: "Footer",
  imports: ["import { Footer } from '@bcgov/design-system-react-components';"],
  example: figma.code`<Footer${renderProp("hideLogoAndLinks", hideLogoAndLinks)}${renderProp("hideCopyright", hideCopyright)}${renderProp("hideAcknowledgement", hideAcknowledgement)}${renderProp("acknowledgement", acknowledgement)} />`,
  metadata: { nestable: true },
};
