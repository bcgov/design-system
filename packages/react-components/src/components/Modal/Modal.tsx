import {
  Modal as ReactAriaModal,
  ModalOverlay as ReactAriaModalOverlay,
} from "react-aria-components";

import "./Modal.css";
import React from "react";

export interface ModalProps {
  children?: React.ReactNode;
}

export default function Modal({ children, ...props }: ModalProps) {
  return (
    <ReactAriaModalOverlay className="bcds-react-aria-Modal--Overlay">
      <ReactAriaModal className="bcds-react-aria-Modal--Container" {...props}>
        {children}
      </ReactAriaModal>
    </ReactAriaModalOverlay>
  );
}
