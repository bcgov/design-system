import {
  Button as ReactAriaButton,
  ButtonProps as ReactAriaButtonProps,
} from "react-aria-components";

import "./Button.css";

export interface ButtonProps extends ReactAriaButtonProps {
  size?: "small" | "medium";
  variant?: "primary" | "secondary" | "tertiary" | "link";
  danger?: boolean;
  isIconButton?: boolean;
}

export default function Button({
  size = "medium",
  variant = "primary",
  danger = false,
  isIconButton = false,
  ...props
}: ButtonProps) {
  return (
    <ReactAriaButton
      className={`react-aria-Button ${size} ${variant} ${
        danger ? "danger" : ""
      } ${isIconButton ? "icon" : ""}`}
      {...props}
    />
  );
}
