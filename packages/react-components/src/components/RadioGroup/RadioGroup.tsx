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
  children?: React.ReactNode;
  /* Group orientation */
  orientation?: "vertical" | "horizontal";
  /* Group label */
  label?: string;
  /* Group description */
  description?: string;
  /* Error message */
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export default function RadioGroup({
  orientation = "vertical",
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
            <Label className="bcds-react-aria-RadioGroup--label">
              {label} {isRequired && "(required)"}
            </Label>
          )}
          <div className={`bcds-react-aria-RadioGroup--options ${orientation}`}>
            {children}
          </div>
          {description && (
            <Text
              slot="description"
              className="bcds-react-aria-RadioGroup--description"
            >
              {description}
            </Text>
          )}
          {isInvalid && (
            <div className="bcds-react-aria-RadioGroup--error">
              <SvgExclamationIcon />
              <FieldError>{errorMessage}</FieldError>
            </div>
          )}
        </>
      )}
    </ReactAriaRadioGroup>
  );
}
