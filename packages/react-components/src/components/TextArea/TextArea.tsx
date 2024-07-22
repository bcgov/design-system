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
import SvgExclamationIcon from "../SvgExclamationIcon";

export interface TextAreaProps extends ReactAriaTextFieldProps {
  /* Sets text label above text input field */
  label?: string;
  /* Sets optional description text below text input field */
  description?: string;
  /* Used for data validation and error handling */
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export default function TextArea({
  label,
  description,
  errorMessage,
  maxLength,
  onChange,
  value,
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
              {label}
              {isRequired && (
                <span className="bcds-react-aria-TextArea--Label required">
                  (required)
                </span>
              )}
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
