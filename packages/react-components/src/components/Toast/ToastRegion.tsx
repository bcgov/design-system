import { UNSTABLE_ToastRegion as ReactAriaToastRegion } from "react-aria-components";

import Toast from "./Toast";
import { ToastQueue } from "./ToastQueue";

export default function ToastRegion() {
  return (
    <ReactAriaToastRegion
      className="bcds-react-aria-ToastRegion"
      queue={ToastQueue}
    >
      {({ toast }) => <Toast toast={toast} />}
    </ReactAriaToastRegion>
  );
}
