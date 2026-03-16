import {
  MenuItem as ReactAriaMenuItem,
  MenuItemProps as ReactAriaMenuItemProps,
  MenuItemRenderProps,
} from "react-aria-components";
import SvgChevronRightIcon from "../Icons/SvgChevronRightIcon";

import "./MenuItem.css";

export interface MenuItemProps extends ReactAriaMenuItemProps {
  size?: "small" | "medium";
  iconLeft?: React.ReactElement;
  children?:
    | React.ReactNode
    | ((
        props: MenuItemRenderProps & { defaultChildren: React.ReactNode },
      ) => React.ReactNode);
}

export default function MenuItem({
  size = "medium",
  iconLeft,
  ...props
}: MenuItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined);

  return (
    <ReactAriaMenuItem
      {...props}
      textValue={textValue}
      className={`bcds-react-aria-Menu-Item ${size}`}
    >
      {(
        renderProps: MenuItemRenderProps & { defaultChildren: React.ReactNode },
      ) => {
        if (typeof props.children === "function") {
          return props.children(renderProps);
        }
        return (
          <>
            {iconLeft && iconLeft}
            {props.children}
            {renderProps.hasSubmenu && <SvgChevronRightIcon />}
          </>
        );
      }}
    </ReactAriaMenuItem>
  );
}
