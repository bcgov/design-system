import React from "react";
import Separator from "../Separator";

import "./Navbar.css";

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  size?: "small" | "medium";
}

export default function Navbar({
  size = "medium",
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
              orientation="vertical"
              size="small"
              key={`sep-${index}`}
            />,
          ]
        : []),
    ]);
  }

  return (
    <div className="bcds-react-aria-Navbar">
      <nav className={`bcds-react-aria-Navbar--Container ${size}`} {...props}>
        {childrenToRender}
      </nav>
    </div>
  );
}
