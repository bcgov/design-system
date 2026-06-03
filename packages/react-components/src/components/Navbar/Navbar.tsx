import React from "react";
import Button from "../Button";
import Link from "../Link";
import Separator from "../Separator";

import "./Navbar.css";

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  size?: "small" | "medium";
  orientation?: "horizontal" | "vertical";
}

type NavbarSize = NonNullable<NavbarProps["size"]>;

/* Pass size prop down to expected child component types */
const sizableChildTypes = [Button, Link] as const;

function injectSizeToKnownChild(child: React.ReactNode, size: NavbarSize) {
  if (!React.isValidElement(child)) {
    return child;
  }

  if (
    !sizableChildTypes.includes(
      child.type as (typeof sizableChildTypes)[number]
    )
  ) {
    return child;
  }

  return React.cloneElement(
    child as React.ReactElement<{ size?: NavbarSize }>,
    {
      size,
    }
  );
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
      injectSizeToKnownChild(child, size),
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
