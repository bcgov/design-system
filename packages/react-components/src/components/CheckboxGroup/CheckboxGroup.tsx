import {
  CheckboxGroup as ReactAriaCheckboxGroup,
  FieldError,
  Label,
  Text,
} from "react-aria-components";

import type {
  CheckboxGroupProps as ReactAriaCheckboxGroupProps,
  ValidationResult,
} from "react-aria-components";

export interface CheckboxGroupProps extends ReactAriaCheckboxGroupProps {
  children?: React.ReactNode;
  /* Group label */
  label?: string;
  /* Group description */
  description?: string;
  /* Error message */
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export default function CheckboxGroup({
  label,
  description,
  errorMessage,
  children,
  ...props
}: CheckboxGroupProps) {
  return (
    <ReactAriaCheckboxGroup
      className="bcds-react-aria-CheckboxGroup"
      {...props}
    >
      {label && (
        <Label className="bcds-react-aria-CheckboxGroup--label">{label}</Label>
      )}
      {children}
      {description && (
        <Text
          slot="description"
          className="bcds-react-aria-CheckboxGroup--description"
        >
          {description}
        </Text>
      )}
      <FieldError className="bcds-react-aria-CheckboxGroup--error">
        {errorMessage}
      </FieldError>
    </ReactAriaCheckboxGroup>
  );
}
