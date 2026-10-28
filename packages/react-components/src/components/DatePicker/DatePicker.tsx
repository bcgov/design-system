import {
  DatePicker as ReactAriaDatePicker,
  DatePickerProps as ReactAriaDatePickerProps,
  DateValue,
  DateInput,
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
import DateSegment from "../DateSegment";
import Dialog from "../Dialog";
import Separator from "../Separator";
import SvgCalendarIcon from "../Icons/SvgCalendarIcon";
import SvgExclamationIcon from "../Icons/SvgExclamationIcon";
import useDateFormatLabel from "../../hooks/useDateFormatLabel";

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
  showFormatHelpText?: boolean;
  /* Used for data validation and error handling */
  errorMessage?: string | ((validation: ValidationResult) => string);
  /* When true, uses the browser locale for date formatting and internationalization */
  isBrowserLocaleUsed?: boolean;
}

export type { DateValue };

export default function DatePicker<T extends DateValue>({
  size = "medium",
  label,
  description,
  errorMessage,
  showFormatHelpText = true,
  isCalendarDisabled = false,
  isBrowserLocaleUsed = false,
  ...props
}: DatePickerProps<T>) {
  const formatHelpText = useDateFormatLabel({ showFormatHelpText });
  const datePicker = (
    <ReactAriaDatePicker
      className={`bcds-react-aria-DatePicker ${size}`}
      {...props}
    >
      {({ isRequired, isInvalid }) => (
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
          {(description || showFormatHelpText) && (
            <Text
              slot="description"
              className={`bcds-react-aria-DatePicker--Description`}
            >
              {showFormatHelpText && (
                <>
                  {isBrowserLocaleUsed
                    ? formatHelpText
                    : "Format: year - month - day"}
                </>
              )}
              {showFormatHelpText && description && <Separator size="small" />}
              {description && <div>{description}</div>}
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
