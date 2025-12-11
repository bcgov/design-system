import {
  DatePicker as ReactAriaDatePicker,
  DatePickerProps as ReactAriaDatePickerProps,
  DateValue,
  DateInput,
  DateSegment,
  FieldError,
  Group,
  ValidationResult,
  Label,
  Text,
} from "react-aria-components";

import "./DateField.css";
import Button from "../Button";

export interface DateFieldProps<T extends DateValue>
  extends ReactAriaDatePickerProps<T> {
  size?: "medium" | "small";
  isPickerDisabled?: boolean;
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
  isPickerDisabled = false,
  ...props
}: DateFieldProps<T>) {
  return (
    <ReactAriaDatePicker
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
      <Group className="bcds-react-aria-DateField--Group">
        <DateInput className="bcds-react-aria-DateField--Input">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
        {!isPickerDisabled && <Button size={size} isIconButton />}
      </Group>

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
    </ReactAriaDatePicker>
  );
}
