// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=15871%3A6832
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Calendar/Calendar.tsx
// component=Calendar

import figma from "figma"

const visibleDuration = figma.selectedInstance.getEnum("Visible months", {
  "1": figma.helpers.react.object({ months: 1 }),
  "2": figma.helpers.react.object({ months: 2 }),
  "3": figma.helpers.react.object({ months: 3 }),
})

export default {
  id: "Calendar",
  imports: [
    "import { Calendar } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<Calendar${figma.helpers.react.renderProp(
    "visibleDuration",
    visibleDuration,
  )}/>`,
  metadata: { nestable: true },
}
