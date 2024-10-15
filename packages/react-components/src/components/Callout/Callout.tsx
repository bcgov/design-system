import ButtonGroup from "../ButtonGroup";

import "./Callout.css";

export interface CalloutProps extends React.PropsWithChildren {
  /* Callout theme */
  variant?: "info" | "success" | "warning" | "danger";
  /* Title */
  title?: string;
  /* Description */
  description?: string;
  /* Button group */
  buttons?: React.ReactNode;
  /* ARIA role */
  role?: React.AriaRole | undefined;
}

export default function Callout({
  variant = "info",
  title,
  description,
  buttons,
  role = "note",
  children,
  ...props
}: CalloutProps) {
  return (
    <div className={`bcds-Callout ${variant}`} {...props} role={role}>
      {children ? (
        children
      ) : (
        <>
          <div
            className="bcds-Callout--Container"
            aria-labelledby={"callout-title"}
          >
            {title && (
              <span className="title" id="callout-title">
                {title}
              </span>
            )}
            {description && <span className="description">{description}</span>}
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
