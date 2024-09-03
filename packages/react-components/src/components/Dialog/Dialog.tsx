import {
  Dialog as ReactAriaDialog,
  DialogTrigger,
  DialogProps as ReactAriaDialogProps,
} from "react-aria-components";

import Button from "../Button";
import ButtonGroup from "../ButtonGroup";
import SvgCloseIcon from "../Icons/SvgCloseIcon";

import "./Dialog.css";
import React from "react";

export interface DialogProps extends ReactAriaDialogProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  buttons?: React.ReactNode;
}

export default function Dialog({
  buttons,
  children,
  description,
  title,
  ...props
}: DialogProps) {
  return (
    <ReactAriaDialog className="bcds-react-aria-Dialog" {...props}>
      {children ? (
        children
      ) : (
        <>
          <div className="bcds-react-aria-Dialog--Header">
            {title && (
              <div className="bcds-react-aria-Dialog--Title">{title}</div>
            )}
            <div className="bcds-react-aria-Dialog--closeIcon">
              <Button
                variant="tertiary"
                isIconButton
                size="small"
                aria-label="Close"
                type="button"
              >
                <SvgCloseIcon />
              </Button>
            </div>
          </div>
          {description && (
            <div className="bcds-react-aria-Dialog--Description">
              {description}
            </div>
          )}
          {buttons && (
            <ButtonGroup alignment="end" orientation="horizontal">
              {buttons}
            </ButtonGroup>
          )}
        </>
      )}
    </ReactAriaDialog>
  );
}

export { DialogTrigger };
