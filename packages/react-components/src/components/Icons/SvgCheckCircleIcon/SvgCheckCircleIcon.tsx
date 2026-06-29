/* This component implements the Circle Check icon from Font Awesome: https://fontawesome.com/icons/circle-check */

import { useId } from "react";
import getIconSize, { IconSize } from "../../../hooks/getIconSize";

export interface SvgCheckCircleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: IconSize;
  /** Accessible label for non-decorative usage. When omitted, the icon is hidden from assistive technology. */
  title?: string;
}

export default function SvgCheckCircleIcon({
  size = "medium",
  title,
  id,
  ...props
}: SvgCheckCircleIconProps) {
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
          d="M12.4688 7.46875C12.75 7.1875 13.2188 7.1875 13.5 7.5C13.8125 7.78125 13.8125 8.25 13.5 8.53125L9.5 12.5312C9.375 12.6875 9.1875 12.75 9 12.75C8.78125 12.75 8.59375 12.6875 8.4375 12.5312L6.4375 10.5312C6.125 10.25 6.125 9.78125 6.4375 9.46875C6.71875 9.1875 7.1875 9.1875 7.5 9.46875L9 10.9688L12.4688 7.46875ZM10 2C14.4062 2 18 5.59375 18 10C18 14.4375 14.4062 18 10 18C5.5625 18 2 14.4375 2 10C2 5.59375 5.5625 2 10 2ZM10 16.5C13.5625 16.5 16.5 13.5938 16.5 10C16.5 6.4375 13.5625 3.5 10 3.5C6.40625 3.5 3.5 6.4375 3.5 10C3.5 13.5938 6.40625 16.5 10 16.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
