import {
  UNSTABLE_Disclosure as Disclosure,
  UNSTABLE_DisclosurePanel as DisclosurePanel,
  DisclosureProps as DisclosureProps,
} from "react-aria-components";

import "./Accordion.css";
import Button from "../Button";
import SvgChevronUpIcon from "../Icons/SvgChevronUpIcon";
import SvgChevronDownIcon from "../Icons/SvgChevronDownIcon";

export interface AccordionProps extends DisclosureProps {
  /* Button label text */
  label?: string;
}

export default function Accordion({
  label,
  children,
  ...props
}: AccordionProps) {
  return (
    <Disclosure className="bcds-Accordion" {...props}>
      {({ isExpanded }) => (
        <>
          <Button
            className="bcds-Accordion--Button"
            size="small"
            variant="link"
            slot="trigger"
          >
            {label}
            {isExpanded ? <SvgChevronUpIcon /> : <SvgChevronDownIcon />}
          </Button>
          <DisclosurePanel className="bcds-Accordion--Panel">
            <>{children}</>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
