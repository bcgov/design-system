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

export interface MenuProps<T extends object> extends ReactAriaMenuProps<T> {
  size?: "small" | "medium";
}

export default function Menu<T extends object>({
  size = "medium",
  children,
  ...props
}: MenuProps<T>) {
  return (
    <Popover>
      <ReactAriaMenu className={`bcds-react-aria-Menu ${size}`} {...props}>
        {children}
      </ReactAriaMenu>
    </Popover>
  );
}

export { MenuTrigger, SubmenuTrigger, MenuSection, MenuSectionHeader };
