import {
  ToggleButton as ReactAriaToggleButton,
  ToggleButtonProps as ReactAriaToggleButtonProps,
} from "react-aria-components";

import "./ToggleButton.css";

export interface ToggleButtonProps extends ReactAriaToggleButtonProps {
  size?: "small" | "medium";
  isIconButton?: boolean;
}

export default function ToggleButton({
  size = "medium",
  children,
  isIconButton = false,
  ...props
}: ToggleButtonProps) {
  return (
    <ReactAriaToggleButton
      className={`bcds-react-aria-ToggleButton ${size} ${
        isIconButton ? "icon" : null
      }`}
      {...props}
    >
      {children}
    </ReactAriaToggleButton>
  );
}
