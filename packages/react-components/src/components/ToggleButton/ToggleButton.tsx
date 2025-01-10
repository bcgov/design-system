import {
  ToggleButton as ReactAriaToggleButton,
  ToggleButtonProps as ReactAriaToggleButtonProps,
} from "react-aria-components";

import "./ToggleButton.css";

export interface ToggleButtonProps extends ReactAriaToggleButtonProps {
  size?: "small" | "medium";
  isIconButton?: boolean;
  danger?: boolean;
}

export default function ToggleButton({
  size = "medium",
  danger = false,
  children,
  ...props
}: ToggleButtonProps) {
  return (
    <ReactAriaToggleButton
      className={`bcds-react-aria-ToggleButton ${size} ${
        danger ? "danger" : null
      }`}
      {...props}
    >
      {children}
    </ReactAriaToggleButton>
  );
}
