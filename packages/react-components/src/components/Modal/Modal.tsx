import type { JSX } from "react";
import {
  Modal as ReactAriaModal,
  ModalOverlayProps,
} from "react-aria-components";

import "./Modal.css";

export default function Modal({
  children,
  ...props
}: ModalOverlayProps): JSX.Element {
  return (
    <ReactAriaModal className="bcds-react-aria-Modal" {...props}>
      {children}
    </ReactAriaModal>
  );
}
