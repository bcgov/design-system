import { useMemo } from "react";
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
  I18nProvider,
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
  /* Show date format in the description */
  formatLabel?: boolean;
  /* Used for data validation and error handling */
  errorMessage?: string | ((validation: ValidationResult) => string);
  /* Locale */
  isBrowserLocaleUsed?: boolean;
}

export type { DateValue };

export default function DatePicker<T extends DateValue>({
  size = "medium",
  label,
  description,
  errorMessage,
  formatLabel = true,
  isRequired = false,
  isCalendarDisabled = false,
  isBrowserLocaleUsed = false,
  ...props
}: DatePickerProps<T>) {
  // Get the date format (based on user's browser locale) as a string
  const dateFormatPattern = useMemo(() => {
    const formatter = new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const parts = formatter.formatToParts(new Date());
    const pattern = parts
      .map((part) => {
        if (part.type === "year") return "yyyy";
        if (part.type === "month") return "mm";
        if (part.type === "day") return "dd";
        return part.value;
      })
      .join("");

    return pattern;
  }, []);

  const datePicker = (
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
          {(description || formatLabel) && (
            <Text
              slot="description"
              className={`bcds-react-aria-DatePicker--Description`}
            >
              <div>{formatLabel && `Format: ${dateFormatPattern}`}</div>
              <div>{description && description}</div>
            </Text>
          )}
          <FieldError className="bcds-react-aria-DatePicker--Error">
            {errorMessage}
          </FieldError>
        </>
      )}
    </ReactAriaDatePicker>
  );

  return isBrowserLocaleUsed ? (
    datePicker
  ) : (
    <I18nProvider locale={"en-CA"}>{datePicker}</I18nProvider>
  );
}
