import {
  CheckboxGroup as ReactAriaCheckboxGroup,
  CheckboxGroupRenderProps,
  FieldError,
  Label,
  Text,
} from "react-aria-components";

import type {
  CheckboxGroupProps as ReactAriaCheckboxGroupProps,
  ValidationResult,
} from "react-aria-components";

import "./CheckboxGroup.css";
import SvgExclamationIcon from "../Icons/SvgExclamationIcon";

export interface CheckboxGroupProps extends ReactAriaCheckboxGroupProps {
  /* Group orientation, defaults to `vertical` */
  orientation?: "horizontal" | "vertical";
  /* Group label */
  label?: string;
  /* Group description */
  description?: string;
  /* Error message */
  errorMessage?: string | ((validation: ValidationResult) => string);
  /** `flex-wrap` style property, defaults to `nowrap` */
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
}

export default function CheckboxGroup({
  orientation = "vertical",
  label,
  description,
  errorMessage,
  flexWrap = "nowrap",
  children,
  ...props
}: CheckboxGroupProps) {
  return (
    <ReactAriaCheckboxGroup
      className={`bcds-react-aria-CheckboxGroup`}
      {...props}
    >
      {({ isRequired, isInvalid }: CheckboxGroupRenderProps) => (
        <>
          {label && (
            <Label className="bcds-react-aria-CheckboxGroup--label">
              {label} {isRequired && "(required)"}
            </Label>
          )}
          <div
            className={`bcds-react-aria-CheckboxGroup--options ${orientation} flex-wrap-${flexWrap}`}
          >
            <>{children}</>
          </div>
          {description && (
            <Text
              slot="description"
              className="bcds-react-aria-CheckboxGroup--description"
            >
              {description}
            </Text>
          )}
          {isInvalid && (
            <div className="bcds-react-aria-CheckboxGroup--error">
              <SvgExclamationIcon />
              <FieldError>{errorMessage}</FieldError>
            </div>
          )}
        </>
      )}
    </ReactAriaCheckboxGroup>
  );
}
