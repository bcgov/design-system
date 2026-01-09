import {
  ToggleButtonGroup as ReactAriaToggleButtonGroup,
  ToggleButtonGroupProps as ReactAriaToggleButtonGroupProps,
  Text,
  SelectionIndicator,
  composeRenderProps,
} from "react-aria-components";
import { Children, cloneElement, isValidElement, ReactElement } from "react";
import { ToggleButtonProps } from "../ToggleButton/ToggleButton";

import "./ToggleButtonGroup.css";

export interface ToggleButtonGroupProps
  extends ReactAriaToggleButtonGroupProps {
  label?: string;
  size?: "small" | "medium";
}

export default function ToggleButtonGroup({
  label,
  size = "medium",
  children,
  ...props
}: ToggleButtonGroupProps) {
  const ToggleButtonChildren = Children.map(
    children as React.ReactNode,
    (child) => {
      if (isValidElement(child)) {
        return cloneElement(child as ReactElement<ToggleButtonProps>, {
          children: composeRenderProps(
            (child as ReactElement<ToggleButtonProps>).props.children,
            (children) => (
              <>
                <SelectionIndicator
                  className="bcds-react-aria-ToggleButton--SelectionIndicator"
                  data-selected
                />
                <span>{children}</span>
              </>
            )
          ),
        });
      }
      return child;
    }
  );

  return (
    <>
      {label && (
        <Text className="bcds-react-aria-ToggleButtonGroup--Label">
          {label}
        </Text>
      )}
      <ReactAriaToggleButtonGroup
        className={`bcds-react-aria-ToggleButtonGroup ${
          size === "small" ? "small" : "medium"
        }`}
        {...props}
      >
        {ToggleButtonChildren as React.ReactNode}
      </ReactAriaToggleButtonGroup>
    </>
  );
}
