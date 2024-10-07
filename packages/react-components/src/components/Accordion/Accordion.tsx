import {
  Button as ReactAriaButton,
  UNSTABLE_Disclosure as Disclosure,
  UNSTABLE_DisclosurePanel as DisclosurePanel,
  DisclosureProps as DisclosureProps,
} from "react-aria-components";

import "./Accordion.css";
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
      <ReactAriaButton className="bcds-Accordion--Button" slot="trigger">
        {label}
        <SvgChevronDownIcon />
      </ReactAriaButton>
      <DisclosurePanel className="bcds-Accordion--Panel">
        <>{children}</>
      </DisclosurePanel>
    </Disclosure>
  );
}
