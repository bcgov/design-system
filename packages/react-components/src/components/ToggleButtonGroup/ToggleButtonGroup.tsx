import {
  ToggleButtonGroup as ReactAriaToggleButtonGroup,
  ToggleButtonGroupProps as ReactAriaToggleButtonGroupProps,
  Text,
} from "react-aria-components";

import "./ToggleButtonGroup.css";

export interface ToggleButtonGroupProps
  extends ReactAriaToggleButtonGroupProps {
  label?: string;
}

export default function ToggleButtonGroup({
  label,
  children,
  ...props
}: ToggleButtonGroupProps) {
  return (
    <>
      {label && (
        <Text className="bcds-react-aria-ToggleButtonGroup--Label">
          {label}
        </Text>
      )}
      <ReactAriaToggleButtonGroup
        className="bcds-react-aria-ToggleButtonGroup"
        {...props}
      >
        {children}
      </ReactAriaToggleButtonGroup>
    </>
  );
}
