// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=3970%3A2221
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/TagGroup/TagGroup.tsx
// component=TagGroup

import figma from "figma";

const { renderProp, object, array } = figma.helpers.react;

const labelInstance = figma.selectedInstance.findInstance("Label");
const label =
  figma.selectedInstance.getBoolean("Label") &&
  labelInstance.type === "INSTANCE"
    ? labelInstance.getString("Label text")
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

// TagList renders from an `items` array, so build one from the nested Tags
const tagInstances = figma.selectedInstance.findConnectedInstances(
  (node) => node.codeConnectId() === "Tag"
);
const items = tagInstances
  .filter((tag) => tag.type === "INSTANCE")
  .map((tag, index) => {
    const props = (tag.executeTemplate().metadata?.props ?? {}) as Record<
      string,
      string | undefined
    >;
    const item: Record<string, string> = { id: `tag-${index + 1}` };
    for (const key of ["textValue", "color", "tagStyle", "size"]) {
      if (props[key] !== undefined) item[key] = props[key];
    }
    return object(item);
  });

export default {
  id: "TagGroup",
  imports: [
    "import { TagGroup, TagList } from '@bcgov/design-system-react-components';",
  ],
  example: figma.code`<TagGroup${renderProp("label", label)}${renderProp("description", description)}${renderProp("errorMessage", errorMessage)}>
      <TagList${renderProp("items", array(items))} />
    </TagGroup>`,
  metadata: { nestable: true },
};
