import { useId } from "react";

export interface SvgTooltipArrowUpProps extends React.SVGProps<SVGSVGElement> {
  /** Accessible label for non-decorative usage. When omitted, the icon is hidden from assistive technology. */
  title?: string;
}

export default function SvgTooltipArrowUp({
  title,
  id,
  ...props
}: SvgTooltipArrowUpProps) {
  const titleId = useId();
  const isMeaningful = Boolean(title);
  return (
    <svg
      id={id}
      width="19"
      height="9"
      viewBox="0 0 19 9"
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
          d="M8.4188 1.41421C9.19985 0.633163 10.4662 0.633165 11.2472 1.41421L18.833 9L0.833008 9L8.4188 1.41421Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
