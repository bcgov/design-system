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
  return (
    <ReactAriaProgressBar className="bcds-react-aria-ProgressCircle" {...props}>
      {({ percentage, valueText, isIndeterminate }) => (
        <>
          <svg className={`bcds-react-aria-ProgressCircle--Container ${size}`}>
            <circle className="bcds-react-aria-ProgressCircle--Track" />
            <circle
              className="bcds-react-aria-ProgressCircle--Fill"
              pathLength="100"
              strokeDashoffset={
                100 - (isIndeterminate || percentage == null ? 25 : percentage)
              }
            />
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
