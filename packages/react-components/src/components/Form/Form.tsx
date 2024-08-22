import {
  Form as ReactAriaForm,
  FormProps as ReactAriaFormProps,
} from "react-aria-components";

export type FormProps = ReactAriaFormProps;

export default function Form({ ...props }: FormProps) {
  return <ReactAriaForm {...props} />;
}
