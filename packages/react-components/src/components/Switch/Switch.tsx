import {
  Switch as ReactAriaSwitch,
  SwitchProps as ReactAriaSwitchProps,
} from "react-aria-components";

import "./Switch.css";

export interface SwitchProps extends ReactAriaSwitchProps {}

export default function Switch({ ...props }: SwitchProps) {
  return <ReactAriaSwitch className={`bcds-react-aria-Switch`} {...props} />;
}
