import {
  DateField as ReactAriaDateField,
  DateFieldProps as ReactAriaDateFieldProps,
  DateInput,
  DateSegment,
  DateValue,
  FieldError,
  ValidationResult,
} from "react-aria-components";

import "./DateField.css";
import SvgExclamationIcon from "../Icons/SvgExclamationIcon";

export interface DateFieldProps<T extends DateValue>
  extends ReactAriaDateFieldProps<T> {
  size?: "medium" | "small";
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export type { DateValue };

export default function DateField<T extends DateValue>({
  size = "medium",
  label,
  description,
  errorMessage,
  isRequired = false,
  ...props
}: DateFieldProps<T>) {
  return (
    <ReactAriaDateField
      className={`bcds-react-aria-DateField ${size}`}
      {...props}
    >
      {({ isInvalid }) => (
        <>
          {label && (
            <label className="bcds-react-aria-DateField--Label">
              {label}
              {isRequired && (
                <span className="bcds-react-aria-DateField--Label required">
                  (required)
                </span>
              )}
            </label>
          )}
          <div className="bcds-react-aria-DateField--Group">
            <DateInput className="bcds-react-aria-DateField--Input">
              {(segment) => (
                <DateSegment
                  className="bcds-react-aria-DateField--Segment"
                  segment={segment}
                />
              )}
            </DateInput>
            {isInvalid && <SvgExclamationIcon />}
          </div>
          {description && (
            <div className="bcds-react-aria-DateField--Description">
              {description}
            </div>
          )}
          <FieldError className="bcds-react-aria-DateField--Error">
            {errorMessage}
          </FieldError>
        </>
      )}
    </ReactAriaDateField>
  );
}
