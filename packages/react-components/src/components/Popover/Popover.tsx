import { Popover as ReactAriaPopover } from "react-aria-components";
import type { PopoverProps } from "react-aria-components";

import "./Popover.css";

export default function Popover(props: PopoverProps) {
  return (
    <ReactAriaPopover className="bcds-react-aria-Popover" {...props}>
      {props.children}
    </ReactAriaPopover>
  );
}
