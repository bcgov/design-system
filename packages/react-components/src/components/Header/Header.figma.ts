// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=4017%3A17444
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Header/Header.tsx
// component=Header

import figma from "figma";

const logoImage = figma.selectedInstance
  .getInstanceSwap("Logo")
  ?.executeTemplate().example;
const titleHandle = figma.selectedInstance.findText("Title");
const title =
  figma.selectedInstance.getBoolean("Show title") &&
  titleHandle.type !== "ERROR"
    ? titleHandle.textContent
    : undefined;
const children = figma.properties.children(["Header/Header content"]);
const hasSubheader = figma.selectedInstance.getEnum("Subheader", {
  True: true,
});
const subheaderInstance =
  figma.selectedInstance.findInstance("Header/Subheader");
const subheaderSize =
  subheaderInstance.type === "INSTANCE"
    ? subheaderInstance.getEnum("Size", { Small: "small", Medium: "medium" })
    : undefined;
const subheaderChildren =
  subheaderInstance.type === "INSTANCE"
    ? subheaderInstance.getSlot("Subheader content")
    : undefined;
const imports = hasSubheader
  ? [
      "import { Header, Subheader } from '@bcgov/design-system-react-components';",
    ]
  : ["import { Header } from '@bcgov/design-system-react-components';"];

const { renderProp, renderChildren } = figma.helpers.react;

const header = figma.code`<Header${renderProp("logoImage", logoImage)}${renderProp("title", title)}>${renderChildren(children)}</Header>`;

export default {
  id: "Header",
  imports,
  example: hasSubheader
    ? figma.code`<>
  ${header.sections}
  <Subheader${renderProp("size", subheaderSize)}>${renderChildren(subheaderChildren)}</Subheader>
</>`
    : header,
  metadata: { nestable: true },
};
