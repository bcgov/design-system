import "./Toast.css";
import { Button } from "react-aria-components";

export type ToastVariant = "success" | "error" | "info" | "progress";

export interface ToastProps {
  variant?: ToastVariant;
  title?: string;
  message: string;
  onClose: () => void;
  dismissible?: boolean;
}

export default function Toast({
  variant = "info",
  title,
  message,
  dismissible = true,
  onClose
}: ToastProps) {
  return (
    <div className={`bcds-Toast bcds-Toast--${variant}`} role="status" aria-live="polite">
      <div className="bcds-Toast__content">
        {title && <span className="bcds-Toast__title">{title}</span>}
        <span className="bcds-Toast__message">{message}</span>
      </div>
      {dismissible && (
        <Button className="bcds-Toast__dismiss" aria-label="Dismiss notification" onPress={onClose}>
          ✕
        </Button>
      )}
    </div>
  );
}
