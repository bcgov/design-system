import {
  Dialog as ReactAriaDialog,
  DialogTrigger,
  DialogProps as ReactAriaDialogProps,
} from "react-aria-components";

import Button from "../Button";
import ButtonGroup from "../ButtonGroup";
import SvgCloseIcon from "../Icons/SvgCloseIcon";
import SvgInfoIcon from "../Icons/SvgInfoIcon";
import SvgCheckCircleIcon from "../Icons/SvgCheckCircleIcon";

import "./AlertDialog.css";
import React from "react";
import SvgExclamationIcon from "../Icons/SvgExclamationIcon";
import SvgExclamationCircleIcon from "../Icons/SvgExclamationCircleIcon";

export interface AlertDialogProps extends ReactAriaDialogProps {
  /* Dialog theme */
  variant?: "info" | "confirmation" | "warning" | "error" | "destructive";
  /* Dialog title */
  title?: string;
  /* Dialog description */
  description?: string;
  /* Button group */
  buttons?: React.ReactNode;
}

/* Sets correct left icon for selected variant */
function getIcon(variant: string) {
  switch (variant) {
    case "info":
      return <SvgInfoIcon />;
    case "confirmation":
      return <SvgCheckCircleIcon />;
    case "warning":
      return <SvgExclamationIcon />;
    case "error":
      return <SvgExclamationCircleIcon />;
    case "destructive":
      return <SvgExclamationCircleIcon />;
    default:
      return;
  }
}

export default function AlertDialog({
  variant = "info",
  title,
  description,
  buttons,
  ...props
}: AlertDialogProps) {
  return (
    <ReactAriaDialog
      className={`bcds-react-aria-AlertDialog ${variant}`}
      {...props}
    >
      {({ close }) => (
        <>
          <div className="bcds-react-aria-AlertDialog--Header">
            <div className="bcds-react-aria-AlertDialog--Icon">
              {getIcon(variant)}
            </div>
            {title && (
              <div className="bcds-react-aria-AlertDialog--Title" slot="title">
                {title}
              </div>
            )}
            <div className="bcds-react-aria-AlertDialog--closeIcon">
              <Button
                variant="tertiary"
                isIconButton
                size="small"
                aria-label="Close"
                type="button"
                onPress={close}
              >
                <SvgCloseIcon />
              </Button>
            </div>
          </div>
          {description && (
            <div
              className="bcds-react-aria-AlertDialog--Description"
              slot="description"
            >
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
