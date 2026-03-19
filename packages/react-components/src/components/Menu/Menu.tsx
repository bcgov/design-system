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

import MenuItem, { MenuItemProps } from "../MenuItem/MenuItem";
import Popover, { PopoverProps } from "../Popover";
import Separator from "../Separator";

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
  /* Use for a simple list menu */
  items?: T[];
  /* Use for a sectioned list with `items` in each section */
  sections?: MenuSectionProps[];
  /* Popover position */
  placement?: PopoverProps["placement"];
}

export default function Menu<T extends MenuItemProps>({
  size = "medium",
  children,
  items,
  sections,
  placement,
  ...props
}: MenuProps<T>) {
  /* Manual composition via children */
  if (children) {
    return (
      <Popover placement={placement}>
        <ReactAriaMenu
          className={`bcds-react-aria-Menu ${size}`}
          items={items}
          {...props}
        >
          {children}
        </ReactAriaMenu>
      </Popover>
    );
  }
  /* Dynamic collection via items/sections props */
  const sectionsArray = sections
    ? sections
    : [{ id: "section", header: "", items: items ? [...items] : [] }];

  const lastSectionId = sectionsArray[sectionsArray.length - 1].id;

  return (
    <Popover placement={placement}>
      <ReactAriaMenu
        className={`bcds-react-aria-Menu ${size}`}
        {...props}
        items={sectionsArray}
      >
        {(section: MenuSectionProps) => (
          <MenuSection key={section.id}>
            {section.header && (
              <MenuSectionHeader>{section.header}</MenuSectionHeader>
            )}
            <Collection items={section.items}>
              {(item: MenuItemProps) => (
                <MenuItem {...item} size={size}>
                  {item.children}
                </MenuItem>
              )}
            </Collection>
            {section.id !== lastSectionId && <Separator size="small" />}
          </MenuSection>
        )}
      </ReactAriaMenu>
    </Popover>
  );
}

export { MenuTrigger, SubmenuTrigger, MenuSection, MenuSectionHeader };
