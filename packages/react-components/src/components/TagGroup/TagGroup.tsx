import {
  Label,
  TagGroup as ReactAriaTagGroup,
  TagGroupProps as ReactAriaTagGroupProps,
  Text,
} from "react-aria-components";

import "./TagGroup.css";

export interface TagGroupProps extends ReactAriaTagGroupProps {
  /**
   * Labels the TagGroup, appears above the tags.
   */
  label?: string;
  /**
   * Extended description of the TagGroup, appears below the tags.
   */
  description?: string;
  /**
   * Error message, appears below the tags and below the optional description.
   */
  errorMessage?: string;
}

export default function TagGroup({
  children,
  label,
  description,
  errorMessage,
  ...props
}: TagGroupProps) {
  return (
    <ReactAriaTagGroup className="bcds-react-aria-TagGroup" {...props}>
      {label && (
        <Label className="bcds-react-aria-TagGroup--Label">{label}</Label>
      )}
      {children}
      {description && (
        <Text
          slot="description"
          className="bcds-react-aria-TagGroup--Text-description"
        >
          {description}
        </Text>
      )}
      {errorMessage && (
        <Text
          slot="errorMessage"
          className="bcds-react-aria-TagGroup--Text-error"
        >
          {errorMessage}
        </Text>
      )}
    </ReactAriaTagGroup>
  );
}
