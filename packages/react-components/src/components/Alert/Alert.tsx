import "./Alert.css";
import SvgInfoIcon from "../SvgInfoIcon";
import SvgCheckIcon from "../SvgCheckIcon";
import SvgExclamationIcon from "../SvgExclamationIcon";
import SvgExclamationCircleIcon from "../SvgExclamationCircleIcon";
import SvgCloseIcon from "../SvgCloseIcon";
import Button from "../Button";

export interface AlertProps extends React.PropsWithChildren {
  /* Alert theme */
  variant?: "info" | "success" | "warning" | "danger";
  /* Alert title */
  title?: string;
  /* Alert description */
  description?: string;
  /* Alert closeable state */
  closeable?: boolean;
}

function getIcon(variant: string) {
  switch (variant) {
    case "info":
      return <SvgInfoIcon />;
    case "success":
      return <SvgCheckIcon />;
    case "warning":
      return <SvgExclamationIcon />;
    case "danger":
      return <SvgExclamationCircleIcon />;
    default:
      return;
  }
}

export default function Alert({
  variant = "info",
  title,
  description,
  closeable,
  children,
  ...props
}: AlertProps) {
  return (
    <div className={`bcds-Alert ${variant}`} {...props}>
      <span className="bcds-Alert--icon">{getIcon(variant)}</span>
      <div className="bcds-Alert--container">
        <span className="title">{title}</span>
        <span className="description">{description}</span>
        {children && (
          <div className="actions">
            <>{children}</>
          </div>
        )}
      </div>
      {closeable && (
        <span className="bcds-Alert--closeIcon">
          <Button
            variant="tertiary"
            isIconButton
            size="small"
            aria-label="close"
            type="button"
          >
            <SvgCloseIcon />
          </Button>
        </span>
      )}
    </div>
  );
}
