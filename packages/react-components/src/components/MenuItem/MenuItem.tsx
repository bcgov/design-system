import {
  MenuItem as ReactAriaMenuItem,
  MenuItemProps as ReactAriaMenuItemProps,
  MenuItemRenderProps,
} from "react-aria-components";
import { ReactNode } from "react";
import "./MenuItem.css";
import SvgChevronRightIcon from "../Icons/SvgChevronRightIcon";

export interface MenuItemProps extends ReactAriaMenuItemProps {
  size?: "small" | "medium";
  children?:
    | ReactNode
    | ((
        props: MenuItemRenderProps & { defaultChildren: ReactNode }
      ) => ReactNode);
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
      {(renderProps: MenuItemRenderProps & { defaultChildren: ReactNode }) => {
        if (typeof props.children === "function") {
          return props.children(renderProps);
        }
        return (
          <>
            {props.children}
            {renderProps.hasSubmenu && <SvgChevronRightIcon />}
          </>
        );
      }}
    </ReactAriaMenuItem>
  );
}
