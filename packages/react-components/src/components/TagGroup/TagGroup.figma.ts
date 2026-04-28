// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=3970%3A2221
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/TagGroup/TagGroup.tsx
// component=TagGroup

import figma from "figma";

const labelInstance = figma.selectedInstance.findInstance("Label");
const labelTextHandle =
  labelInstance.type !== "ERROR" ? labelInstance.findText("Label") : undefined;
const label =
  labelTextHandle && labelTextHandle.type !== "ERROR"
    ? labelTextHandle.textContent
    : undefined;
const descriptionHandle = figma.selectedInstance.findText("Description");
const description =
  descriptionHandle.type !== "ERROR"
    ? descriptionHandle.textContent
    : undefined;
const errorMessageHandle = figma.selectedInstance.findText("Error text");
const errorMessage =
  errorMessageHandle.type !== "ERROR"
    ? errorMessageHandle.textContent
    : undefined;
const children = figma.properties.children(["*"]);

const { renderProp, renderChildren } = figma.helpers.react;

export default {
  id: "TagGroup",
  imports: [
    "import { TagGroup, TagList, Tag } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<TagGroup${renderProp("label", label)}${renderProp("description", description)}${renderProp("errorMessage", errorMessage)}>${renderChildren(children)}</TagGroup>`,
  metadata: { nestable: true },
};
