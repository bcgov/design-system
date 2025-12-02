import {
  NumberField as ReactAriaNumberField,
  NumberFieldProps as ReactAriaNumberFieldProps,
  FieldError,
  Group,
  Input,
  Label,
  Text,
  ValidationResult,
} from "react-aria-components";

import Button from "../Button";
import SvgExclamationIcon from "../Icons/SvgExclamationIcon";
import SvgMinusIcon from "../Icons/SvgMinusIcon";
import SvgPlusIcon from "../Icons/SvgPlusIcon";

import "./NumberField.css";

interface NumberFieldProps extends ReactAriaNumberFieldProps {
  variant?: "inline" | "stepper";
  size?: "small" | "medium";
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export default function NumberField({
  variant = "inline",
  size = "medium",
  label,
  description,
  errorMessage,
  ...props
}: NumberFieldProps) {
  return (
    <ReactAriaNumberField
      className={`bcds-react-aria-NumberField ${size} ${variant}`}
      minValue={0}
      {...props}
    >
      {({ isRequired, isInvalid }) => (
        <>
          {label && (
            <Label className="bcds-react-aria-NumberField--Label">
              {label}
              {isRequired && (
                <span className="bcds-react-aria-NumberField--Label required">
                  (required)
                </span>
              )}
            </Label>
          )}

          <Group className="bcds-react-aria-NumberField--Group">
            {variant == "inline" && (
              <div className="bcds-react-aria-NumberField--Button">
                {size == "small" ? (
                  <Button
                    size="small"
                    slot="decrement"
                    variant="tertiary"
                    isIconButton
                  >
                    <SvgMinusIcon />
                  </Button>
                ) : (
                  <Button slot="decrement" variant="tertiary" isIconButton>
                    <SvgMinusIcon />
                  </Button>
                )}
              </div>
            )}
            <div className="bcds-react-aria-NumberField--InputContainer">
              <Input className="bcds-react-aria-NumberField--Input" />
              {isInvalid && <SvgExclamationIcon />}
            </div>
            {variant == "inline" && (
              <div className="bcds-react-aria-NumberField--Button">
                {size == "small" ? (
                  <Button
                    size="small"
                    slot="increment"
                    variant="tertiary"
                    isIconButton
                  >
                    <SvgPlusIcon />
                  </Button>
                ) : (
                  <Button slot="increment" variant="tertiary" isIconButton>
                    <SvgPlusIcon />
                  </Button>
                )}
              </div>
            )}
            {variant == "stepper" && (
              <div className="bcds-react-aria-NumberField--Stepper">
                <div className="bcds-react-aria-NumberField--StepperButton">
                  {size == "small" ? (
                    <Button
                      size="xsmall"
                      slot="increment"
                      variant="tertiary"
                      isIconButton
                    >
                      <SvgPlusIcon />
                    </Button>
                  ) : (
                    <Button
                      size="small"
                      slot="increment"
                      variant="tertiary"
                      isIconButton
                    >
                      <SvgPlusIcon />
                    </Button>
                  )}
                </div>
                <div className="bcds-react-aria-NumberField--StepperButton">
                  {size == "small" ? (
                    <Button
                      size="xsmall"
                      slot="decrement"
                      variant="tertiary"
                      isIconButton
                    >
                      <SvgMinusIcon />
                    </Button>
                  ) : (
                    <Button
                      size="small"
                      slot="decrement"
                      variant="tertiary"
                      isIconButton
                    >
                      <SvgMinusIcon />
                    </Button>
                  )}
                </div>
              </div>
            )}
          </Group>
          {description && (
            <Text
              className="bcds-react-aria-NumberField--Description"
              slot="description"
            >
              {description}
            </Text>
          )}
          {isInvalid && (
            <FieldError className="bcds-react-aria-NumberField--Error">
              {errorMessage}
            </FieldError>
          )}
        </>
      )}
    </ReactAriaNumberField>
  );
}
