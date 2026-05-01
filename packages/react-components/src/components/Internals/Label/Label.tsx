import { Label as ReactAriaLabel, LabelProps } from "react-aria-components";

import "./Label.css";

export default function Label({
  children,
  isRequired,
  ...props
}: LabelProps & { isRequired?: boolean }) {
  return (
    <ReactAriaLabel className="bcds-react-aria-Label" {...props}>
      {children}
      {isRequired && (
        <span className="bcds-react-aria-TextField--Label required">
          (required)
        </span>
      )}
    </ReactAriaLabel>
  );
}
