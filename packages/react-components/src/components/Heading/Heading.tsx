import {
  Heading as ReactAriaHeading,
  HeadingProps as ReactAriaHeadingProps,
} from "react-aria-components";

import "./Heading.css";

export interface HeadingProps extends ReactAriaHeadingProps {
  isUnstyled?: boolean;
}

export default function Heading({
  isUnstyled = false,
  ...props
}: HeadingProps) {
  return (
    <ReactAriaHeading
      className={!isUnstyled ? "bcds-react-aria-Heading" : undefined}
      {...props}
    />
  );
}
