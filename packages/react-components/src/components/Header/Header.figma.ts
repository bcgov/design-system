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
const children = figma.properties.children(["Header content"]);
const hasSubheader = figma.selectedInstance.getBoolean("Subheader");
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
  <Subheader></Subheader>
</>`
    : header,
  metadata: { nestable: true },
};
