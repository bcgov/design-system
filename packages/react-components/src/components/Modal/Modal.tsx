import {
  Modal as ReactAriaModal,
  ModalOverlay,
  ModalOverlayProps,
} from "react-aria-components";

import "./Modal.css";

export default function Modal({
  children,
  isDismissable,
  isKeyboardDismissDisabled,
  isOpen,
  defaultOpen,
  shouldCloseOnInteractOutside,
  ...props
}: ModalOverlayProps) {
  return (
    <ModalOverlay
      className="bcds-react-aria-Modal--Overlay"
      isDismissable={isDismissable}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
      isOpen={isOpen}
      defaultOpen={defaultOpen}
      shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
    >
      <ReactAriaModal className="bcds-react-aria-Modal--Container" {...props}>
        {children}
      </ReactAriaModal>
    </ModalOverlay>
  );
}
