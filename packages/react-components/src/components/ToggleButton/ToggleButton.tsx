import {
  ToggleButton as ReactAriaToggleButton,
  ToggleButtonProps as ReactAriaToggleButtonProps,
} from "react-aria-components";

import "./ToggleButton.css";

export interface ToggleButtonProps extends ReactAriaToggleButtonProps {}

export default function ToggleButton({
  children,
  ...props
}: ToggleButtonProps) {
  return (
    <ReactAriaToggleButton
      className={`bcds-react-aria-ToggleButton`}
      {...props}
    >
      {children}
    </ReactAriaToggleButton>
  );
}
