import {
  ProgressBar as ReactAriaProgressBar,
  Label,
} from "react-aria-components";
import type { ProgressBarProps as ReactAriaProgressBarProps } from "react-aria-components";

import "./ProgressCircle.css";

export interface ProgressCircleProps extends ReactAriaProgressBarProps {
  /* Set the size of the progress circle */
  size: "small" | "medium" | "large";
  /* Label text */
  label?: string;
}

export default function ProgressCircle({
  size = "medium",
  label,
  ...props
}: ProgressCircleProps) {
  const viewBoxSize = { small: 20, medium: 24, large: 32 }[size];

  return (
    <ReactAriaProgressBar
      className={`bcds-react-aria-ProgressCircle ${size}`}
      {...props}
    >
      {({ percentage, isIndeterminate }) => (
        <>
          <svg
            className="bcds-react-aria-ProgressCircle--Container"
            viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          >
            <circle className="bcds-react-aria-ProgressCircle--Bottom" />
            <circle
              className="bcds-react-aria-ProgressCircle--Top"
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
          {label && (
            <>
              <div className="bcds-react-aria-ProgressCircle--Label">
                <Label>{label}</Label>
              </div>
            </>
          )}
        </>
      )}
    </ReactAriaProgressBar>
  );
}
