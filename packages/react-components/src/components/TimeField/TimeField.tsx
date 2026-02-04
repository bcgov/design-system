import {
  TimeField as ReactAriaTimeField,
  TimeFieldProps as ReactAriaTimeFieldProps,
  TimeValue,
  FieldError,
  Label,
  ValidationResult,
  DateInput,
  DateSegment,
} from "react-aria-components";

import "./TimeField.css";
import SvgExclamationIcon from "../Icons/SvgExclamationIcon";
import Text from "../Text";

export interface TimeFieldProps<T extends TimeValue> extends ReactAriaTimeFieldProps<T> {
  /* Sets size of text input field */
  size?: "medium" | "small";
  /* Sets text label above text input field */
  label?: string;
  /* Sets optional description text below text input field */
  description?: string;
  /* Used for data validation and error handling */
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export default function TimeField<T extends TimeValue>({size, label, description, errorMessage, isRequired, ...props}: TimeFieldProps<T>) {
  return (
    <ReactAriaTimeField className="bcds-react-aria-TimeField" {...props}>
      {({ isInvalid }) => (
        <>
          {label && (
            <Label className="bcds-react-aria-TimeField--Label">
              {label}
              {isRequired && (
                <span className="bcds-react-aria-TimeField--Label required">
                    (required)
                </span>
              )}
            </Label>
          )}
          <div
            className={`bcds-react-aria-TimeField--container ${size === "small" ? "small" : "medium"}`}
          >
            <DateInput className="bcds-react-aria-TimeField--Input">
              {(segment) => (
                <DateSegment
                  className="bcds-react-aria-TimeField--Segment"
                  segment={segment}
                />
              )}
            </DateInput>
            {isInvalid && <SvgExclamationIcon />}
          </div>
          {description && (
            <Text
                slot="description"
                className={`bcds-react-aria-TimeField--Description`}
            >
                {description}
            </Text>
          )}
          <FieldError className="bcds-react-aria-TimeField--Error">
            {errorMessage}
          </FieldError>
        </>
      )}
    </ReactAriaTimeField>
  );
}
