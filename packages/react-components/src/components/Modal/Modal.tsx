import { Modal as ReactAriaModal } from "react-aria-components";

import "./Modal.css";
import React from "react";

export interface ModalProps {
  children?: React.ReactNode;
}

export default function Modal({ children, ...props }: ModalProps) {
  return (
    <ReactAriaModal className="bcds-react-aria-Modal" {...props}>
      {children}
    </ReactAriaModal>
  );
}
