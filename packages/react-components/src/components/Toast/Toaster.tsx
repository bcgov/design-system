import {
  UNSTABLE_ToastRegion as ReactAriaToastRegion,
  ToastRegionProps,
} from "react-aria-components";

import Toast from "./Toast";
import { ToastQueue } from "./ToastQueue";

import "./Toaster.css";

export interface ToasterProps {
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
}

export default function Toaster({
  position = "bottom-right",
  ...props
}: ToasterProps) {
  return (
    <ReactAriaToastRegion
      className={`bcds-react-aria-Toaster ${position}`}
      queue={ToastQueue}
      {...props}
    >
      {({ toast }) => (
        <Toast toast={toast} style={{ viewTransitionName: toast.key }} />
      )}
    </ReactAriaToastRegion>
  );
}

export type { ToastRegionProps };
