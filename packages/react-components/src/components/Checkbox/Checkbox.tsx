import {
  Checkbox as ReactAriaCheckbox,
  CheckboxProps as ReactAriaCheckboxProps,
} from "react-aria-components";

import "./Checkbox.css";

export interface CheckboxProps extends ReactAriaCheckboxProps {}

export default function Checkbox({ ...props }: CheckboxProps) {
  return (
    <ReactAriaCheckbox
      className="bcds-react-aria-Checkbox"
      {...props}
    ></ReactAriaCheckbox>
  );
}
