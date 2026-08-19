import {
  CheckboxButton,
  CheckboxField,
  CheckboxFieldProps,
  FieldError,
  ValidationResult,
} from "react-aria-components";

import SvgCheckIcon from "../Icons/SvgCheckIcon";
import SvgDashIcon from "../Icons/SvgDashIcon";

import "./Checkbox.css";

export interface CheckboxProps extends CheckboxFieldProps {
  /* Sets text label for checkbox */
  children?: React.ReactNode;
  /* Sets optional description text below label */
  description?: string;
  /* Used for data validation and error handling */
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export default function Checkbox({
  value,
  children,
  errorMessage,
  ...props
}: CheckboxProps) {
  return (
    <CheckboxField value={value} {...props}>
      <CheckboxButton className="bcds-react-aria-Checkbox">
        {({ isRequired, isSelected, isIndeterminate }) => (
          <>
            <div className="bcds-react-aria-Checkbox--Indicator">
              {isSelected && !isIndeterminate && <SvgCheckIcon />}
              {isIndeterminate && <SvgDashIcon />}
            </div>
            <span className="bcds-react-aria-Checkbox--Label">
              <>{children}</> {isRequired && "(required)"}
            </span>
          </>
        )}
      </CheckboxButton>
      <FieldError>{errorMessage}</FieldError>
    </CheckboxField>
  );
}
