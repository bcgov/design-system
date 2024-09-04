import {
  Modal as ReactAriaModal,
  ModalOverlay as ReactAriaModalOverlay,
  ModalOverlayProps as ReactAriaModalOverlayProps,
} from "react-aria-components";

import "./Modal.css";

export interface ModalProps extends ReactAriaModalOverlayProps {}

export default function Modal({ children, ...props }: ModalProps) {
  return (
    <ReactAriaModalOverlay className="bcds-react-aria-Modal--Overlay">
      <ReactAriaModal className="bcds-react-aria-Modal--Container" {...props}>
        {children}
      </ReactAriaModal>
    </ReactAriaModalOverlay>
  );
}
