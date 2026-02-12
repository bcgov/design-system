import { UNSTABLE_ToastQueue as ReactAriaToastQueue } from "react-aria-components";
import { flushSync } from "react-dom";

import type { ToastContent } from "./Toast";

export const ToastQueue = new ReactAriaToastQueue<ToastContent>({
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
