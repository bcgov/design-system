import {
  MenuItem as ReactAriaMenuItem,
  MenuItemProps as ReactAriaMenuItemProps,
  MenuItemRenderProps,
  Text,
} from "react-aria-components";

import SvgCheckIcon from "../Icons/SvgCheckIcon";
import SvgChevronRightIcon from "../Icons/SvgChevronRightIcon";

import "./MenuItem.css";

export interface MenuItemProps extends ReactAriaMenuItemProps {
  label?: string;
  description?: string;
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
  label,
  description,
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
      className={`bcds-react-aria-MenuItem ${size}`}
    >
      {(
        renderProps: MenuItemRenderProps & { defaultChildren: React.ReactNode },
      ) => {
        if (typeof props.children === "function") {
          return props.children(renderProps);
        }
        return (
          <>
            {iconLeft && (
              <span className="bcds-react-aria-MenuItem--Icon">{iconLeft}</span>
            )}
            <div className="bcds-react-aria-MenuItem--Content">
              {props.children}
              {label && <Text slot="label">{label}</Text>}
              {description && <Text slot="description">{description}</Text>}
            </div>
            {renderProps.hasSubmenu && <SvgChevronRightIcon />}
            {renderProps.isSelected && <SvgCheckIcon />}
          </>
        );
      }}
    </ReactAriaMenuItem>
  );
}
