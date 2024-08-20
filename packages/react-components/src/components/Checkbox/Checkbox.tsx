import {
  Checkbox as ReactAriaCheckbox,
  CheckboxProps as ReactAriaCheckboxProps,
} from "react-aria-components";

import SvgCheckIcon from "../Icons/SvgCheckIcon";
import SvgDashIcon from "../Icons/SvgDashIcon";

import "./Checkbox.css";
import React from "react";

export interface CheckboxProps extends ReactAriaCheckboxProps {
  /* Unique identifier for checkbox */
  value?: string;
  /* Whether a checkbox is selected by default */
  defaultSelected?: boolean;
  /* Used to set label text */
  children: React.ReactNode;
}

export default function Checkbox({ value, children, ...props }: CheckboxProps) {
  return (
    <ReactAriaCheckbox
      className="bcds-react-aria-Checkbox"
      value={value}
      {...props}
    >
      {({ isRequired, isSelected, isIndeterminate }) => (
        <>
          <div className="checkbox">
            {isSelected && !isIndeterminate && <SvgCheckIcon />}
            {isIndeterminate && <SvgDashIcon />}
          </div>
          <span className="label">
            {children} {isRequired && "(required)"}
          </span>
        </>
      )}
    </ReactAriaCheckbox>
  );
}
