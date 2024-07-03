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

/* Icon displayed when input is in invalid state */
const iconError = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="20px/Error icon">
      <path
        id="Icon"
        d="M17.835 15.0312C18.335 15.9062 17.71 17 16.6787 17H3.33499C2.30374 17 1.67874 15.9062 2.14749 15.0312L8.83499 3.65625C9.11624 3.21875 9.55373 3 10.0225 3C10.46 3 10.8975 3.21875 11.1787 3.65625L17.835 15.0312ZM3.64749 15.5H16.3663L9.99123 4.65625L3.64749 15.5ZM10.0225 12.5625C10.5537 12.5625 10.9912 13 10.9912 13.5312C10.9912 14.0625 10.5537 14.5 10.0225 14.5C9.45998 14.5 9.02249 14.0625 9.02249 13.5312C9.02249 13 9.45998 12.5625 10.0225 12.5625ZM9.27249 7.75C9.27249 7.34375 9.58498 7 10.0225 7C10.4287 7 10.7725 7.34375 10.7725 7.75V10.75C10.7725 11.1875 10.4287 11.5 10.0225 11.5C9.58498 11.5 9.27249 11.1875 9.27249 10.75V7.75Z"
        fill="var(--icons-color-danger)"
      />
    </g>
  </svg>
);

export default function TextArea({
  label,
  description,
  errorMessage,
  maxLength,
  ...props
}: TextAreaProps) {
  return (
    <ReactAriaTextField className="bcds-react-aria-TextArea" {...props}>
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
          <div className={`bcds-react-aria-TextArea--container`}>
            {isInvalid && iconError}
            <ReactAriaTextArea className="bcds-react-aria-TextArea--Input" />
          </div>
          {description && (
            <Text
              slot="description"
              className={`bcds-react-aria-TextArea--Description`}
            >
              {description}
              {maxLength && (
                <span className="bcds-react-aria-TextArea--Counter">
                  Counter/{maxLength}
                </span>
              )}
            </Text>
          )}
          <FieldError className="bcds-react-aria-TextArea--Error">
            {errorMessage}
          </FieldError>
        </>
      )}
    </ReactAriaTextField>
  );
}
