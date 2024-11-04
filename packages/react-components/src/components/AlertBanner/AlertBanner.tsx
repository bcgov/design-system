import "./AlertBanner.css";
import Button from "../Button";
import SvgBetaIcon from "../Icons/SvgBetaIcon";
import SvgCheckCircleIcon from "../Icons/SvgCheckCircleIcon";
import SvgCloseIcon from "../Icons/SvgCloseIcon";
import SvgExclamationCircleIcon from "../Icons/SvgExclamationCircleIcon";
import SvgExclamationIcon from "../Icons/SvgExclamationIcon";
import SvgInfoIcon from "../Icons/SvgInfoIcon";

export interface AlertBannerProps extends React.PropsWithChildren {
  /* Sets banner theme */
  variant?: "info" | "success" | "warning" | "danger" | "black" | "beta";
  /* Hides icon  */
  isIconHidden?: boolean;
  /* Toggles display of close button */
  isCloseable?: boolean;
  /* Sets ARIA role, defaults to 'status' */
  role?: React.AriaRole | undefined;
  /* Overrides theme icon  */
  customIcon?: React.ReactNode;
  /* Controls behaviour of close button */
  onClose?: () => void;
  /* Label displayed next to icon when using "beta" variant */
  betaLabel?: string;
}

/* Sets correct icon for theme */
function getIcon(variant: string) {
  switch (variant) {
    case "info":
      return <SvgInfoIcon />;
    case "black":
      return <SvgInfoIcon />;
    case "success":
      return <SvgCheckCircleIcon />;
    case "warning":
      return <SvgExclamationIcon />;
    case "danger":
      return <SvgExclamationCircleIcon />;
    case "beta":
      return <SvgBetaIcon />;
    default:
      return;
  }
}

export default function AlertBanner({
  variant = "info",
  isIconHidden = false,
  isCloseable = true,
  role = "status",
  onClose,
  children,
  customIcon,
  betaLabel = "Beta",
  ...props
}: AlertBannerProps) {
  return (
    <div className={`bcds-Alert-Banner ${variant}`} {...props}>
      <div className="bcds-Alert-Banner--Container">
        {" "}
        {!isIconHidden && (
          <span className="bcds-Alert-Banner--Icon">
            {customIcon ? customIcon : getIcon(variant)}
            {variant === "beta" && (
              <span className="bcds-Alert-Banner--betaLabel">{betaLabel}</span>
            )}
          </span>
        )}
        <div className="bcds-Alert-Banner--Content" role={role}>
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
    </div>
  );
}
