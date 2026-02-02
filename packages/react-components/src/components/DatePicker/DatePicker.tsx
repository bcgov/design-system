import {
  DatePicker as ReactAriaDatePicker,
  DatePickerProps as ReactAriaDatePickerProps,
  DateValue,
  DateInput,
  DateSegment,
  FieldError,
  Group,
  Label,
  Popover,
  Text,
  ValidationResult,
} from "react-aria-components";

import "./DatePicker.css";
import Button from "../Button";
import Calendar from "../Calendar";
import Dialog from "../Dialog";
import SvgCalendarIcon from "../Icons/SvgCalendarIcon";
import SvgExclamationIcon from "../Icons/SvgExclamationIcon";

export interface DatePickerProps<
  T extends DateValue,
> extends ReactAriaDatePickerProps<T> {
  /* Set input and typography size. Defaults to `medium` */
  size?: "small" | "medium";
  /* Disable calendar button and popover */
  isCalendarDisabled?: boolean;
  /* Sets text label above input */
  label?: string;
  /* Sets optional description text below input */
  description?: string;
  /* Used for data validation and error handling */
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export type { DateValue };

export default function DatePicker<T extends DateValue>({
  size = "medium",
  label,
  description,
  errorMessage,
  isRequired = false,
  isCalendarDisabled = false,
  ...props
}: DatePickerProps<T>) {
  return (
    <ReactAriaDatePicker
      className={`bcds-react-aria-DatePicker ${size}`}
      {...props}
    >
      {({ isInvalid }) => (
        <>
          {label && (
            <Label className="bcds-react-aria-DatePicker--Label">
              {label}
              {isRequired && (
                <span className="bcds-react-aria-DatePicker--Label required">
                  (required)
                </span>
              )}
            </Label>
          )}
          <Group className="bcds-react-aria-DatePicker--Group">
            <DateInput className="bcds-react-aria-DatePicker--Input">
              {(segment) => (
                <DateSegment
                  className="bcds-react-aria-DatePicker--Segment"
                  segment={segment}
                />
              )}
            </DateInput>
            {isInvalid && <SvgExclamationIcon />}
            {!isCalendarDisabled && (
              <>
                <Button size="xsmall" variant="secondary" isIconButton>
                  <SvgCalendarIcon />
                </Button>
                <Popover>
                  <Dialog isCloseable={false}>
                    <Calendar />
                  </Dialog>
                </Popover>
              </>
            )}
          </Group>

          {description && (
            <Text
              slot="description"
              className={`bcds-react-aria-DatePicker--Description`}
            >
              {description}
            </Text>
          )}
          <FieldError className="bcds-react-aria-DatePicker--Error">
            {errorMessage}
          </FieldError>
        </>
      )}
    </ReactAriaDatePicker>
  );
}
