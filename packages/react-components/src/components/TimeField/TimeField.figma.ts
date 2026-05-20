// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=19285%3A4805
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/TimeField/TimeField.tsx
// component=TimeField

import figma from "figma";

const size = figma.selectedInstance.getEnum("Size", {
  Medium: "medium",
  Small: "small",
});
const hideTimeZone = figma.selectedInstance.getBoolean("Timezone", {
  false: true,
  true: false,
});

const timeValueGroup = figma.selectedInstance.findInstance(
  "Time field/time value group"
);
const hourCycle =
  timeValueGroup.type !== "ERROR"
    ? timeValueGroup.getBoolean("12 Hour cycle?", { true: 12, false: 24 })
    : undefined;
const granularity =
  timeValueGroup.type !== "ERROR"
    ? timeValueGroup.getEnum("Granularity", {
        Hour: "hour",
        Minute: "minute",
        Second: "second",
      })
    : undefined;

const labelInstance = figma.selectedInstance.findInstance("Label");
const label =
  labelInstance.type !== "ERROR"
    ? labelInstance.getString("Label text")
    : undefined;
const isRequired =
  labelInstance.type !== "ERROR" &&
  labelInstance.getPropertyValue("Required") === true
    ? true
    : undefined;

const descriptionTextHandle = figma.selectedInstance.findText("Description");
const descriptionText =
  descriptionTextHandle.type !== "ERROR"
    ? descriptionTextHandle.textContent
    : undefined;
const description = figma.selectedInstance.getBoolean("Description", {
  true: descriptionText,
  false: undefined,
});

const isDisabled = figma.selectedInstance.getEnum("State", { Disabled: true });

const errorMessageHandle = figma.selectedInstance.findText("Error Message");
const errorText =
  errorMessageHandle.type !== "ERROR"
    ? errorMessageHandle.textContent
    : undefined;
const errorMessage = figma.selectedInstance.getEnum("State", {
  Error: errorText,
});

const { renderProp } = figma.helpers.react;

export default {
  id: "TimeField",
  imports: [
    "import { TimeField } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<TimeField${renderProp("size", size)}${renderProp("label", label)}${renderProp("description", description)}${renderProp("granularity", granularity)}${renderProp("hourCycle", hourCycle)}${renderProp("hideTimeZone", hideTimeZone)}${renderProp("isRequired", isRequired)}${renderProp("isDisabled", isDisabled)}${renderProp("errorMessage", errorMessage)}/>`,
  metadata: { nestable: true },
};
