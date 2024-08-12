import "./ButtonGroup.css";

export interface ButtonGroupProps extends React.PropsWithChildren {
  /* Sets layout of button group */
  orientation?: "horizontal" | "vertical";
  /* Semantic label for button group */
  "aria-label"?: string | undefined;
}

export default function ButtonGroup({
  orientation,
  children,
  ...props
}: ButtonGroupProps) {
  return (
    <div className={`bcds-ButtonGroup ${orientation}`} role="group" {...props}>
      {children}
    </div>
  );
}
