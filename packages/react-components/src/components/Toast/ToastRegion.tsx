import { UNSTABLE_ToastRegion as ReactAriaToastRegion } from "react-aria-components";
import type { ToastRegionProps } from "react-aria-components";

import Toast from "./Toast";
import { ToastQueue } from "./ToastQueue";

import "./Toaster.css";

export default function ToastRegion() {
  return (
    <ReactAriaToastRegion
      className="bcds-react-aria-Toaster"
      queue={ToastQueue}
    >
      {({ toast }) => <Toast toast={toast} />}
    </ReactAriaToastRegion>
  );
}

export type { ToastRegionProps };
