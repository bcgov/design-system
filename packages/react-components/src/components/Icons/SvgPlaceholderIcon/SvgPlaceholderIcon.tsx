import { useId } from "react";
import getIconSize, { IconSize } from "../../../hooks/getIconSize";

export interface SvgPlaceholderIconProps extends React.SVGProps<SVGSVGElement> {
  size?: IconSize;
  /** Accessible label for non-decorative usage. When omitted, the icon is hidden from assistive technology. */
  title?: string;
}

export default function SvgPlaceholderIcon({
  size = "medium",
  title,
  id,
  ...props
}: SvgPlaceholderIconProps) {
  const iconSize = getIconSize(size);
  const titleId = useId();
  const isMeaningful = Boolean(title);
  return (
    <svg
      id={id}
      width={iconSize}
      height={iconSize}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={isMeaningful ? "img" : undefined}
      aria-labelledby={isMeaningful ? titleId : undefined}
      aria-hidden={isMeaningful ? undefined : true}
      focusable="false"
      {...props}
    >
      {title && <title id={titleId}>{title}</title>}
      <g id="20px/Icon placeholder" clipPath="url(#clip0_717_6325)">
        <path
          id="Icon"
          d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 9.99996C18.3333 5.39759 14.6023 1.66663 9.99996 1.66663C5.39759 1.66663 1.66663 5.39759 1.66663 9.99996C1.66663 14.6023 5.39759 18.3333 9.99996 18.3333Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_717_6325">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
