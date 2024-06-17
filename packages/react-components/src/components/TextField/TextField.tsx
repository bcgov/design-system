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
  /** Sets size of input field */
  size?: "medium" | "small";
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  /** Left icon slot in text input field */
  iconLeft?: React.ReactElement;
  /** Right icon slot in text input field */
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
