import React from "react";
import Separator from "../Separator";

import "./Subheader.css";

export interface SubheaderProps extends React.HTMLAttributes<HTMLElement> {
  /* Set vertical padding and gap size */
  size?: "small" | "medium";
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
  const childrenToRender = childrenArray.flatMap((child, index) => [
    <li className="bcds-react-aria-Subheader--Item" key={`item-${index}`}>
      {child}
    </li>,
    ...(index < childrenArray.length - 1
      ? [
          <li
            className="bcds-react-aria-Subheader--Separator"
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
    <div className="bcds-react-aria-Subheader">
      <nav
        className={`bcds-react-aria-Subheader--Container ${size}`}
        aria-label={ariaLabel}
        {...props}
      >
        <ul className="bcds-react-aria-Subheader--List">{childrenToRender}</ul>
      </nav>
    </div>
  );
}
