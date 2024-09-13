import {
  OverlayArrow,
  Tooltip as ReactAriaTooltip,
  TooltipProps,
  TooltipTrigger,
} from "react-aria-components";

import "./Tooltip.css";
import SvgTooltipArrowUp from "../Icons/SvgTooltipArrowUp";

export default function Tooltip(props: TooltipProps) {
  return (
    <ReactAriaTooltip className="bcds-react-aria-Tooltip" {...props}>
      <OverlayArrow className="bcds-react-aria-OverlayArrow">
        {/* Up arrow gets rotated by CSS depending on `data-placement` attribute */}
        <SvgTooltipArrowUp />
      </OverlayArrow>
      <>{props.children}</>
    </ReactAriaTooltip>
  );
}

export { TooltipTrigger };
export type { TooltipProps };
