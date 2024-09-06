import {
  Modal as ReactAriaModal,
  ModalOverlay as ReactAriaModalOverlay,
  ModalOverlayProps as ReactAriaModalOverlayProps,
} from "react-aria-components";

import "./Modal.css";

export interface ModalProps extends ReactAriaModalOverlayProps {
  /* Sets height of modal container */
  modalHeight: string | number;
  /* Sets width of modal container */
  modalWidth: string | number;
}

export default function Modal({
  children,
  isDismissable,
  isKeyboardDismissDisabled,
  modalHeight = "auto",
  modalWidth = 600,
  ...props
}: ModalProps) {
  return (
    <ReactAriaModalOverlay
      className="bcds-react-aria-Modal--Overlay"
      isDismissable={isDismissable}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
    >
      <ReactAriaModal
        className="bcds-react-aria-Modal--Container"
        style={{ width: modalWidth, height: modalHeight }}
        {...props}
      >
        {children}
      </ReactAriaModal>
    </ReactAriaModalOverlay>
  );
}
