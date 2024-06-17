import {
  TextField as ReactAriaTextField,
  TextFieldProps as ReactAriaTextFieldProps,
  Input,
  Label,
  FieldError,
  Text,
  ValidationResult,
} from "react-aria-components";

import "./TextField.css";

export interface TextFieldProps extends ReactAriaTextFieldProps {
  /* Sets size of text input field */
  size?: "medium" | "small";
  /* Sets text label above text input field */
  label?: string;
  /* Sets optional description text below text input field */
  description?: string;
  /* Used for data validation and error handling */
  errorMessage?: string | ((validation: ValidationResult) => string);
  /* Icon slot to left of text input field */
  iconLeft?: React.ReactElement;
  /* Icon slot to right of text input field */
  iconRight?: React.ReactElement;
}

export default function TextField({
  size = "medium",
  label,
  description,
  errorMessage,
  iconLeft,
  iconRight,
  ...props
}: TextFieldProps) {
  return (
    <ReactAriaTextField className="bcds-react-aria-TextField" {...props}>
      {label && (
        <Label className="bcds-react-aria-TextField--Label">{label}</Label>
      )}
      <div className={`bcds-react-aria-TextField--container ${size}`}>
        {iconLeft}
        <Input className="bcds-react-aria-TextField--Input" />
        {iconRight}
      </div>
      {description && (
        <Text
          slot="description"
          className={`bcds-react-aria-TextField--Description`}
        >
          {description}
        </Text>
      )}
      <FieldError className="bcds-react-aria-TextField--Error">
        {errorMessage}
      </FieldError>
    </ReactAriaTextField>
  );
}
