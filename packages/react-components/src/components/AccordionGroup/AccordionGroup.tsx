import {
  UNSTABLE_DisclosureGroup as DisclosureGroup,
  DisclosureGroupProps,
} from "react-aria-components";

import "./AccordionGroup.css";

export interface AccordionGroupProps extends DisclosureGroupProps {
  title?: string;
  titleElement?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function AccordionGroup({
  title,
  titleElement,
  children,
  ...props
}: AccordionGroupProps) {
  function getTitle() {
    switch (titleElement) {
      case "h1":
        return <h1>{title}</h1>;
      case "h2":
        return <h2>{title}</h2>;
      case "h3":
        return <h3>{title}</h3>;
      case "h4":
        return <h4>{title}</h4>;
      case "h5":
        return <h5>{title}</h5>;
      case "h6":
        return <h6>{title}</h6>;
      default:
        return <span>{title}</span>;
    }
  }
  return (
    <>
      {title && (
        <div className="bcds-react-aria-DisclosureGroup--Title">
          {getTitle()}
        </div>
      )}
      <DisclosureGroup className="bcds-react-aria-DisclosureGroup" {...props}>
        {children}
      </DisclosureGroup>
    </>
  );
}
