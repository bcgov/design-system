import {
  Modal as ReactAriaModal,
  ModalOverlay as ReactAriaModalOverlay,
  ModalOverlayProps as ReactAriaModalOverlayProps,
} from "react-aria-components";

import "./Modal.css";

export default function Modal({
  children,
  isDismissable,
  isKeyboardDismissDisabled,
  shouldCloseOnInteractOutside,
  ...props
}: ReactAriaModalOverlayProps) {
  return (
    <ReactAriaModalOverlay
      className="bcds-react-aria-Modal--Overlay"
      isDismissable={isDismissable}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
      shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
    >
      <ReactAriaModal className="bcds-react-aria-Modal--Container" {...props}>
        {children}
      </ReactAriaModal>
    </ReactAriaModalOverlay>
  );
}
