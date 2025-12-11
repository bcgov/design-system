import {
  DateField as ReactAriaDateField,
  DateFieldProps as ReactAriaDateFieldProps,
  DateValue,
  DateInput,
  DateSegment,
  FieldError,
  ValidationResult,
  Label,
  Text,
} from "react-aria-components";

import "./DateField.css";

export interface DateFieldProps<T extends DateValue>
  extends ReactAriaDateFieldProps<T> {
  size?: "medium" | "small";
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export type { DateValue };

export default function DateField<T extends DateValue>({
  size = "medium",
  label,
  description,
  isRequired,
  errorMessage,
  ...props
}: DateFieldProps<T>) {
  return (
    <ReactAriaDateField
      className={`bcds-react-aria-DateField ${size}`}
      {...props}
    >
      <Label className="bcds-react-aria-DateField--Label">
        {label}
        {isRequired && (
          <span className="bcds-react-aria-DateField--Label required">
            (required)
          </span>
        )}
      </Label>
      <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
      {description && (
        <Text
          slot="description"
          className={`bcds-react-aria-DateField--Description`}
        >
          {description}
        </Text>
      )}
      <FieldError className="bcds-react-aria-DateField--Error">
        {errorMessage}
      </FieldError>
    </ReactAriaDateField>
  );
}
