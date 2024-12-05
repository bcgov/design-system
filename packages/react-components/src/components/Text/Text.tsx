import { Text as ReactAriaText, TextProps } from "react-aria-components";

export default function Text(props: TextProps) {
  return <ReactAriaText {...props}>{props.children}</ReactAriaText>;
}
