import {
  Button as ReactAriaButton,
  Tag as ReactAriaTag,
  TagProps as ReactAriaTagProps,
  TagRenderProps,
} from "react-aria-components";

import "./Tag.css";

export interface TagProps extends ReactAriaTagProps {
  /**
   * Icon that appears to the left of the `textValue` field
   */
  icon?: React.ReactNode;
  /**
   * Background color
   */
  color?:
    | "bc-blue"
    | "bc-gold"
    | "blue"
    | "dark"
    | "gray"
    | "grey"
    | "green"
    | "red"
    | "yellow";
  /**
   * Style
   */
  style?: "rectangular" | "circular";
  /**
   * size
   */
  size?: "small" | "medium";
}

export default function Tag({
  color = "blue",
  style = "rectangular",
  size = "small",
  icon,
  id,
  textValue,
}: TagProps) {
  return (
    <ReactAriaTag
      className={`bcds-react-aria-Tag ${color} ${style} ${size}`}
      id={id}
      textValue={textValue}
    >
      {({ allowsRemoving, isDisabled }: TagRenderProps) => (
        <>
          {icon}
          {textValue}
          {!isDisabled && allowsRemoving && (
            <ReactAriaButton aria-label={`Remove ${textValue}`} slot="remove">
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Icons / Close">
                  <path
                    id="Vector"
                    d="M12.6004 3.03239L11.4684 1.90039L7.00039 6.36839L2.53239 1.90039L1.40039 3.03239L5.86839 7.50039L1.40039 11.9684L2.53239 13.1004L7.00039 8.63239L11.4684 13.1004L12.6004 11.9684L8.13239 7.50039L12.6004 3.03239Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </ReactAriaButton>
          )}
        </>
      )}
    </ReactAriaTag>
  );
}
