import Button from "../Button";
import ButtonGroup from "../ButtonGroup";
import SvgCheckCircleIcon from "../Icons/SvgCheckCircleIcon";
import SvgCloseIcon from "../Icons/SvgCloseIcon";
import SvgExclamationCircleIcon from "../Icons/SvgExclamationCircleIcon";
import SvgExclamationIcon from "../Icons/SvgExclamationIcon";
import SvgInfoIcon from "../Icons/SvgInfoIcon";

import "./InlineAlert.css";

export interface InlineAlertProps extends React.PropsWithChildren {
  /* Alert theme */
  variant?: "info" | "success" | "warning" | "danger";
  /* Alert title */
  title?: string;
  /* Alert description */
  description?: string;
  /* Button group */
  buttons?: React.ReactNode;
  /* Alert closeable state */
  isCloseable?: boolean;
  /* Show or hide left icon */
  isIconHidden?: boolean;
  /* Overrides theme icon  */
  customIcon?: React.ReactNode;
  /* ARIA role */
  role?: React.AriaRole | undefined;
  /* Close button handling */
  onClose?: () => void;
}

function getIcon(variant: string) {
  switch (variant) {
    case "info":
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

export default function InlineAlert({
  variant = "info",
  title,
  description,
  isIconHidden = false,
  isCloseable = false,
  role = "note",
  customIcon,
  buttons,
  children,
  onClose,
  ...props
}: InlineAlertProps) {
  return (
    <div
      className={`bcds-Inline-Alert ${variant} ${
        isCloseable ? "closeable" : null
      }`}
      {...props}
    >
      {!isIconHidden && (
        <span className="bcds-Inline-Alert--icon">
          {customIcon ? customIcon : getIcon(variant)}
        </span>
      )}
      <div
        className="bcds-Inline-Alert--container"
        role={role}
        aria-labelledby={"alert-title"}
      >
        {children ? (
          children
        ) : (
          <>
            {title && (
              <span className="title" id="alert-title">
                {title}
              </span>
            )}
            {description && <span className="description">{description}</span>}
            {buttons && (
              <ButtonGroup alignment="end" orientation="horizontal">
                {buttons}
              </ButtonGroup>
            )}
          </>
        )}
      </div>
      {isCloseable && (
        <span className="bcds-Inline-Alert--closeIcon">
          <Button
            variant="tertiary"
            isIconButton
            size="small"
            aria-label="Close this alert"
            type="button"
            onPress={onClose}
          >
            <SvgCloseIcon />
          </Button>
        </span>
      )}
    </div>
  );
}
