import React from "react";
import "./InlineAlert.css";
import {
  Button,
  SvgInfoIcon,
  SvgCheckCircleIcon,
  SvgExclamationIcon,
  SvgExclamationCircleIcon,
  SvgCloseIcon,
} from "@/components";

export interface InlineAlertProps extends React.PropsWithChildren {
  /* Alert theme */
  variant?: "info" | "success" | "warning" | "danger";
  /* Alert title */
  title?: string;
  /* Alert description */
  description?: string;
  /* Alert closeable state */
  isCloseable?: boolean;
  /* Show or hide left icon */
  isIconHidden?: boolean;
  /* ARIA role */
  role?: React.AriaRole | undefined;
  /* Close button handling */
  onClose?: () => void;
}

function getIcon(variant: string) {
  switch (variant) {
    case "info":
      return <SvgInfoIcon />;
    case "success":
      return <SvgCheckCircleIcon />;
    case "warning":
      return <SvgExclamationIcon />;
    case "danger":
      return <SvgExclamationCircleIcon />;
    default:
      return;
  }
}

export default function InlineAlert({
  variant = "info",
  title,
  description,
  isIconHidden = false,
  isCloseable = false,
  role = "note",
  children,
  onClose,
  ...props
}: InlineAlertProps) {
  return (
    <div className={`bcds-Inline-Alert ${variant}`} {...props}>
      {!isIconHidden && (
        <span className="bcds-Inline-Alert--icon">{getIcon(variant)}</span>
      )}
      <div
        className="bcds-Inline-Alert--container"
        role={role}
        aria-labelledby="alert-title"
      >
        <span className="title" id="alert-title">
          {title}
        </span>
        {description && <span className="description">{description}</span>}
        {children && (
          <div className="actions">
            <>{children}</>
          </div>
        )}
      </div>
      {isCloseable && (
        <span className="bcds-Inline-Alert--closeIcon">
          <Button
            variant="tertiary"
            isIconButton
            size="small"
            aria-label="Close this alert"
            type="button"
            onPress={onClose}
          >
            <SvgCloseIcon />
          </Button>
        </span>
      )}
    </div>
  );
}
