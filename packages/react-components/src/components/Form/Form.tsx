import {
  Form as ReactAriaForm,
  FormProps as ReactAriaFormProps,
} from "react-aria-components";

import "./Form.css";

export interface FormProps extends ReactAriaFormProps {
  /* CSS class applied to the <form> element */
  className?: string;
  /* Defaults to native HTML validation */
  validationBehavior?: "aria" | "native";
}

export default function Form({ ...props }: FormProps) {
  return <ReactAriaForm validationBehavior="native" {...props} />;
}
