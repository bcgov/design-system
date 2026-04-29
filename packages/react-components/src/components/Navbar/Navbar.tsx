import React from "react";
import Separator from "../Separator";

import "./Navbar.css";

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  size?: "small" | "medium";
  orientation?: "horizontal" | "vertical";
}

export default function Navbar({
  size = "medium",
  orientation = "horizontal",
  children,
  ...props
}: NavbarProps) {
  let childrenToRender: typeof children;

  if (typeof children === "function") {
    childrenToRender = children;
  } else {
    const childrenArray = React.Children.toArray(children);
    childrenToRender = childrenArray.flatMap((child, index) => [
      child,
      ...(index < childrenArray.length - 1
        ? [
            <Separator
              orientation={
                orientation === "horizontal" ? "vertical" : "horizontal"
              }
              size="small"
              key={`sep-${index}`}
            />,
          ]
        : []),
    ]);
  }

  return (
    <div className="bcds-react-aria-Navbar">
      <nav
        className={`bcds-react-aria-Navbar--Container ${size} ${orientation}`}
        {...props}
      >
        {childrenToRender}
      </nav>
    </div>
  );
}
