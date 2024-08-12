import "./ButtonGroup.css";

export interface ButtonGroupProps extends React.PropsWithChildren {
  /* Sets layout of button group */
  orientation?: "horizontal" | "vertical";
  /* Sets alignment of button group */
  alignment?: "start" | "center" | "end";
  /* Semantic label for button group */
  ariaLabel?: string | undefined;
}

export default function ButtonGroup({
  orientation = "horizontal",
  alignment = "start",
  ariaLabel,
  children,
  ...props
}: ButtonGroupProps) {
  return (
    <div
      className={`bcds-ButtonGroup ${orientation} ${alignment}`}
      role="group"
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </div>
  );
}
