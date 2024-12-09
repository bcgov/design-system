import {
  Link as ReactAriaLink,
  LinkProps as ReactAriaLinkProps,
} from "react-aria-components";

import "./Link.css";
import "../Button/Button.css";

export interface LinkProps extends ReactAriaLinkProps {
  /* Text size */
  size?: "small" | "medium" | "large";
  /* Toggles link to use Button styles */
  isButton?: boolean;
  /* Sets which Button style is applied */
  buttonVariant?: "primary" | "secondary" | "tertiary";
  /* ARIA label */
  ariaLabel?: string | undefined;
  /* Red colourway for danger/error states */
  danger?: boolean;
  /* Override all styling, let link inherit styles from parent */
  isUnstyled?: boolean;
}

export default function Link({
  children,
  size = "medium",
  danger = false,
  isButton = false,
  buttonVariant = "primary",
  isUnstyled = false,
  ariaLabel,
  ...props
}: LinkProps) {
  return (
    <ReactAriaLink
      className={
        !isUnstyled
          ? isButton
            ? `bcds-react-aria-Button ${size} ${buttonVariant} ${
                danger && "danger"
              }`
            : `bcds-react-aria-Link ${size} ${danger && "danger"}`
          : undefined
      }
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </ReactAriaLink>
  );
}
