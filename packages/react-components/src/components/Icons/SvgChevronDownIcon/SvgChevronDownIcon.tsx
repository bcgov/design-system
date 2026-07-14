/* This component implements the Chevron Down icon from Font Awesome: https://fontawesome.com/icons/chevron-down */

import { useId } from "react-aria/useId";
import getIconSize, { IconSize } from "../../../utils/getIconSize";

export interface SvgChevronDownIconProps extends React.SVGProps<SVGSVGElement> {
  size?: IconSize;
  /** Accessible label for non-decorative usage. When omitted, the icon is hidden from assistive technology. */
  title?: string;
}

export default function SvgChevronDownIcon({
  size = "medium",
  title,
  id,
  ...props
}: SvgChevronDownIconProps) {
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
      <path
        d="M15.7882 9.15569L10.4858 14.236C10.3192 14.3748 10.1527 14.4303 10.0139 14.4303C9.84731 14.4303 9.68074 14.3748 9.54194 14.2637L4.21182 9.15569C3.9342 8.90584 3.9342 8.46167 4.18405 8.21182C4.4339 7.9342 4.87808 7.9342 5.12793 8.18405L10.0139 12.8479L14.872 8.18405C15.1219 7.9342 15.5661 7.9342 15.8159 8.21182C16.0658 8.46167 16.0658 8.90584 15.7882 9.15569Z"
        fill="currentColor"
      />
    </svg>
  );
}
