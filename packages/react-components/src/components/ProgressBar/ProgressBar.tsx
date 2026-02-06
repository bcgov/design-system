import {
  ProgressBar as ReactAriaProgressBar,
  ProgressBarProps as ReactAriaProgressBarProps,
  Label,
} from "react-aria-components";

import "./ProgressBar.css";

export interface ProgressBarProps extends ReactAriaProgressBarProps {
  /* Set the size of the progress bar */
  size?: "small" | "medium" | "large";
  /* Label text */
  label?: string;
}

export default function ProgressBar({
  size = "medium",
  label,
  ...props
}: ProgressBarProps) {
  return (
    <ReactAriaProgressBar className={`bcds-react-aria-ProgressBar`} {...props}>
      {({ valueText, isIndeterminate }) => (
        <>
          <div className="bcds-react-aria-ProgressBar--Label">
            <Label>{label}</Label>
            {!isIndeterminate && (
              <span className="bcds-react-aria-ProgressBar--Value">
                {valueText}
              </span>
            )}
          </div>
          <div className={`bcds-react-aria-ProgressBar--Track ${size}`}>
            <div className={`bcds-react-aria-ProgressBar--Fill`} />
          </div>
        </>
      )}
    </ReactAriaProgressBar>
  );
}
