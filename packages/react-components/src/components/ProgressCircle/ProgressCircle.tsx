import {
  ProgressBar as ReactAriaProgressBar,
  ProgressBarProps as ReactAriaProgressBarProps,
  Label,
} from "react-aria-components";

import "./ProgressCircle.css";

export interface ProgressCircleProps extends ReactAriaProgressBarProps {
  /* Set the size of the progress bar */
  size?: "small" | "medium" | "large";
}

export default function ProgressCircle({
  size = "medium",
  valueLabel,
  ...props
}: ProgressCircleProps) {
  const viewBoxSize = { small: 20, medium: 24, large: 32 }[size];
  return (
    <ReactAriaProgressBar
      className={`bcds-react-aria-ProgressCircle`}
      {...props}
    >
      {({ percentage, valueText, isIndeterminate }) => (
        <>
          <svg
            className={`bcds-react-aria-ProgressCircle ${size}`}
            viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          >
            <circle className="bcds-react-aria-ProgressCircle--Track" />
            <circle
              className="bcds-react-aria-ProgressCircle--Fill"
              pathLength="100"
              strokeDashoffset={
                100 - (isIndeterminate || percentage == null ? 25 : percentage)
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
    </ReactAriaProgressBar>
  );
}
