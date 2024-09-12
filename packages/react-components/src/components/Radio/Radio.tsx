import { Radio as ReactAriaRadio, RadioProps } from "react-aria-components";

import "./Radio.css";

export default function Radio({ value, children, ...props }: RadioProps) {
  return (
    <ReactAriaRadio className="bcds-react-aria-Radio" value={value} {...props}>
      {children}
    </ReactAriaRadio>
  );
}
