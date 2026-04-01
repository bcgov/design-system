import {
  ProgressBar as ReactAriaProgressBar,
  ProgressBarProps as ReactAriaProgressBarProps,
  Label,
} from "react-aria-components";

import "./ProgressBar.css";

export interface ProgressBarProps extends ReactAriaProgressBarProps {
  /* Set the size of the progress bar */
  size?: "small" | "medium" | "large";
  /* Toggles position of valueText relative to valueLabel */
  orientation?: "horizontal" | "vertical";
}

export default function ProgressBar({
  size = "medium",
  orientation = "horizontal",
  valueLabel,
  ...props
}: ProgressBarProps) {
  return (
    <ReactAriaProgressBar className={`bcds-react-aria-ProgressBar`} {...props}>
      {({ percentage, valueText, isIndeterminate }) => (
        <>
          {valueLabel && (
            <div className="bcds-react-aria-ProgressBar--Label">
              <Label>{valueLabel}</Label>
              {!isIndeterminate && orientation === "horizontal" && (
                <span className="bcds-react-aria-ProgressBar--Value">
                  {valueText}
                </span>
              )}
            </div>
          )}
          <div className={`bcds-react-aria-ProgressBar--Track ${size}`}>
            <div
              className="bcds-react-aria-ProgressBar--Fill"
              style={
                {
                  "--percentage": percentage + "%",
                } as React.CSSProperties
              }
            />
          </div>
          {!isIndeterminate && orientation === "vertical" && (
            <span className="bcds-react-aria-ProgressBar--Value">
              {valueText}
            </span>
          )}
        </>
      )}
    </ReactAriaProgressBar>
  );
}
