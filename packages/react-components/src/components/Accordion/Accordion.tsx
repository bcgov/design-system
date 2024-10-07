import {
  UNSTABLE_Disclosure as Disclosure,
  UNSTABLE_DisclosurePanel as DisclosurePanel,
  DisclosureProps as DisclosureProps,
} from "react-aria-components";

import "./Accordion.css";
import Button from "../Button";

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
    <Disclosure {...props}>
      <Button slot="trigger">{label}</Button>
      <DisclosurePanel>
        <>{children}</>
      </DisclosurePanel>
    </Disclosure>
  );
}
