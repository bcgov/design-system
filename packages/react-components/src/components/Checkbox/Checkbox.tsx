import {
  CheckboxButton,
  CheckboxField,
  CheckboxFieldProps as ReactAriaCheckboxFieldProps,
  FieldError,
  Text,
  ValidationResult,
} from "react-aria-components";

import SvgCheckIcon from "../Icons/SvgCheckIcon";
import SvgDashIcon from "../Icons/SvgDashIcon";
import SvgExclamationIcon from "../Icons/SvgExclamationIcon";

import { composeRenderProps } from "react-aria-components/composeRenderProps";

import "./Checkbox.css";

export interface CheckboxProps extends ReactAriaCheckboxFieldProps {
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
      {({ isSelected, isInvalid, isRequired, isIndeterminate }) => (
        <>
          <CheckboxButton className="bcds-react-aria-Checkbox--Button">
            {composeRenderProps(children, (children) => (
              <>
                <div className="bcds-react-aria-Checkbox--Indicator">
                  {isSelected && !isIndeterminate && <SvgCheckIcon />}
                  {isIndeterminate && <SvgDashIcon />}
                </div>
                <span className="bcds-react-aria-Checkbox--Label">
                  <>{children}</> {isRequired && "(required)"}
                </span>
              </>
            ))}
          </CheckboxButton>
          {description && (
            <Text
              slot="description"
              className="bcds-react-aria-Checkbox--Description"
            >
              {description}
            </Text>
          )}
          {isInvalid && (
            <div className="bcds-react-aria-Checkbox--Error">
              <SvgExclamationIcon />
              <FieldError>{errorMessage}</FieldError>
            </div>
          )}
        </>
      )}
    </CheckboxField>
  );
}
