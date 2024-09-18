import {
  Dialog as ReactAriaDialog,
  DialogTrigger,
  DialogProps as ReactAriaDialogProps,
} from "react-aria-components";

import Button from "../Button";
import SvgCloseIcon from "../Icons/SvgCloseIcon";

import "./Dialog.css";

export interface DialogProps extends ReactAriaDialogProps {
  /* Show or hide close button */
  isCloseable?: boolean;
}

// This is not currently exported by RAC but we need it to type `close`.
export interface DialogRenderProps {
  /** Handler function to close the Dialog */
  close: () => void;
}

export default function Dialog({
  isCloseable,
  role = "dialog",
  children,
  ...props
}: DialogProps) {
  return (
    <ReactAriaDialog className="bcds-react-aria-Dialog" role={role} {...props}>
      {({ close }: DialogRenderProps) => (
        <>
          <div className="bcds-react-aria-Dialog--Container">
            {isCloseable && (
              <span className="bcds-react-aria-Dialog--closeIcon">
                <Button
                  variant="tertiary"
                  isIconButton
                  size="small"
                  aria-label="Close"
                  type="button"
                  onPress={close}
                >
                  <SvgCloseIcon />
                </Button>
              </span>
            )}
            <>{children}</>
          </div>
        </>
      )}
    </ReactAriaDialog>
  );
}

export { DialogTrigger };
