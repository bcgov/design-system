// Copied from https://react-aria.adobe.com/ProgressBar#progresscircle
// If React Aria adds this as a component later, delete this file
import { composeRenderProps, ProgressBar } from "react-aria-components";
import type { ProgressBarProps } from 'react-aria-components';

export interface ProgressCircleProps extends ProgressBarProps {
  size: number
}

export default function ProgressCircle(props: ProgressCircleProps) {
  // SVG strokes are centered, so subtract half the stroke width from the radius to create an inner stroke.
  const strokeWidth = props.size / 16 + 1;
  const radius = `calc(50% - ${strokeWidth / 2}px)`;
  const viewBox = `0 0 ${props.size} ${props.size}`;
  return (
      <ProgressBar
        {...props}
        style={composeRenderProps(props.style, style => ({
          ...style,
          width: props.size,
          height: props.size,
        }))}>
        {({percentage, isIndeterminate}) => (
          <>
            <svg
              fill="none"
              width="100%"
              height="100%"
              viewBox={viewBox}>
              <circle
                className="bcds-ProgressCircle-bottom-circle"
                cx="50%"
                cy="50%"
                r={radius}
                // stroke="var(--highlight-pressed)"
                strokeWidth={strokeWidth} />
              <circle
                className="bcds-ProgressCircle-top-circle"
                cx="50%"
                cy="50%"
                r={radius}
                // stroke="var(--highlight-background)"
                strokeWidth={strokeWidth}
                // Normalize the path length to 100 so we can easily set stroke-dashoffset to a percentage.
                pathLength="100"
                // Add extra gap between dashes so 0% works in Chrome.
                strokeDasharray="100 200"
                strokeDashoffset={100 - (isIndeterminate || percentage == null ? 25 : percentage)}
                strokeLinecap="round"
                style={{
                  rotate: '-90deg',
                  transformOrigin: 'center center'
                }}>
                {isIndeterminate && 
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    dur="1.25s"
                    values="0;360"
                    repeatCount="indefinite" />
                }
              </circle>
            </svg>
          </>
        )}
      </ProgressBar>
  );
}
