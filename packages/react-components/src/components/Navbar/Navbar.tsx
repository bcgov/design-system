import React from "react";
import Button from "../Button";
import Link from "../Link";
import Separator from "../Separator";

import "./Navbar.css";

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  /* Set vertical padding and gap size, and set size of specific types of children */
  size?: "small" | "medium";
  ariaLabel?: string;
}

type NavbarSize = NonNullable<NavbarProps["size"]>;

/* Allowlist of components which will receive the size prop from Navbar */
const sizableChildTypes = [Button, Link] as const;

/* Clone children and inject size prop */
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
  ariaLabel,
  children,
  ...props
}: NavbarProps) {
  /* Add separator between each child item */
  const childrenArray = React.Children.toArray(children);
  const childrenToRender = childrenArray.flatMap((child, index) => [
    <li className="bcds-react-aria-Navbar--Item" key={`item-${index}`}>
      {injectSizeToKnownChild(child, size)}
    </li>,
    ...(index < childrenArray.length - 1
      ? [
          <li
            className="bcds-react-aria-Navbar--Separator"
            key={`sep-${index}`}
            role="presentation"
            aria-hidden="true"
          >
            <Separator orientation="vertical" size="small" />
          </li>,
        ]
      : []),
  ]);

  return (
    <div className="bcds-react-aria-Navbar">
      <nav
        className={`bcds-react-aria-Navbar--Container ${size}`}
        aria-label={ariaLabel}
        {...props}
      >
        <ul className="bcds-react-aria-Navbar--List">{childrenToRender}</ul>
      </nav>
    </div>
  );
}
