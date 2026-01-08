import {
  Calendar,
  CalendarCell,
  CalendarGrid,
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
import Dialog from "../Dialog";
import Heading from "../Heading";
import SvgCalendarIcon from "../Icons/SvgCalendarIcon";
import SvgChevronLeftIcon from "../Icons/SvgChevronLeftIcon";
import SvgChevronRightIcon from "../Icons/SvgChevronRightIcon";
import SvgExclamationIcon from "../Icons/SvgExclamationIcon";

export interface DatePickerProps<T extends DateValue>
  extends ReactAriaDatePickerProps<T> {
  size?: "medium" | "small";
  isPickerDisabled?: boolean;
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export type { DateValue };

export default function DatePicker<T extends DateValue>({
  size = "medium",
  label,
  description,
  errorMessage,
  isRequired = false,
  isPickerDisabled = false,
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
            {!isPickerDisabled && (
              <>
                <Button size="xsmall" variant="tertiary" isIconButton>
                  <SvgCalendarIcon />
                </Button>
                <Popover>
                  <Dialog isCloseable={false}>
                    <Calendar className="bcds-react-aria-DatePicker--Calendar">
                      <header className="bcds-react-aria-DatePicker--CalendarHeader">
                        <Button
                          slot="previous"
                          size="xsmall"
                          variant="tertiary"
                          isIconButton
                        >
                          <SvgChevronLeftIcon />
                        </Button>
                        <Heading />
                        <Button
                          slot="next"
                          size="xsmall"
                          variant="tertiary"
                          isIconButton
                        >
                          <SvgChevronRightIcon />
                        </Button>
                      </header>
                      <CalendarGrid className="bcds-react-aria-DatePicker--CalendarGrid">
                        {(date) => (
                          <CalendarCell
                            className="bcds-react-aria-DatePicker--CalendarCell"
                            date={date}
                          />
                        )}
                      </CalendarGrid>
                    </Calendar>
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
