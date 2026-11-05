// url=https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=6433%3A2024
// source=https://github.com/bcgov/design-system/blob/main/packages/react-components/src/components/Modal/Modal.tsx
// component=Modal

import figma from "figma";

const dialogInstance = figma.selectedInstance.findInstance("Alert dialog");
const dialog =
  dialogInstance.type === "INSTANCE"
    ? dialogInstance.executeTemplate().example
    : undefined;

export default {
  id: "Modal",
  imports: ["import { Modal } from '@bcgov/design-system-react-components';"],
  example: figma.code`<Modal>
      ${dialog ?? ""}
    </Modal>`,
  metadata: { nestable: true },
};
