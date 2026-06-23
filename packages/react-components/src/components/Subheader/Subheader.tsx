import React from "react";
import Separator from "../Separator";

import "./Subheader.css";

export interface SubheaderProps extends React.HTMLAttributes<HTMLElement> {
  /* Set vertical padding and gap size */
  size?: "small" | "medium";
  /* Accessible label for the navigation landmark */
  ariaLabel?: string;
}

export default function Subheader({
  size = "medium",
  ariaLabel,
  children,
  ...props
}: SubheaderProps) {
  /* Add separator between each child item */
  const childrenArray = React.Children.toArray(children);
  const childrenToRender = childrenArray.flatMap((child, index) => {
    const baseKey =
      React.isValidElement(child) && child.key != null ? child.key : index;

    return [
      <li className="bcds-Subheader--Item" key={`item-${String(baseKey)}`}>
        {child}
      </li>,
      ...(index < childrenArray.length - 1
        ? [
            <li
              className="bcds-Subheader--Separator"
              key={`sep-${String(baseKey)}`}
              role="presentation"
              aria-hidden="true"
            >
              <Separator orientation="vertical" size="small" />
            </li>,
          ]
        : []),
    ];
  });

  return (
    <div className="bcds-Subheader">
      <nav
        className={`bcds-Subheader--Container ${size}`}
        aria-label={ariaLabel}
        {...props}
      >
        <ul className="bcds-Subheader--List">{childrenToRender}</ul>
      </nav>
    </div>
  );
}
