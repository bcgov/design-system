import {
  Form as ReactAriaForm,
  FormProps as ReactAriaFormProps,
} from "react-aria-components";

import "./Form.css";

export interface FormProps extends ReactAriaFormProps {
  /* CSS class applied to the <form> element */
  className?: string;
}

export default function Form({ ...props }: FormProps) {
  return <ReactAriaForm {...props} />;
}
