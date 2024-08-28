import { useState } from "react";
import {
  TextField as ReactAriaTextField,
  TextFieldProps as ReactAriaTextFieldProps,
  TextArea as ReactAriaTextArea,
  Label,
  FieldError,
  Text,
  ValidationResult,
} from "react-aria-components";

import "./TextArea.css";
import SvgExclamationIcon from "../Icons/SvgExclamationIcon";

export interface TextAreaProps extends ReactAriaTextFieldProps {
  /* Sets text label above text input field */
  label?: string;
  /* Sets optional description text below text input field */
  description?: string;
  /* Used for data validation and error handling */
  errorMessage?: string | ((validation: ValidationResult) => string);
  /* Styling for required input indicator */
  requiredConvention?: "text" | "asterisk";
}

function getRequiredIndicator(requiredConvention: string) {
  switch (requiredConvention) {
    case "text":
      return "(required)";
    case "asterisk":
      return (
        <span className="requiredIcon" aria-label="Required">
          *
        </span>
      );
    default:
      return;
  }
}

export default function TextArea({
  label,
  description,
  errorMessage,
  maxLength,
  onChange,
  value,
  requiredConvention = "text",
  ...props
}: TextAreaProps) {
  // handler for character counter, displayed when a maxLength is set
  const [charCount, setCharCount] = useState(value ? value.length : 0);

  function handleChange(text: string) {
    if (onChange) onChange(text);
    setCharCount(text.length);
  }

  return (
    <ReactAriaTextField className={`bcds-react-aria-TextArea`} {...props}>
      {({ isRequired, isInvalid }) => (
        <>
          {label && (
            <Label className="bcds-react-aria-TextArea--Label">
              {label} {isRequired && getRequiredIndicator(requiredConvention)}
            </Label>
          )}
          <div className="bcds-react-aria-TextArea--Container">
            <ReactAriaTextArea
              className="bcds-react-aria-TextArea--Input"
              value={value}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
          {description || maxLength ? (
            <div className="bcds-react-aria-TextArea--Description">
              {description && (
                <Text slot="description" className="text">
                  {description}
                </Text>
              )}
              {maxLength && (
                <div className="counter">
                  {charCount}/{maxLength}
                </div>
              )}
            </div>
          ) : null}
          {isInvalid && (
            <div className="bcds-react-aria-TextArea--Error">
              <SvgExclamationIcon />
              <FieldError>{errorMessage}</FieldError>
            </div>
          )}
        </>
      )}
    </ReactAriaTextField>
  );
}
