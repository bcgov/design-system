import {
  Text as ReactAriaText,
  TextProps as ReactAriaTextProps,
} from "react-aria-components";

import "./Text.css";

export interface TextProps extends ReactAriaTextProps {
  /* Sets text size, defaults to medium */
  size?: "small" | "medium" | "large";
  /* Sets text color, defaults to primary */
  color?:
    | "primary"
    | "primaryInvert"
    | "secondary"
    | "secondaryInvert"
    | "disabled"
    | "danger";
  /* If true, renders component without CSS class */
  isUnstyled?: boolean;
}

export default function Text({
  elementType = "span",
  size = "medium",
  color = "primary",
  isUnstyled = false,
  ...props
}: TextProps) {
  return (
    <ReactAriaText
      elementType={elementType}
      className={
        isUnstyled ? undefined : `bcds-react-aria-Text ${size} ${color}`
      }
      {...props}
    >
      {props.children}
    </ReactAriaText>
  );
}
