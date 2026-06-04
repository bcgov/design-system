// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=4017%3A17444
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Header/Header.tsx
// component=Header

import figma from "figma";

const logoImage = figma.selectedInstance
  .getInstanceSwap("Logo")
  ?.executeTemplate().example;
const children = figma.properties.children(["Header content"]);
const hasSubheader = figma.selectedInstance.getBoolean("Has subheader");
const subheaderChildren = figma.selectedInstance.getSlot("Slot 2");
const imports = hasSubheader
  ? ["import { Header, Navbar } from '@bcgov/design-system-react-components';"]
  : ["import { Header } from '@bcgov/design-system-react-components';"];

const { renderProp, renderChildren } = figma.helpers.react;

export default {
  id: "Header",
  imports,
  example: hasSubheader
    ? figma.code`<>
  <Header${renderProp("logoImage", logoImage)}>${renderChildren(children)}</Header>
  <Navbar>${renderChildren(subheaderChildren)}</Navbar>
</>`
    : figma.code`<Header${renderProp("logoImage", logoImage)}>${renderChildren(children)}</Header>`,
  metadata: { nestable: true },
};
