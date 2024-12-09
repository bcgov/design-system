import {
  Link as ReactAriaLink,
  LinkProps as ReactAriaLinkProps,
} from "react-aria-components";

import "./Link.css";

export interface LinkProps extends ReactAriaLinkProps {
  /* Text size */
  size?: "small" | "medium" | "large";
  /* ARIA label */
  ariaLabel?: string | undefined;
}

export default function Link({
  children,
  size = "medium",
  ariaLabel,
  ...props
}: LinkProps) {
  return (
    <ReactAriaLink
      className={`bcds-react-aria-Link ${size}`}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </ReactAriaLink>
  );
}
