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
  children?: React.ReactNode;
}

export default function Dialog({
  isCloseable = true,
  children,
  ...props
}: DialogProps) {
  return (
    <ReactAriaDialog className="bcds-react-aria-Dialog" {...props}>
      {({ close }) => (
        <>
          <div className="bcds-react-aria-Dialog--Header">
            {isCloseable && (
              <div className="bcds-react-aria-Dialog--closeIcon">
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
              </div>
            )}
          </div>
          <div className="bcds-react-aria-Dialog--Container">{children}</div>
        </>
      )}
    </ReactAriaDialog>
  );
}

export { DialogTrigger };
