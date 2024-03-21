import React from "react";
import {
  OverlayArrow,
  Tooltip as ReactAriaTooltip,
  TooltipProps,
  TooltipTrigger,
} from "react-aria-components";

import "./Tooltip.css";

// This tooltip arrow is available as a plain SVG at src/assets/tooltip-arrow-up.svg
function SvgTooltipArrowUp() {
  return (
    <svg
      width="19"
      height="9"
      viewBox="0 0 19 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.4188 1.41421C9.19985 0.633163 10.4662 0.633165 11.2472 1.41421L18.833 9L0.833008 9L8.4188 1.41421Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Tooltip({
  children,
  ...props
}: React.PropsWithChildren<TooltipProps>) {
  return (
    <ReactAriaTooltip className="bcds-react-aria-Tooltip" {...props}>
      <OverlayArrow className="bcds-react-aria-OverlayArrow">
        {/* Up arrow gets rotated by CSS depending on `data-placement` attribute */}
        <SvgTooltipArrowUp />
      </OverlayArrow>
      {children}
    </ReactAriaTooltip>
  );
}

export { TooltipTrigger };
