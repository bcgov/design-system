import "./AlertBanner.css";
import Button from "../Button";
import SvgCheckCircleIcon from "../Icons/SvgCheckCircleIcon";
import SvgCloseIcon from "../Icons/SvgCloseIcon";
import SvgExclamationCircleIcon from "../Icons/SvgExclamationCircleIcon";
import SvgExclamationIcon from "../Icons/SvgExclamationIcon";
import SvgInfoIcon from "../Icons/SvgInfoIcon";

export interface AlertBannerProps extends React.PropsWithChildren {
  /* Sets banner theme */
  variant?: "info" | "success" | "warning" | "danger" | "dark";
  /* Hides icon  */
  isIconHidden?: boolean;
  /* Toggles display of close button */
  isCloseable?: boolean;
  /* Sets ARIA role */
  role?: React.AriaRole | undefined;
  /* Overrides theme icon  */
  customIcon?: React.ReactNode;
  /* Controls behaviour of close button */
  onClose?: () => void;
}

/* Sets correct icon for theme */
function getIcon(variant: string) {
  switch (variant) {
    case "info":
      return <SvgInfoIcon />;
    case "dark":
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

export default function AlertBanner({
  variant = "info",
  isIconHidden = false,
  isCloseable = true,
  role = "note",
  onClose,
  children,
  customIcon,
  ...props
}: AlertBannerProps) {
  return (
    <div className={`bcds-Alert-Banner ${variant}`} {...props}>
      {!isIconHidden && (
        <div className="bcds-Alert-Banner--Icon">
          {customIcon ? customIcon : getIcon(variant)}
        </div>
      )}
      <div className="bcds-Alert-Banner--Container" role={role}>
        {children}
      </div>
      {isCloseable && (
        <span className="bcds-Alert-Banner--closeIcon">
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
