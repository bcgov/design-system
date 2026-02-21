import {
  ProgressBar as ReactAriaProgressBar,
  ProgressBarProps as ReactAriaProgressBarProps,
  Label,
} from "react-aria-components";

import "./ProgressBar.css";

export interface ProgressBarProps extends ReactAriaProgressBarProps {
  /* Progress bar format */
  format?: "bar" | "circle";
  /* Set the size of the progress bar */
  size?: "small" | "medium" | "large";
}

export default function ProgressBar({
  size = "medium",
  format = "bar",
  valueLabel,
  ...props
}: ProgressBarProps) {
  const viewBoxSize = { small: 20, medium: 24, large: 32 }[size];
  return (
    <ReactAriaProgressBar className={`bcds-react-aria-ProgressBar`} {...props}>
      {({ percentage, valueText, isIndeterminate }) => (
        <>
          {format === "circle" && (
            <>
              <svg
                className={`bcds-react-aria-ProgressCircle ${size}`}
                viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
              >
                <circle className="bcds-react-aria-ProgressCircle--Bottom" />
                <circle
                  className="bcds-react-aria-ProgressCircle--Top"
                  pathLength="100"
                  strokeDashoffset={
                    100 -
                    (isIndeterminate || percentage == null ? 25 : percentage)
                  }
                >
                  {isIndeterminate && (
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      dur="1.25s"
                      values="0;360"
                      repeatCount="indefinite"
                    />
                  )}
                </circle>
              </svg>
              {valueLabel && (
                <div className="bcds-react-aria-ProgressCircle--Label">
                  <Label>{valueLabel}</Label>
                  {!isIndeterminate && (
                    <span className="bcds-react-aria-ProgressCircle--Value">
                      {valueText}
                    </span>
                  )}
                </div>
              )}
            </>
          )}
          {format === "bar" && (
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
        </>
      )}
    </ReactAriaProgressBar>
  );
}
