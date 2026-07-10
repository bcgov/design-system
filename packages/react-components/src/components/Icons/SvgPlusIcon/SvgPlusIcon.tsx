/* This component implements the Plus icon from Font Awesome: https://fontawesome.com/icons/plus */

import { useId } from "react-aria/useId";
import getIconSize, { IconSize } from "../../../hooks/getIconSize";

export interface SvgPlusIconProps extends React.SVGProps<SVGSVGElement> {
  size?: IconSize;
  /** Accessible label for non-decorative usage. When omitted, the icon is hidden from assistive technology. */
  title?: string;
}

export default function SvgPlusIcon({
  size = "medium",
  title,
  id,
  ...props
}: SvgPlusIconProps) {
  const iconSize = getIconSize(size);
  const titleId = useId();
  const isMeaningful = Boolean(title);
  return (
    <svg
      id={id}
      width={iconSize}
      height={iconSize}
      viewBox="0 0 640 640"
      xmlns="http://www.w3.org/2000/svg"
      role={isMeaningful ? "img" : undefined}
      aria-labelledby={isMeaningful ? titleId : undefined}
      aria-hidden={isMeaningful ? undefined : true}
      focusable="false"
      {...props}
    >
      {title && <title id={titleId}>{title}</title>}
      <path
        d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"
        fill="currentColor"
      />
    </svg>
  );
}
