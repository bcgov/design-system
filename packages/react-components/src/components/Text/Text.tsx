import {
  Text as ReactAriaText,
  TextProps as ReactAriaTextProps,
} from "react-aria-components";

import "./Text.css";

export interface TextProps extends ReactAriaTextProps {
  size?: "small" | "medium" | "large";
  color?:
    | "primary"
    | "primaryInvert"
    | "secondary"
    | "secondaryInvert"
    | "disabled"
    | "danger";
}

export default function Text({
  size = "medium",
  color = "primary",
  ...props
}: TextProps) {
  return (
    <ReactAriaText
      className={`bcds-react-aria-Text ${size} ${color}`}
      {...props}
    >
      {props.children}
    </ReactAriaText>
  );
}
