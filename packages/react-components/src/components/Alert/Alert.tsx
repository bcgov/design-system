import "./Alert.css";
import SvgInfoIcon from "../SvgInfoIcon";

export interface AlertProps {
  /* Alert theme */
  variant?: "info" | "success" | "warning" | "danger";
  /* Icon displayed at left of alert */
  icon?: React.ReactElement;
  /* Alert title */
  title?: string;
  /* Alert description */
  description?: string;
}

export default function Alert({
  variant = "info",
  title,
  description,
  icon,
  ...props
}: AlertProps) {
  return (
    <div className={`bcds-Alert ${variant}`} {...props}>
      <div className="bcds-Alert--icon">
        <SvgInfoIcon />
      </div>
      <div className="bcds-Alert--container">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
}
