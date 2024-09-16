import {
  Modal as ReactAriaModal,
  ModalOverlayProps,
} from "react-aria-components";

import "./Modal.css";

export default function Modal({ children, ...props }: ModalOverlayProps) {
  return (
    <ReactAriaModal className="bcds-react-aria-Modal" {...props}>
      {children}
    </ReactAriaModal>
  );
}
