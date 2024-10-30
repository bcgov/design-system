import "./AlertBanner.css";
import Button from "../Button";
import SvgCheckCircleIcon from "../Icons/SvgCheckCircleIcon";
import SvgCloseIcon from "../Icons/SvgCloseIcon";
import SvgExclamationCircleIcon from "../Icons/SvgExclamationCircleIcon";
import SvgExclamationIcon from "../Icons/SvgExclamationIcon";
import SvgInfoIcon from "../Icons/SvgInfoIcon";

export interface AlertBannerProps extends React.PropsWithChildren {
  variant?: "info" | "success" | "warning" | "danger" | "dark";
  isIconHidden?: boolean;
  isCloseable?: boolean;
  role?: React.AriaRole | undefined;
  customIcon?: React.ReactNode;
  onClose?: () => void;
}

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
    <div className={`bcds-AlertBanner ${variant}`} {...props}>
      {!isIconHidden && (
        <div className="bcds-AlertBanner--Icon">
          {customIcon ? customIcon : getIcon(variant)}
        </div>
      )}
      <div className="bcds-AlertBanner--Container" role={role}>
        {children}
      </div>
      {isCloseable && (
        <span className="bcds-AlertBanner--closeIcon">
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
