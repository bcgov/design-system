import {
  Heading as ReactAriaHeading,
  HeadingProps as ReactAriaHeadingProps,
} from "react-aria-components";

import "./Heading.css";

export interface HeadingProps extends ReactAriaHeadingProps {
  /* If true, renders component without CSS class */
  isUnstyled?: boolean;
}

export default function Heading({
  isUnstyled = false,
  ...props
}: HeadingProps) {
  return (
    <ReactAriaHeading
      className={isUnstyled ? undefined : "bcds-react-aria-Heading"}
      {...props}
    />
  );
}
