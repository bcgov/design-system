import React from "react";
import { MenuTrigger } from "react-aria-components";
import Button from "../Button";
import Link from "../Link";
import Menu from "../Menu";
import Separator from "../Separator";

import "./Subheader.css";

export interface SubheaderProps extends React.HTMLAttributes<HTMLElement> {
  /* Set vertical padding and gap size, and set size of specific types of children */
  size?: "small" | "medium";
  ariaLabel?: string;
}

type SubheaderSize = NonNullable<SubheaderProps["size"]>;

/* Allowlist of components which will receive the size prop from Subheader */
const sizableChildTypes = [Button, Link, Menu] as const;

/* Allowlist of wrapper components whose children are recursively processed */
const transparentContainerTypes = [MenuTrigger] as const;

/* Clone children and inject size prop, recursing into transparent containers */
function injectSizeToKnownChild(child: React.ReactNode, size: SubheaderSize): React.ReactNode {
  if (!React.isValidElement(child)) {
    return child;
  }

  if (sizableChildTypes.includes(child.type as (typeof sizableChildTypes)[number])) {
    return React.cloneElement(
      child as React.ReactElement<{ size?: SubheaderSize }>,
      { size }
    );
  }

  if (transparentContainerTypes.includes(child.type as (typeof transparentContainerTypes)[number])) {
    const container = child as React.ReactElement<{ children?: React.ReactNode }>;
    return React.cloneElement(container, {
      children: React.Children.map(container.props.children, (nested) =>
        injectSizeToKnownChild(nested, size)
      ),
    });
  }

  return child;
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
      {injectSizeToKnownChild(child, size)}
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
