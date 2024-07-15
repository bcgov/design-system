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
  ...props
}: TextAreaProps) {
  return (
    <ReactAriaTextField className={`bcds-react-aria-TextArea`} {...props}>
      {({ isRequired }) => (
        <>
          {label && (
            <Label className={`bcds-react-aria-TextArea--Label`}>
              {label}
              {isRequired && (
                <span className={`bcds-react-aria-TextArea--Label required`}>
                  (required)
                </span>
              )}
            </Label>
          )}
          <div className={`bcds-react-aria-TextArea--Container`}>
            <ReactAriaTextArea className={`bcds-react-aria-TextArea--Input`} />
          </div>
          {description || maxLength ? (
            <div className={`bcds-react-aria-TextArea--Description`}>
              {description && (
                <Text
                  slot="description"
                  className={`bcds-react-aria-TextArea--Description text`}
                >
                  {description}
                </Text>
              )}
              {maxLength && (
                <div
                  className={`bcds-react-aria-TextArea--Description counter`}
                >
                  Counter/{maxLength}
                </div>
              )}
            </div>
          ) : null}
          <FieldError className={`bcds-react-aria-TextArea--Error`}>
            {errorMessage}
          </FieldError>
        </>
      )}
    </ReactAriaTextField>
  );
}
