import {
  TextField as ReactAriaTextField,
  TextFieldProps as ReactAriaTextFieldProps,
} from "react-aria-components";

import "./TextField.css";

export interface TextFieldProps extends ReactAriaTextFieldProps {
  /** Sets size of input field */
  size?: "medium" | "small";
}

export default function TextField({
  size = "medium",
  ...props
}: TextFieldProps) {
  return (
    <ReactAriaTextField
      className={`bcds-react-aria-TextField ${size}`}
      {...props}
    />
  );
}
