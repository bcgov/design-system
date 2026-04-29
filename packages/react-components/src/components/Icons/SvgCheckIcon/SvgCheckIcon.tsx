/* This component implements the Check icon from Font Awesome: https://fontawesome.com/icons/check */
import { SVGProps } from "react";

interface SvgBcOutlineIconProps extends SVGProps<SVGSVGElement> {
  /* Accessible title for icon, aria-hidden set if not provided */
  title?: string;
}

export default function SvgCheckIcon({
  title,
  id,
  role = "img",
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...props
}: SvgBcOutlineIconProps) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 512 512"
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
      <g>
        <path
          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
