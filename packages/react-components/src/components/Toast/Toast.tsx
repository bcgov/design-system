import {
  UNSTABLE_Toast as ReactAriaToast,
  UNSTABLE_ToastContent as ReactAriaToastContent,
  ToastProps as ReactAriaToastProps,
} from "react-aria-components";

import Button from "../Button";
import Text from "../Text";

import SvgCheckCircleIcon from "../Icons/SvgCheckCircleIcon";
import SvgCloseIcon from "../Icons/SvgCloseIcon";
import SvgExclamationCircleIcon from "../Icons/SvgExclamationCircleIcon";
import SvgExclamationIcon from "../Icons/SvgExclamationIcon";
import SvgInfoIcon from "../Icons/SvgInfoIcon";

import "./Toast.css";

function getIcon(variant: string) {
  switch (variant) {
    case "info":
      return <SvgInfoIcon />;
    case "progress":
      return <SvgInfoIcon />;
    case "success":
      return <SvgCheckCircleIcon />;
    case "warning":
      return <SvgExclamationIcon />;
    case "danger":
      return <SvgExclamationCircleIcon />;
    default:
      return;
  }
}

export interface ToastContent {
  variant?: "info" | "progress" | "success" | "warning" | "danger";
  title?: string;
  message?: string;
}

export interface ToastProps extends ReactAriaToastProps<ToastContent> {
  toast: ReactAriaToastProps<ToastContent>["toast"];
}

export default function Toast({ toast, ...props }: ToastProps) {
  const { variant = "info", title, message } = toast.content;
  return (
    <>
      <ReactAriaToast
        toast={toast}
        className={`bcds-react-aria-Toast ${variant}`}
        {...props}
      >
        <ReactAriaToastContent className="bcds-react-aria-Toast--Content">
          <div className="bcds-react-aria-Toast--Icon">{getIcon(variant)}</div>
          {title && (
            <Text className="bcds-react-aria-Toast--Title" slot="title">
              {title}
            </Text>
          )}
          {message && (
            <Text className="bcds-react-aria-Toast--Message" slot="description">
              {message}
            </Text>
          )}
        </ReactAriaToastContent>
        <Button size="xsmall" variant="tertiary" slot="close">
          <SvgCloseIcon />
        </Button>
      </ReactAriaToast>
    </>
  );
}
