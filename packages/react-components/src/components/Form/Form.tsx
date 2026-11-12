import type { JSX } from "react";
import {
  Form as ReactAriaForm,
  FormProps as ReactAriaFormProps,
} from "react-aria-components";

export default function Form({ ...props }: ReactAriaFormProps): JSX.Element {
  return <ReactAriaForm {...props} />;
}
