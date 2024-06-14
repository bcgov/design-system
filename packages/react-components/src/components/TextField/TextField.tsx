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
}

export default function TextField({
  size = "medium",
  label = "Label",
  description = "Description or helper text",
  errorMessage = "Error message",
  ...props
}: TextFieldProps) {
  return (
    <ReactAriaTextField
      className={`bcds-react-aria-TextField ${size}`}
      {...props}
    >
      <Label className="bcds-react-aria-TextField--Label">{label}</Label>
      <Input className="bcds-react-aria-TextField--Input" />
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </ReactAriaTextField>
  );
}
