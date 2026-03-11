import {
  ProgressBar as ReactAriaProgressBar,
  ProgressBarProps as ReactAriaProgressBarProps,
  Label,
} from "react-aria-components";

import "./ProgressBar.css";

export interface ProgressBarProps extends ReactAriaProgressBarProps {
  /* Set the size of the progress bar */
  size?: "small" | "medium" | "large";
}

export default function ProgressBar({
  size = "medium",
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
              {!isIndeterminate && (
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
        </>
      )}
    </ReactAriaProgressBar>
  );
}
