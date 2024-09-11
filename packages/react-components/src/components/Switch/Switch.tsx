import {
  Switch as ReactAriaSwitch,
  SwitchProps as ReactAriaSwitchProps,
} from "react-aria-components";

import "./Switch.css";

export interface SwitchProps extends ReactAriaSwitchProps {
  /* Label positioning relative to switch */
  labelPosition?: "left" | "right";
}

export default function Switch({
  labelPosition = "right",
  children,
  ...props
}: SwitchProps) {
  return (
    <ReactAriaSwitch className={`bcds-react-aria-Switch`} {...props}>
      {labelPosition === "left" && <>{children}</>}
      <div className="indicator" />
      {labelPosition === "right" && <>{children}</>}
    </ReactAriaSwitch>
  );
}
