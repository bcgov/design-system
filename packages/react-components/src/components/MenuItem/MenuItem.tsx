import {
  MenuItem as ReactAriaMenuItem,
  MenuItemProps as ReactAriaMenuItemProps,
} from "react-aria-components";

import "./MenuItem.css";
import SvgChevronRightIcon from "../Icons/SvgChevronRightIcon";

export interface MenuItemProps extends ReactAriaMenuItemProps {
  size?: "small" | "medium";
}

export default function MenuItem({ size = "small", ...props }: MenuItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined);
  return (
    <ReactAriaMenuItem
      {...props}
      textValue={textValue}
      className={`bcds-react-aria-Menu-Item ${size}`}
    >
      {({ hasSubmenu }) => (
        <>
          {props.children}
          {hasSubmenu && <SvgChevronRightIcon />}
        </>
      )}
    </ReactAriaMenuItem>
  );
}
