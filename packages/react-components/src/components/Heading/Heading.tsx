import {
  Heading as ReactAriaHeading,
  HeadingProps as ReactAriaHeadingProps,
} from "react-aria-components";

import "./Heading.css";

export interface HeadingProps extends ReactAriaHeadingProps {
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

export default function Heading({
  color = "primary",
  isUnstyled = false,
  ...props
}: HeadingProps) {
  return (
    <ReactAriaHeading
      className={isUnstyled ? undefined : `bcds-react-aria-Heading ${color}`}
      {...props}
    />
  );
}
