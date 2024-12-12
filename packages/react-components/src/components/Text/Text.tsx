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
  isUnstyled?: boolean;
}

export default function Text({
  size = "medium",
  color = "primary",
  isUnstyled = false,
  ...props
}: TextProps) {
  return (
    <ReactAriaText
      className={
        !isUnstyled ? `bcds-react-aria-Text ${size} ${color}` : undefined
      }
      {...props}
    >
      {props.children}
    </ReactAriaText>
  );
}
