import {
  NumberField as ReactAriaNumberField,
  NumberFieldProps as ReactAriaNumberFieldProps,
  FieldError,
  Group,
  Input,
  Label,
  ValidationResult,
} from "react-aria-components";

import Button from "../Button";
import SvgExclamationIcon from "../Icons/SvgExclamationIcon";
import SvgMinusIcon from "../Icons/SvgMinusIcon";
import SvgPlusIcon from "../Icons/SvgPlusIcon";
import Text from "../Text";

import "./NumberField.css";

interface NumberFieldProps extends ReactAriaNumberFieldProps {
  size?: "small" | "medium";
  label?: string;
  description?: string;
  unitLabel?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
}

export default function NumberField({
  size = "medium",
  label,
  description,
  unitLabel,
  errorMessage,
  ...props
}: NumberFieldProps) {
  return (
    <ReactAriaNumberField
      className={`bcds-react-aria-NumberField ${size}`}
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
            <div className="bcds-react-aria-NumberField--InputContainer">
              <Input className="bcds-react-aria-NumberField--Input" />
              {unitLabel && (
                <span
                  className="bcds-react-aria-NumberField--UnitLabel"
                  slot="label"
                >
                  {unitLabel}
                </span>
              )}
              {isInvalid && <SvgExclamationIcon />}
            </div>
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
