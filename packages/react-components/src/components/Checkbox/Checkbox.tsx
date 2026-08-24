import {
  CheckboxButton,
  CheckboxField,
  CheckboxFieldProps,
  FieldError,
  Text,
  ValidationResult,
} from "react-aria-components";

import SvgCheckIcon from "../Icons/SvgCheckIcon";
import SvgDashIcon from "../Icons/SvgDashIcon";

import "./Checkbox.css";

export interface CheckboxProps extends CheckboxFieldProps {
  /* Sets optional description text below label */
  description?: string;
  /* Used for data validation and error handling */
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export default function Checkbox({
  value,
  children,
  description,
  errorMessage,
  ...props
}: CheckboxProps) {
  return (
    <CheckboxField
      className="bcds-react-aria-Checkbox"
      value={value}
      {...props}
    >
      <CheckboxButton className="bcds-react-aria-Checkbox--Button">
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
      {description && (
        <Text
          slot="description"
          className="bcds-react-aria-Checkbox--Description"
        >
          {description}
        </Text>
      )}
      <FieldError className="bcds-react-aria-Checkbox--Error">
        {errorMessage}
      </FieldError>
    </CheckboxField>
  );
}
