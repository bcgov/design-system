import {
  Checkbox as ReactAriaCheckbox,
  CheckboxProps,
  CheckboxRenderProps,
} from "react-aria-components";

import SvgCheckIcon from "../Icons/SvgCheckIcon";
import SvgDashIcon from "../Icons/SvgDashIcon";

import "./Checkbox.css";

export default function Checkbox({ value, children, ...props }: CheckboxProps) {
  return (
    <ReactAriaCheckbox
      className="bcds-react-aria-Checkbox"
      value={value}
      {...props}
    >
      {({ isRequired, isSelected, isIndeterminate }: CheckboxRenderProps) => (
        <>
          <div className="checkbox">
            {isSelected && !isIndeterminate && <SvgCheckIcon />}
            {isIndeterminate && <SvgDashIcon />}
          </div>
          <span className="label">
            <>{children}</> {isRequired && "(required)"}
          </span>
        </>
      )}
    </ReactAriaCheckbox>
  );
}
