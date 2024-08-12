import "./ButtonGroup.css";

export interface ButtonGroupProps extends React.PropsWithChildren {
  /* Sets layout of button group */
  orientation?: "horizontal" | "vertical";
  /* Sets alignment of button group */
  alignment?: "start" | "center" | "end";
  /* Semantic label for button group */
  "aria-label"?: string | undefined;
}

export default function ButtonGroup({
  orientation = "horizontal",
  alignment = "start",
  children,
  ...props
}: ButtonGroupProps) {
  return (
    <div
      className={`bcds-ButtonGroup ${orientation} ${alignment}`}
      role="group"
      {...props}
    >
      {children}
    </div>
  );
}
