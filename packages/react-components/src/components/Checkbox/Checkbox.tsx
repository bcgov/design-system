import {
  Checkbox as ReactAriaCheckbox,
  CheckboxProps as ReactAriaCheckboxProps,
} from "react-aria-components";

import SvgCheckIcon from "../Icons/SvgCheckIcon";
import SvgDashIcon from "../Icons/SvgDashIcon";

import "./Checkbox.css";
import React from "react";

export interface CheckboxProps extends ReactAriaCheckboxProps {
  children: React.ReactNode;
}

export default function Checkbox({ children, ...props }: CheckboxProps) {
  return (
    <ReactAriaCheckbox className="bcds-react-aria-Checkbox" {...props}>
      {({ isRequired, isSelected, isIndeterminate }) => (
        <>
          <div className="checkbox">
            {isSelected && <SvgCheckIcon />}
            {isIndeterminate && !isSelected && <SvgDashIcon />}
          </div>
          <span className="label">
            {children} {isRequired && "(required)"}
          </span>
        </>
      )}
    </ReactAriaCheckbox>
  );
}
