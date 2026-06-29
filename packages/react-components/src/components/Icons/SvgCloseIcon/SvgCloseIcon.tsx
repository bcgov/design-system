/* This component implements the X Mark icon from Font Awesome: https://fontawesome.com/icons/xmark */

import { useId } from "react";
import getIconSize, { IconSize } from "../../../hooks/getIconSize";

export interface SvgCloseIconProps extends React.SVGProps<SVGSVGElement> {
  size?: IconSize;
  /** Accessible label for non-decorative usage. When omitted, the icon is hidden from assistive technology. */
  title?: string;
}

export default function SvgCloseIcon({
  size = "medium",
  title,
  id,
  ...props
}: SvgCloseIconProps) {
  const iconSize = getIconSize(size);
  const titleId = useId();
  const isMeaningful = Boolean(title);
  return (
    <svg
      id={id}
      width={iconSize}
      height={iconSize}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      role={isMeaningful ? "img" : undefined}
      aria-labelledby={isMeaningful ? titleId : undefined}
      aria-hidden={isMeaningful ? undefined : true}
      focusable="false"
      {...props}
    >
      {title && <title id={titleId}>{title}</title>}
      <g>
        <path
          d="M16 5.21286L14.7871 4L10 8.78714L5.21286 4L4 5.21286L8.78714 10L4 14.7871L5.21286 16L10 11.2129L14.7871 16L16 14.7871L11.2129 10L16 5.21286Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
