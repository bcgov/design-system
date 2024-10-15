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
}

export default function Callout({
  variant = "info",
  title,
  description,
  buttons,
  children,
  ...props
}: CalloutProps) {
  return (
    <div className={`bcds-Callout ${variant}`} {...props}>
      {children ? (
        children
      ) : (
        <>
          <div className="bcds-Callout--Container">
            {title && <span className="title">{title}</span>}
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
