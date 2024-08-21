import {
  RadioGroup as ReactAriaRadioGroup,
  RadioGroupProps as ReactAriaRadioGroupProps,
  FieldError,
  Label,
  Text,
  ValidationResult,
} from "react-aria-components";

import SvgExclamationIcon from "../Icons/SvgExclamationIcon";

import "./RadioGroup.css";

export interface RadioGroupProps extends ReactAriaRadioGroupProps {
  /* Group label */
  label?: string;
  /* Group description */
  description?: string;
  /* Error message */
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export default function RadioGroup({
  label,
  description,
  children,
  errorMessage,
  ...props
}: RadioGroupProps) {
  return (
    <ReactAriaRadioGroup className={`bcds-react-aria-RadioGroup`} {...props}>
      {({ isRequired, isInvalid }) => (
        <>
          {label && (
            <Label className="bcds-react-aria-RadioGroup--Label">
              {label} {isRequired && "(required)"}
            </Label>
          )}
          {children}
          {description && (
            <Text
              slot="description"
              className="bcds-react-aria-RadioGroup--Description"
            >
              {description}
            </Text>
          )}
          {isInvalid && (
            <div className="bcds-react-aria-RadioGroup--Error">
              <SvgExclamationIcon />
              <FieldError>{errorMessage}</FieldError>
            </div>
          )}
        </>
      )}
    </ReactAriaRadioGroup>
  );
}
