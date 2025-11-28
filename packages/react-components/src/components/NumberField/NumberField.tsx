import {
  NumberField as ReactAriaNumberField,
  NumberFieldProps as ReactAriaNumberFieldProps,
  FieldError,
  Group,
  Input,
  Label,
  Text,
} from "react-aria-components";

import Button from "../Button";
import SvgExclamationIcon from "../Icons/SvgExclamationIcon";
import SvgMinusIcon from "../Icons/SvgMinusIcon";
import SvgPlusIcon from "../Icons/SvgPlusIcon";

import "./NumberField.css";

interface NumberFieldProps extends ReactAriaNumberFieldProps {
  size?: "small" | "medium";
  label?: string;
  description?: string;
  errorMessage?: string;
}

export default function NumberField({
  size = "medium",
  label,
  description,
  errorMessage,
  ...props
}: NumberFieldProps) {
  return (
    <ReactAriaNumberField
      className={`bcds-react-aria-NumberField ${size}`}
      {...props}
    >
      {({ isInvalid }) => (
        <>
          {label && (
            <Label className="bcds-react-aria-NumberField--Label">
              {label}
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
