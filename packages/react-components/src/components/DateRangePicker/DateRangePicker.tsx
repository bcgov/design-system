import {
  DateRangePicker as ReactAriaDateRangePicker,
  DateRangePickerProps as ReactAriaDateRangePickerProps,
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

import { useMemo } from "react";
import { useDisplayNames } from "@react-aria/datepicker";
import { useDateFormatter } from "@react-aria/i18n";

import "./DateRangePicker.css";
import Button from "../Button";
import Dialog from "../Dialog";
import RangeCalendar, { RangeCalendarProps } from "../RangeCalendar";
import Separator from "../Separator";
import SvgCalendarIcon from "../Icons/SvgCalendarIcon";
import SvgExclamationIcon from "../Icons/SvgExclamationIcon";

export interface DateRangePickerProps<
  T extends DateValue,
> extends ReactAriaDateRangePickerProps<T> {
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
  /* Custom separator */
  separator?: string;
  /* Used for data validation and error handling */
  errorMessage?: string | ((validation: ValidationResult) => string);
  /* When true, uses the browser locale for date formatting and internationalization */
  isBrowserLocaleUsed?: boolean;
  /* Number of months to display in the calendar */
  visibleDuration?: RangeCalendarProps<DateValue>["visibleDuration"];
}

export type { DateValue };

/* Generate format helper text, adapted from React Spectrum */
function useFormatHelpText(
  props: Pick<DateRangePickerProps<DateValue>, "showFormatHelpText">
): React.ReactNode {
  const formatter = useDateFormatter({ dateStyle: "short" });
  const displayNames = useDisplayNames();
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

            const type = (s.type as string) === "relatedYear" ? "year" : s.type;
            return (
              <span
                key={i}
                className="bcds-react-aria-DateRangePicker--FormatHelpText"
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

export default function DateRangePicker<T extends DateValue>({
  size = "medium",
  label,
  description,
  errorMessage,
  showFormatHelpText = true,
  isRequired = false,
  isCalendarDisabled = false,
  isBrowserLocaleUsed = false,
  separator,
  visibleDuration = { months: 1 },
  ...props
}: DateRangePickerProps<T>) {
  const formatHelpText = useFormatHelpText({ showFormatHelpText });
  const dateRangePicker = (
    <ReactAriaDateRangePicker
      className={`bcds-react-aria-DateRangePicker ${size}`}
      {...props}
    >
      {({ isInvalid }) => (
        <>
          {label && (
            <Label className="bcds-react-aria-DateRangePicker--Label">
              {label}
              {isRequired && (
                <span className="bcds-react-aria-DateRangePicker--Label required">
                  (required)
                </span>
              )}
            </Label>
          )}
          <Group className="bcds-react-aria-DateRangePicker--Group">
            <DateInput
              slot="start"
              className="bcds-react-aria-DateRangePicker--Input"
            >
              {(segment) => (
                <DateSegment
                  className="bcds-react-aria-DateRangePicker--Segment"
                  segment={segment}
                />
              )}
            </DateInput>
            <span aria-hidden="true">{separator ? separator : "–"}</span>
            <DateInput
              slot="end"
              className="bcds-react-aria-DateRangePicker--Input"
            >
              {(segment) => (
                <DateSegment
                  className="bcds-react-aria-DateRangePicker--Segment"
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
                    <RangeCalendar visibleDuration={visibleDuration} />
                  </Dialog>
                </Popover>
              </>
            )}
          </Group>
          {(description || showFormatHelpText) && (
            <Text
              slot="description"
              className={`bcds-react-aria-DateRangePicker--Description`}
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
          <FieldError className="bcds-react-aria-DateRangePicker--Error">
            {errorMessage}
          </FieldError>
        </>
      )}
    </ReactAriaDateRangePicker>
  );

  return isBrowserLocaleUsed ? (
    dateRangePicker
  ) : (
    <I18nProvider locale={"en-CA"}>{dateRangePicker}</I18nProvider>
  );
}
