import "./Toast.css";
import Button from "../Button";
import React from "react";

import SvgCheckCircleIcon from "../Icons/SvgCheckCircleIcon";
import SvgCloseIcon from "../Icons/SvgCloseIcon";
import SvgExclamationCircleIcon from "../Icons/SvgExclamationCircleIcon";
import SvgExclamationIcon from "../Icons/SvgExclamationIcon";
import SvgInfoIcon from "../Icons/SvgInfoIcon";

function getIcon(variant: string) {
  switch (variant) {
    case "info":
      return <SvgInfoIcon />;
    case "progress":
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

export type ToastVariant =
  | "info"
  | "progress"
  | "success"
  | "warning"
  | "danger";

export interface ToastProps {
  variant?: ToastVariant;
  title?: React.ReactNode;
  message: React.ReactNode;
  onClose: () => void;
  isDismissable?: boolean;
  onPause?: () => void;
  onResume?: () => void;
}

export default function Toast({
  variant = "info",
  title,
  message,
  isDismissable = true,
  onClose,
  onPause,
  onResume,
  ...props
}: ToastProps) {
  const handleBlurCapture = (e: React.FocusEvent<HTMLDivElement>) => {
    const next = e.relatedTarget as Node | null;
    if (!next || !e.currentTarget.contains(next)) {
      onResume?.();
    }
  };

  return (
    <div
      className={`bcds-react-aria-Toast ${variant} ${
        isDismissable && "closeable"
      }`}
      role="status"
      aria-live="polite"
      onMouseEnter={onPause}
      onMouseLeave={onResume}
      onFocusCapture={onPause}
      onBlurCapture={handleBlurCapture}
      {...props}
    >
      <span className="bcds-react-aria-Toast--Icon">{getIcon(variant)}</span>
      <div className="bcds-react-aria-Toast--Container">
        {title && <div className="bcds-react-aria-Toast--Title">{title}</div>}
        <div className="bcds-react-aria-Toast--Message">{message}</div>
      </div>
      {isDismissable && (
        <span className="bcds-react-aria-Toast--closeIcon">
          <Button
            variant="tertiary"
            size="xsmall"
            aria-label="Dismiss notification"
            onPress={onClose}
            isIconButton
          >
            <SvgCloseIcon />
          </Button>
        </span>
      )}
    </div>
  );
}
