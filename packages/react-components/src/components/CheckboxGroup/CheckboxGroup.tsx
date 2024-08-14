import {
  CheckboxGroup as ReactAriaCheckboxGroup,
  CheckboxGroupProps as ReactAriaCheckboxGroupProps,
} from "react-aria-components";

import { Checkbox } from "@/components";

export interface CheckboxGroupProps extends ReactAriaCheckboxGroupProps {}

export default function CheckboxGroup({ ...props }: CheckboxGroupProps) {
  return (
    <ReactAriaCheckboxGroup
      className="bcds-react-aria-CheckboxGroup"
      {...props}
    ></ReactAriaCheckboxGroup>
  );
}
