import {
  Form as ReactAriaForm,
  FormProps as ReactAriaFormProps,
} from "react-aria-components";

import "./Form.css";

export interface FormProps extends ReactAriaFormProps {}

export default function Form({ ...props }: FormProps) {
  return <ReactAriaForm {...props} />;
}
