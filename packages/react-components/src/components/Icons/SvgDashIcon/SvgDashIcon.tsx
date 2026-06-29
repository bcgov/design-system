import { useId } from "react";

export interface SvgDashIconProps extends React.SVGProps<SVGSVGElement> {
  /** Accessible label for non-decorative usage. When omitted, the icon is hidden from assistive technology. */
  title?: string;
}

export default function SvgDashIcon({ title, id, ...props }: SvgDashIconProps) {
  const titleId = useId();
  const isMeaningful = Boolean(title);
  return (
    <svg
      id={id}
      width="8"
      height="10"
      viewBox="0 0 8 2"
      xmlns="http://www.w3.org/2000/svg"
      role={isMeaningful ? "img" : undefined}
      aria-labelledby={isMeaningful ? titleId : undefined}
      aria-hidden={isMeaningful ? undefined : true}
      focusable="false"
      {...props}
    >
      {title && <title id={titleId}>{title}</title>}
      <path
        d="M6.99005 1.96004H1.01005C0.479855 1.96004 0.0500488 1.53023 0.0500488 1.00004C0.0500488 0.469846 0.479855 0.0400391 1.01005 0.0400391H6.99005C7.52024 0.0400391 7.95005 0.469846 7.95005 1.00004C7.95005 1.53023 7.52024 1.96004 6.99005 1.96004H6.99005Z"
        fill="currentColor"
      />
    </svg>
  );
}
