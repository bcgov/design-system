import {
  Link as ReactAriaLink,
  LinkProps as ReactAriaLinkProps,
} from "react-aria-components";

import "./Link.css";
import "../Button/Button.css";

export interface LinkProps extends ReactAriaLinkProps {
  /* Link content */
  children?: React.ReactNode;
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
  /* Icon slots */
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
}

export default function Link({
  children,
  size = "medium",
  danger = false,
  isButton = false,
  buttonVariant = "primary",
  isUnstyled = false,
  iconLeft,
  iconRight,
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
      {iconLeft && (
        <span className="bcds-react-aria-Link--Icon">{iconLeft}</span>
      )}
      {children}
      {iconRight && (
        <span className="bcds-react-aria-Link--Icon">{iconRight}</span>
      )}
    </ReactAriaLink>
  );
}
