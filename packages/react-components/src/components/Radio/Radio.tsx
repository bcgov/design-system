import {
  Radio as ReactAriaRadio,
  RadioProps as ReactAriaRadioProps,
} from "react-aria-components";

import "./Radio.css";

export interface RadioProps extends ReactAriaRadioProps {}

export default function Radio({ value, children, ...props }: RadioProps) {
  return (
    <ReactAriaRadio className="bcds-react-aria-Radio" value={value} {...props}>
      {children}
    </ReactAriaRadio>
  );
}
