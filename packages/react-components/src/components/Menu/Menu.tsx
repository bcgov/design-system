import {
  MenuTrigger,
  Menu as ReactAriaMenu,
  MenuProps as ReactAriaMenuProps,
  MenuSection,
  Header as MenuSectionHeader,
  SubmenuTrigger,
} from "react-aria-components";

import Popover from "../Popover";
import "./Menu.css";

export default function Menu<T extends object>({
  children,
  ...props
}: ReactAriaMenuProps<T>) {
  return (
    <Popover>
      <ReactAriaMenu className="bcds-react-aria-Menu" {...props}>
        {children}
      </ReactAriaMenu>
    </Popover>
  );
}

export { MenuTrigger, SubmenuTrigger, MenuSection, MenuSectionHeader };
