// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=15871%3A6832
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Calendar/Calendar.tsx
// component=Calendar

import figma from "figma";

const { object, renderProp } = figma.helpers.react;

const visibleDuration = figma.selectedInstance.getEnum("Visible months", {
  "1": object({ months: 1 }),
  "2": object({ months: 2 }),
  "3": object({ months: 3 }),
});

export default {
  id: "Calendar",
  imports: [
    "import { Calendar } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<Calendar${renderProp("visibleDuration", visibleDuration)}/>`,
  metadata: { nestable: true },
};
