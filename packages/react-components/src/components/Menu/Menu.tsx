import {
  MenuTrigger,
  Menu as ReactAriaMenu,
  MenuProps as ReactAriaMenuProps,
  MenuSection,
  Header as MenuSectionHeader,
  SubmenuTrigger,
} from "react-aria-components";

import MenuItem from "../MenuItem/MenuItem";
import { MenuItemProps } from "../MenuItem/MenuItem";
import Popover from "../Popover";

import "./Menu.css";

export interface MenuProps<
  T extends MenuItemProps,
> extends ReactAriaMenuProps<T> {
  size?: "small" | "medium";
}

export default function Menu<T extends MenuItemProps>({
  size = "medium",
  items,
  children,
  ...props
}: MenuProps<T>) {
  return (
    <Popover>
      <ReactAriaMenu
        className={`bcds-react-aria-Menu ${size}`}
        {...props}
        items={items}
      >
        {items ? (item: T) => <MenuItem size={size} {...item} /> : children}
      </ReactAriaMenu>
    </Popover>
  );
}

export { MenuTrigger, SubmenuTrigger, MenuSection, MenuSectionHeader };
