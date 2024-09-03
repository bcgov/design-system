import {
  Dialog as ReactAriaDialog,
  DialogTrigger,
  DialogProps as ReactAriaDialogProps,
} from "react-aria-components";

import Button from "../Button";
import ButtonGroup from "../ButtonGroup";

import "./Dialog.css";
import React from "react";

export interface DialogProps extends ReactAriaDialogProps {
  children?: React.ReactNode;
  buttons?: React.ReactNode;
}

export default function Dialog({ buttons, children, ...props }: DialogProps) {
  return (
    <ReactAriaDialog className="bcds-react-aria-Dialog" {...props}>
      {children}
      {buttons && <ButtonGroup>{buttons}</ButtonGroup>}
    </ReactAriaDialog>
  );
}

export { DialogTrigger };
