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
  Heading,
  Label,
  Popover,
  Text,
  ValidationResult,
} from "react-aria-components";

import "./DateField.css";
import Button from "../Button";
import Dialog from "../Dialog";
import SvgCalendarIcon from "../Icons/SvgCalendarIcon";
import SvgChevronLeftIcon from "../Icons/SvgChevronLeftIcon";
import SvgChevronRightIcon from "../Icons/SvgChevronRightIcon";
import SvgExclamationIcon from "../Icons/SvgExclamationIcon";

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
  errorMessage,
  isRequired = false,
  isPickerDisabled = false,
  ...props
}: DateFieldProps<T>) {
  return (
    <ReactAriaDatePicker
      className={`bcds-react-aria-DateField ${size}`}
      {...props}
    >
      {({ isInvalid }) => (
        <>
          {label && (
            <Label className="bcds-react-aria-DateField--Label">
              {label}
              {isRequired && (
                <span className="bcds-react-aria-DateField--Label required">
                  (required)
                </span>
              )}
            </Label>
          )}
          <Group className="bcds-react-aria-DateField--Group">
            <DateInput className="bcds-react-aria-DateField--Input">
              {(segment) => (
                <DateSegment
                  className="bcds-react-aria-DateField--Segment"
                  segment={segment}
                />
              )}
            </DateInput>
            {isInvalid && <SvgExclamationIcon />}
            {!isPickerDisabled && (
              <>
                <Button size="xsmall" variant="primary" isIconButton>
                  <SvgCalendarIcon />
                </Button>
                <Popover>
                  <Dialog isCloseable={false}>
                    <Calendar className="bcds-react-aria-DateField--Calendar">
                      <header>
                        <Button
                          slot="previous"
                          size="small"
                          variant="tertiary"
                          isIconButton
                        >
                          <SvgChevronLeftIcon />
                        </Button>
                        <Heading />
                        <Button
                          slot="next"
                          size="small"
                          variant="tertiary"
                          isIconButton
                        >
                          <SvgChevronRightIcon />
                        </Button>
                      </header>
                      <CalendarGrid>
                        {(date) => <CalendarCell date={date} />}
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
              className={`bcds-react-aria-DateField--Description`}
            >
              {description}
            </Text>
          )}
          <FieldError className="bcds-react-aria-DateField--Error">
            {errorMessage}
          </FieldError>
        </>
      )}
    </ReactAriaDatePicker>
  );
}
