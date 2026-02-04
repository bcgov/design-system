import "./Toast.css";
import { Button } from "react-aria-components";
import React from "react";

export type ToastVariant = "success" | "error" | "info" | "progress";

export interface ToastProps {
  variant?: ToastVariant;
  title?: string;
  message: string;
  onClose: () => void;
  dismissible?: boolean;
  onPause?: () => void;
  onResume?: () => void;
}

export default function Toast({
  variant = "info",
  title,
  message,
  dismissible = true,
  onClose,
  onPause,
  onResume
}: ToastProps) {
  const handleBlurCapture = (e: React.FocusEvent<HTMLDivElement>) => {
    const next = e.relatedTarget as Node | null;
    if (!next || !e.currentTarget.contains(next)) {
      onResume?.();
    }
  };

  return (
    <div
      className={`bcds-Toast bcds-Toast--${variant}`}
      role="status"
      aria-live="polite"
      onMouseEnter={onPause}
      onMouseLeave={onResume}
      onFocusCapture={onPause}
      onBlurCapture={handleBlurCapture}
    >
      <div className="bcds-Toast__content">
        {title && <span className="bcds-Toast__title">{title}</span>}
        <span className="bcds-Toast__message">{message}</span>
      </div>
      {dismissible && (
        <Button
          className="bcds-Toast__dismiss"
          aria-label="Dismiss notification"
          onPress={onClose}
        >
          ✕
        </Button>
      )}
    </div>
  );
}