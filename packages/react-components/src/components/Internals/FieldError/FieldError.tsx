import {
  FieldError as ReactAriaFieldError,
  FieldErrorProps,
} from "react-aria-components";

import "./FieldError.css";

export default function FieldError({ children, ...props }: FieldErrorProps) {
  return (
    <ReactAriaFieldError className="bcds-react-aria-FieldError" {...props}>
      {children}
    </ReactAriaFieldError>
  );
}
