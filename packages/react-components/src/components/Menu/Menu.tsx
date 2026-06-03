import {
  MenuTrigger,
  Menu as ReactAriaMenu,
  MenuProps as ReactAriaMenuProps,
  MenuSection,
  Header as MenuSectionHeader,
  SubmenuTrigger,
  Popover,
  PopoverProps,
  Key,
  Collection,
} from "react-aria-components";
import { useRef } from "react";

import MenuItem, { MenuItemProps } from "../MenuItem/MenuItem";
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
  /* Set size of menu items (does not affect the MenuTrigger element) */
  itemSize?: "small" | "medium";
  /* Use for a simple list menu */
  items?: T[];
  /* Use for a sectioned list with `items` in each section */
  sections?: MenuSectionProps[];
  /* Popover position */
  placement?: PopoverProps["placement"];
}

export default function Menu<T extends MenuItemProps>({
  itemSize = "medium",
  children,
  items,
  sections,
  placement,
  ...props
}: MenuProps<T>) {
  // const menuScrollRef = useRef<HTMLDivElement | null>(null);

  /* Manual composition via children */
  if (children) {
    return (
      <Popover
        className="bcds-react-aria-Popover"
        placement={placement}
        // scrollRef={menuScrollRef}
      >
        <ReactAriaMenu
          // ref={menuScrollRef}
          className={`bcds-react-aria-Menu ${itemSize}`}
          items={items}
          {...props}
        >
          {children}
        </ReactAriaMenu>
      </Popover>
    );
  }
  /* Dynamic collection via items/sections props */
  const sectionsArray = sections?.length
    ? sections
    : [{ id: "section", header: "", items: items ? [...items] : [] }];

  const lastSectionId =
    sectionsArray.length > 0
      ? sectionsArray[sectionsArray.length - 1].id
      : undefined;

  return (
    <Popover
      className="bcds-react-aria-Popover"
      placement={placement}
      // scrollRef={menuScrollRef}
    >
      <ReactAriaMenu
        // ref={menuScrollRef}
        className={`bcds-react-aria-Menu ${itemSize}`}
        {...props}
        items={sectionsArray}
      >
        {(section: MenuSectionProps) => (
          <MenuSection key={section.id} id={section.id}>
            {section.header && (
              <MenuSectionHeader>{section.header}</MenuSectionHeader>
            )}
            <Collection items={section.items}>
              {(item: MenuItemProps) => (
                <MenuItem {...item} size={itemSize}>
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
