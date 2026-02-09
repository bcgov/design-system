import { Label } from "react-aria-components";
import ProgressCircle, { ProgressCircleProps } from "../ProgressCircle";

import "./Loader.css";

export interface LoaderProps extends Omit<
  ProgressCircleProps,
  "valueLabel" | "formatOptions" | "minValue" | "maxValue" | "size"
> {
  /* Set the size of the spinner and typography */
  size?: "small" | "medium" | "large";
  /* Label text below the spinner */
  label?: string;
  /* Z-index of spinner */
  zIndex?: number;
  /* idk how to phrase this */
  theme?: "light" | "dark";
}

export default function Loader({
  size = "medium",
  label,
  zIndex = 100,
  theme = "light",
  ...props
}: LoaderProps) {
  return (
    <div
      className={`bcds-react-aria-Loader--container ${theme} ${size}`}
      style={{ zIndex }}
    >
      <ProgressCircle size={size} {...props} />
      {label && (
        <Label className="bcds-react-aria-Loader--Label">{label}</Label>
      )}
    </div>
  );
}
