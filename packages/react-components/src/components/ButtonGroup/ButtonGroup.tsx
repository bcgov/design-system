import "./ButtonGroup.css";

export interface ButtonGroupProps extends React.PropsWithChildren {
  orientation?: "horizontal" | "vertical";
}

export default function ButtonGroup({ children, ...props }: ButtonGroupProps) {
  return (
    <div className="bcds-ButtonGroup" {...props}>
      {children}
    </div>
  );
}
