// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=15865%3A4285
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/DatePicker/DatePicker.tsx
// component=DatePicker

import figma from "figma";

const size = figma.selectedInstance.getEnum("Size", {
  Small: "small",
  Medium: "medium",
});
const hideTimeZone = figma.selectedInstance.getBoolean("Timezone", {
  false: true,
  true: false,
});
const isDisabled = figma.selectedInstance.getEnum("State", {
  Disabled: true,
});
const isReadOnly = figma.selectedInstance.getEnum("State", {
  "Read only": true,
});
const granularity = figma.selectedInstance.getEnum("Time", {
  true: "minute",
  false: "day",
});

const titleInstance = figma.selectedInstance.findInstance("Title");
const label =
  titleInstance.type !== "ERROR"
    ? titleInstance.getString("Label text")
    : undefined;
const isRequired =
  titleInstance.type !== "ERROR" &&
  titleInstance.getPropertyValue("Required") === true
    ? true
    : undefined;

const descriptionInstance = figma.selectedInstance.findInstance("Description");
const descriptionText =
  descriptionInstance.type !== "ERROR"
    ? descriptionInstance.findText("Description")
    : undefined;
const description =
  descriptionText && descriptionText.type !== "ERROR"
    ? descriptionText.textContent
    : undefined;
const showFormatHelpText =
  descriptionInstance.type !== "ERROR"
    ? descriptionInstance.getEnum("Mode", {
        "Format only": true,
        "Format & description": true,
      })
    : undefined;

const { renderProp } = figma.helpers.react;

export default {
  id: "DatePicker",
  imports: [
    "import { DatePicker } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<DatePicker${renderProp("size", size)}${renderProp("granularity", granularity)}${renderProp("hideTimeZone", hideTimeZone)}${renderProp("isRequired", isRequired)}${renderProp("isDisabled", isDisabled)}${renderProp("isReadOnly", isReadOnly)}${renderProp("label", label)}${renderProp("description", description)}${renderProp("showFormatHelpText", showFormatHelpText)}/>`,
  metadata: { nestable: true },
};
