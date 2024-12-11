import {
  Heading as ReactAriaHeading,
  HeadingProps,
} from "react-aria-components";

import "./Heading.css";

export default function Heading(props: HeadingProps) {
  return <ReactAriaHeading className="bcds-react-aria-Heading" {...props} />;
}
