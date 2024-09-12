import {
  Form as ReactAriaForm,
  FormProps as ReactAriaFormProps,
} from "react-aria-components";

export default function Form({ ...props }: ReactAriaFormProps) {
  return <ReactAriaForm {...props} />;
}
