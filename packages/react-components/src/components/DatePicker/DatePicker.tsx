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
  Separator,
  Text,
  ValidationResult,
  I18nProvider,
} from "react-aria-components";

import { useMemo } from "react";
import { useDisplayNames } from "@react-aria/datepicker";
import { useDateFormatter } from "@react-aria/i18n";

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
  showFormatHelpText?: boolean;
  /* Used for data validation and error handling */
  errorMessage?: string | ((validation: ValidationResult) => string);
  /* When true, uses the browser locale for date formatting and internationalization */
  isBrowserLocaleUsed?: boolean;
}

export type { DateValue };

/* Generate format helper text, adapted from React Spectrum */
export function useFormatHelpText(
  props: Pick<DatePickerProps<DateValue>, "showFormatHelpText">,
): React.ReactNode {
  let formatter = useDateFormatter({ dateStyle: "short" });
  let displayNames = useDisplayNames();
  return useMemo(() => {
    if (props.showFormatHelpText) {
      return (
        <>
          <span>Format: </span>
          {formatter.formatToParts(new Date()).map((s, i) => {
            if (
              s.type === "literal" ||
              s.type === "unknown" ||
              (s.type as string) === "yearName"
            ) {
              return <span key={i}>{` ${s.value} `}</span>;
            }

            let type = (s.type as string) === "relatedYear" ? "year" : s.type;
            return (
              <span
                key={i}
                className="bcds-react-aria-DatePicker--FormatHelpText"
              >
                {displayNames.of(type)}
              </span>
            );
          })}
        </>
      );
    }

    return "";
  }, [props.showFormatHelpText, formatter, displayNames]);
}

export default function DatePicker<T extends DateValue>({
  size = "medium",
  label,
  description,
  errorMessage,
  showFormatHelpText = true,
  isRequired = false,
  isCalendarDisabled = false,
  isBrowserLocaleUsed = false,
  ...props
}: DatePickerProps<T>) {
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
          {(description || showFormatHelpText) && (
            <Text
              slot="description"
              className={`bcds-react-aria-DatePicker--Description`}
            >
              {showFormatHelpText && (
                <>
                  {useFormatHelpText({ showFormatHelpText })}
                  <Separator className="bcds-react-aria-DatePicker--Separator" />
                </>
              )}
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
