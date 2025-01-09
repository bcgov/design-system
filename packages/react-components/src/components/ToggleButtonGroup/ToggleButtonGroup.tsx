import {
  ToggleButtonGroup as ReactAriaToggleButtonGroup,
  ToggleButtonGroupProps,
} from "react-aria-components";

import "./ToggleButtonGroup.css";

export default function ToggleButtonGroup({
  children,
  ...props
}: ToggleButtonGroupProps) {
  return (
    <ReactAriaToggleButtonGroup
      className="bcds-react-aria-ToggleButtonGroup"
      {...props}
    >
      {children}
    </ReactAriaToggleButtonGroup>
  );
}
