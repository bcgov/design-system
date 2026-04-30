/* This component implements the Chevron Up icon from Font Awesome: https://fontawesome.com/icons/chevron-up */
import { SVGProps } from "react";
import { IconSize, useIconSize } from "../../../hooks/useIconSize";

interface SvgChevronUpIconProps extends SVGProps<SVGSVGElement> {
  /* Accessible title for icon, aria-hidden set if not provided */
  title?: string;
  /** Width and height of the placeholder icon, defaults to medium (20px) */
  size?: IconSize;
}

export default function SvgChevronUpIcon({
  title,
  id,
  size = "medium",
  role = "img",
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...props
}: SvgChevronUpIconProps) {
  const iconSize = useIconSize(size);
  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-hidden={title || ariaLabel || ariaLabelledBy ? undefined : "true"}
      role={role}
      focusable="false"
      {...props}
    >
      {title && <title>{title}</title>}
      <path
        d="M4.21231 13.3146L9.52695 8.2226C9.6939 8.08348 9.86086 8 10.0278 8C10.1948 8 10.3339 8.05565 10.473 8.16695L15.7876 13.259C16.066 13.5372 16.066 13.9546 15.8155 14.2051C15.5651 14.4833 15.1477 14.4833 14.8694 14.2329L10.0278 9.61387L5.13054 14.2885C4.88011 14.539 4.43491 14.539 4.18448 14.2607C3.93405 13.9825 3.93405 13.5651 4.21231 13.3146Z"
        fill="currentColor"
      />
    </svg>
  );
}
