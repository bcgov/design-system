import ButtonGroup from "../ButtonGroup";

import "./Callout.css";

export interface CalloutProps extends React.PropsWithChildren {
  /* Callout theme */
  variant?: "lightGrey" | "lightBlue" | "darkBlue" | "lightGold";
  /* Title */
  title?: string;
  /* Description */
  description?: string;
  /* Button group */
  buttons?: React.ReactNode;
  /* ARIA role */
  role?: React.AriaRole | undefined;
  /* */
  isLeftBorderDisabled?: boolean;
}

export default function Callout({
  variant = "lightGrey",
  title,
  description,
  buttons,
  role = "note",
  isLeftBorderDisabled = false,
  children,
  ...props
}: CalloutProps) {
  return (
    <div
      className={`bcds-Callout ${variant} ${
        isLeftBorderDisabled ? "noLeftBorder" : ""
      }`}
      {...props}
      role={role}
    >
      {children ? (
        children
      ) : (
        <>
          <div
            className="bcds-Callout--Container"
            aria-labelledby={"callout-title"}
            role={role}
          >
            {title && (
              <span className="bcds-Callout--Title" id="callout-title">
                {title}
              </span>
            )}
            {description && (
              <span className="bcds-Callout--Description">{description}</span>
            )}
            {buttons && (
              <ButtonGroup alignment="start" orientation="horizontal">
                {buttons}
              </ButtonGroup>
            )}
          </div>
        </>
      )}
    </div>
  );
}
