import {
  Dialog as ReactAriaDialog,
  DialogTrigger,
  DialogProps as ReactAriaDialogProps,
} from "react-aria-components";

import Button from "../Button";
import ButtonGroup from "../ButtonGroup";
import { DialogRenderProps } from "../Dialog/Dialog";
import SvgCheckCircleIcon from "../Icons/SvgCheckCircleIcon";
import SvgCloseIcon from "../Icons/SvgCloseIcon";
import SvgExclamationCircleIcon from "../Icons/SvgExclamationCircleIcon";
import SvgExclamationIcon from "../Icons/SvgExclamationIcon";
import SvgInfoIcon from "../Icons/SvgInfoIcon";

import "./AlertDialog.css";

export interface AlertDialogProps extends ReactAriaDialogProps {
  /* Dialog theme */
  variant?: "info" | "confirmation" | "warning" | "error" | "destructive";
  /* Dialog title */
  title?: string;
  /* Dialog description */
  description?: string;
  /* Show or hide left icon */
  isIconHidden?: boolean;
  /* Show or hide close button */
  isCloseable?: boolean;
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
  role = "dialog",
  title,
  isCloseable = true,
  isIconHidden = false,
  description,
  buttons,
  ...props
}: AlertDialogProps) {
  return (
    <ReactAriaDialog
      className={`bcds-react-aria-AlertDialog ${variant}`}
      role={role}
      {...props}
    >
      {({ close }: DialogRenderProps) => (
        <>
          <div className="bcds-react-aria-AlertDialog--Header">
            {!isIconHidden && (
              <div className="bcds-react-aria-AlertDialog--Icon">
                {getIcon(variant)}
              </div>
            )}
            {title && (
              <div className="bcds-react-aria-AlertDialog--Title" slot="title">
                {title}
              </div>
            )}
            {isCloseable && (
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
            )}
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
