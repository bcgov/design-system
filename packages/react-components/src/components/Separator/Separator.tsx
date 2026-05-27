import {
  Separator as ReactAriaSeparator,
  SeparatorProps as ReactAriaSeparatorProps,
} from "react-aria-components";

import "./Separator.css";

export interface SeparatorProps extends ReactAriaSeparatorProps {
  /* Sizing */
  size?: "small" | "medium" | "large";
}

export default function Separator({
  size = "medium",
  ...props
}: SeparatorProps) {
  return (
    <ReactAriaSeparator
      className={`bcds-react-aria-Separator ${size}`}
      {...props}
    />
  );
}
