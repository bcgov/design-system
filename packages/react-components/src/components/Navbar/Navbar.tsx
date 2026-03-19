import React from "react";
import { Toolbar, ToolbarProps } from "react-aria-components";
import Separator from "../Separator";

import "./Navbar.css";

export interface NavbarProps extends ToolbarProps {
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
      <Toolbar
        className={`bcds-react-aria-Navbar--Container ${size}`}
        {...props}
      >
        {childrenToRender}
      </Toolbar>
    </div>
  );
}
