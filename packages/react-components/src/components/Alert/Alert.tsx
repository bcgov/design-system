import "./Alert.css";
import SvgInfoIcon from "../SvgInfoIcon";
import SvgExclamationIcon from "../SvgExclamationIcon";

export interface AlertProps {
  /* Alert theme */
  variant?: "info" | "success" | "warning" | "danger";
  /* Icon displayed at left of alert */
  icon?: React.ReactElement;
  /* Alert title */
  title?: string;
  /* Alert description */
  description?: string;
  /* Alert closeable state */
  closeable?: boolean;
}

export default function Alert({
  variant = "info",
  title,
  description,
  closeable,
  ...props
}: AlertProps) {
  return (
    <div className={`bcds-Alert ${variant}`} {...props}>
      <span className="bcds-Alert--icon">
        {variant === "info" ? (
          <SvgInfoIcon />
        ) : variant === "success" ? (
          <SvgExclamationIcon />
        ) : variant === "warning" ? (
          <SvgExclamationIcon />
        ) : variant === "danger" ? (
          <SvgExclamationIcon />
        ) : null}
      </span>
      <div className="bcds-Alert--container">
        <span className="title">{title}</span>
        <span className="description">{description}</span>
      </div>
      {closeable && (
        <span className="bcds-Alert--closeIcon">
          <SvgInfoIcon />
        </span>
      )}
    </div>
  );
}
