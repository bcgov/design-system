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
    <ReactAriaTagGroup {...props}>
      {label && <Label>{label}</Label>}
      {children}
      {description && <Text slot="description">{description}</Text>}
      {errorMessage && (
        <Text slot="errorMessage" className="react-aria-Text error">
          {errorMessage}
        </Text>
      )}
    </ReactAriaTagGroup>
  );
}
