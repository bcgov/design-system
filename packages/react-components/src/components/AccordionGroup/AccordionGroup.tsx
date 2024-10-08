import {
  UNSTABLE_DisclosureGroup as DisclosureGroup,
  DisclosureGroupProps,
} from "react-aria-components";

import "./AccordionGroup.css";

export interface AccordionGroupProps extends DisclosureGroupProps {}

export default function AccordionGroup({
  children,
  ...props
}: AccordionGroupProps) {
  return (
    <DisclosureGroup className="bcds-AccordionGroup" {...props}>
      {children}
    </DisclosureGroup>
  );
}
