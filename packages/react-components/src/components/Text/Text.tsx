import {
  Text as ReactAriaText,
  TextProps as ReactAriaTextProps,
} from "react-aria-components";

import "./Text.css";

export interface TextProps extends ReactAriaTextProps {
  size?: "small" | "medium" | "large";
}

export default function Text({ size = "medium", ...props }: TextProps) {
  return (
    <ReactAriaText className={`bcds-react-aria-Text ${size}`} {...props}>
      {props.children}
    </ReactAriaText>
  );
}
