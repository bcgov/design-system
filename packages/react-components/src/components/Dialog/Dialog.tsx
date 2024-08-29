import {
  Dialog as ReactAriaDialog,
  DialogTrigger,
  DialogProps as ReactAriaDialogProps,
} from "react-aria-components";

import "./Dialog.css";

export interface DialogProps extends ReactAriaDialogProps {
  children?: React.ReactNode;
}

export { DialogTrigger };

export default function Dialog({ children, ...props }: DialogProps) {
  return (
    <ReactAriaDialog className="bcds-react-aria-Dialog" {...props}>
      {children}
    </ReactAriaDialog>
  );
}
