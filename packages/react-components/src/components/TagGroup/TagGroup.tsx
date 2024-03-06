import {
  Label,
  TagGroup as ReactAriaTagGroup,
  TagGroupProps as ReactAriaTagGroupProps,
  Text,
} from "react-aria-components";

import "./TagGroup.css";

export interface TagGroupProps extends ReactAriaTagGroupProps {
  label?: string;
  description?: string;
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
