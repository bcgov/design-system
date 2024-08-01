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
  showIcon?: boolean;
  /* Sets ARIA role attribute to "alert" — use cautiously */
  alertRole?: boolean;
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
  showIcon = true,
  isCloseable = false,
  alertRole = false,
  children,
  ...props
}: InlineAlertProps) {
  return (
    <div className={`bcds-Inline-Alert ${variant}`} {...props}>
      {showIcon && (
        <span className="bcds-Inline-Alert--icon">{getIcon(variant)}</span>
      )}
      <div
        className="bcds-Inline-Alert--container"
        role={alertRole ? "alert" : "note"}
      >
        <span className="title">{title}</span>
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
          >
            <SvgCloseIcon />
          </Button>
        </span>
      )}
    </div>
  );
}
