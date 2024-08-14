import {
  Checkbox as ReactAriaCheckbox,
  CheckboxProps as ReactAriaCheckboxProps,
} from "react-aria-components";

import SvgCheckIcon from "../Icons/SvgCheckIcon";

import "./Checkbox.css";
import React from "react";

export interface CheckboxProps extends ReactAriaCheckboxProps {
  children: React.ReactElement;
}

export default function Checkbox({ children, ...props }: CheckboxProps) {
  return (
    <ReactAriaCheckbox className="bcds-react-aria-Checkbox" {...props}>
      <div className="checkbox">
        <span className="icon">
          <SvgCheckIcon />
        </span>
      </div>
      <span className="label">{children}</span>
    </ReactAriaCheckbox>
  );
}
