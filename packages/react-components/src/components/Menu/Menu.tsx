import {
  MenuTrigger,
  Menu as ReactAriaMenu,
  MenuProps as ReactAriaMenuProps,
  MenuSection,
  Header as MenuSectionHeader,
  SubmenuTrigger,
  Key,
  Collection,
} from "react-aria-components";

import MenuItem from "../MenuItem/MenuItem";
import { MenuItemProps } from "../MenuItem/MenuItem";
import Popover from "../Popover";

import "./Menu.css";

export interface MenuSectionProps {
  /* Unique identifier for the section */
  id: Key;
  /* Text label for the section */
  header?: string;
  /* Array of items in the section */
  items: MenuItemProps[];
}

export interface MenuProps<
  T extends MenuItemProps,
> extends ReactAriaMenuProps<T> {
  /* Set size of menu button and items */
  size?: "small" | "medium";
  /* Use for a section list with `items` in each section */
  sections?: MenuSectionProps[];
}

export default function Menu<T extends MenuItemProps>({
  size = "medium",
  children,
  items,
  sections,
  ...props
}: MenuProps<T>) {
  /* Manual composition via children */
  if (children) {
    return (
      <Popover>
        <ReactAriaMenu className={`bcds-react-aria-Menu ${size}`} {...props}>
          {children}
        </ReactAriaMenu>
      </Popover>
    );
  }
  /* Dynamic collection via items/sections props */
  return (
    <Popover>
      <ReactAriaMenu
        className={`bcds-react-aria-Menu ${size}`}
        {...props}
        items={
          sections
            ? sections
            : [{ id: "section", header: "", items: items ? [...items] : [] }]
        }
      >
        {(section: MenuSectionProps) => (
          <MenuSection key={section.id}>
            {section.header && (
              <MenuSectionHeader>{section.header}</MenuSectionHeader>
            )}
            <Collection items={section.items}>
              {(item: MenuItemProps) => <MenuItem {...item} size={size} />}
            </Collection>
          </MenuSection>
        )}
      </ReactAriaMenu>
    </Popover>
  );
}

export { MenuTrigger, SubmenuTrigger, MenuSection, MenuSectionHeader };
