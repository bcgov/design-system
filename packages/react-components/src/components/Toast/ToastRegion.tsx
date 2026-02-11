import {
  UNSTABLE_ToastRegion as ReactAriaToastRegion,
  UNSTABLE_ToastQueue as ReactAriaToastQueue,
} from "react-aria-components";

import Toast from "./Toast";
import { ToastContent } from "./Toast";
import { flushSync } from "react-dom";

const queue = new ReactAriaToastQueue<ToastContent>({
  wrapUpdate(fn) {
    if ("startViewTransition" in document) {
      document.startViewTransition(() => {
        flushSync(fn);
      });
    } else {
      fn();
    }
  },
});

export default function ToastRegion() {
  return (
    <ReactAriaToastRegion className="bcds-react-aria-ToastRegion" queue={queue}>
      {({ toast }) => <Toast toast={toast} />}
    </ReactAriaToastRegion>
  );
}
