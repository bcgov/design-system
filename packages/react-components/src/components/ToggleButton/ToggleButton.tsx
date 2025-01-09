import {
  ToggleButton as ReactAriaToggleButton,
  ToggleButtonProps as ReactAriaToggleButtonProps,
} from "react-aria-components";

import "./ToggleButton.css";

export interface ToggleButtonProps extends ReactAriaToggleButtonProps {
  isIconButton?: boolean;
  danger?: boolean;
}

export default function ToggleButton({
  children,
  danger = false,
  ...props
}: ToggleButtonProps) {
  return (
    <ReactAriaToggleButton
      className={`bcds-react-aria-ToggleButton ${danger ? "danger" : null}`}
      {...props}
    >
      {children}
    </ReactAriaToggleButton>
  );
}
